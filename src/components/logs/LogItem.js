import React from "react";
import { connect } from "react-redux";
import { deleteLog, setCurrent } from "../../actions/logActions";
import PropTypes from "prop-types";
import Moment from "react-moment";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog, setCurrent }) => {
  const onDelete = () => {
    deleteLog(log.id);

    M.toast({ html: "Log deleted" });
  };
  return (
    <li className='collection-item'>
      <div>
        {/* fulling the form with cliked log */}
        <a
          href='#edit-log-modal'
          className={`modal-trigger ${log.attention ? "red-text" : "blue-tex"}`}
          onClick={() => setCurrent(log)}
        >
          {log.message}
        </a>
        <br />
        <span className='grey-text'>
          <span className='black-text'> ID# {log.id} </span>last updated by {""}
          <span className='black-text'>{log.tech}</span> {""}
          <Moment format='MM Do YYYY, h:mm:ss a'>{log.date}</Moment>
        </span>

        {/* deleteLog */}
        <a href='#!' onClick={onDelete} className='secondary-content'>
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

LogItem.propTypes = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired,
  setCurrent: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteLog, setCurrent }
)(LogItem);
