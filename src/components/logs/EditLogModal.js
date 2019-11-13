import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { updateLog } from "../../actions/logActions";
import TechSelectOptions from "../techs/TechSelectOptions";
import M from "materialize-css/dist/js/materialize.min.js";

const EditLogModal = ({ current, updateLog }) => {
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  // filling current data in the edit form
  useEffect(() => {
    if (current) {
      setMessage(current.message);
      setTech(current.tech);
      setAttention(current.attention);
    }
  }, [current]);

  // what will happen when we hit enter
  const onSubmit = () => {
    if (message === "" || tech === "") {
      M.toast({ html: "please fill the missing input" });
    } else {
      // update/edit the form  when we click the log
      const updLog = {
        id: current.id,
        message,
        tech,
        attention,
        date: new Date()
      };
      updateLog(updLog);
      M.toast({ html: `updated by ${tech}` });
      // cleare the inputs after entered
      setMessage("");
      setAttention(false);
      setTech("");
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
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
            {/* // no need  fo label in EditLogModal */}
            {/* <label htmlFor='message' className='active'>
              Log Messge
            </label> */}
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
              <option vlaue='' disabled>
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

      {/* handling onSubmit */}
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

const modalStyle = {
  width: "75%",
  height: "75%"
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  current: PropTypes.object
};
const mapStateToProp = state => ({
  current: state.log.current
});
export default connect(
  mapStateToProp,
  { updateLog }
)(EditLogModal);
