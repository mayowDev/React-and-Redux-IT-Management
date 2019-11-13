import React, { useState } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { addLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";

import M from "materialize-css/dist/js/materialize.min.js";

const AddLogModal = ({ addLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "please fill the missing input" });
    } else {
      const newLog = {
        tech,
        message,
        attention,
        date: new Date()
      };

      addLog(newLog);
      M.toast({ html: `New log add by${tech}` });

      // clear fields
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div id='add-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Messge
            </label>
          </div>
        </div>

        {/* tech row */}

        <div className='row'>
          <div className='input-field'>
            <select
              className='browser-default'
              name='tech'
              value={tech}
              onChange={e => setTech(e.target.value)}
            >
              {/* techSelectOptions */}
              <option value='' disabled>
                Select Technician
              </option>
              <TechSelectOptions />
            </select>
          </div>
        </div>

        {/* check box row */}
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className=' modal-footer'>
        <a
          href='#!'
          onClick={onSubmit}
          className='waves-effect red waves-light btn'
        >
          Enter
        </a>
      </div>
    </div>
  );
};

AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};
const modalStyle = {
  width: "75%",
  height: "75%"
};
// we dont ned mapStateToProps b/c we not maping any state from app lvlstate
// so we set null it's positions
export default connect(
  null,
  { addLog }
)(AddLogModal);
