import React, { useRef } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { searchLogs } from "../../actions/logActions";

const SearchBar = ({ searchLogs }) => {
  const text = useRef("");
  const onChange = e => {
    searchLogs(text.current.value); //display while typing b/c we don have submit button
  };
  return (
    <div>
      <nav style={{ marginBottom: "50px" }}>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              {/* search action */}
              <input
                onChange={onChange}
                id='search'
                type='search'
                placeholder='Search Logs'
                ref={text}
              />
              <label className='label-icon' htmlFor='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

SearchBar.propTypes = {
  searchLogs: PropTypes.func.isRequired
};
export default connect(
  null,
  { searchLogs }
)(SearchBar);
