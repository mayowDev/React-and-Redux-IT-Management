import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getTechs } from "../../actions/techActions";
import TechModal from "./TechModal";

const TechListModal = ({ getTechs, tech: { techs, loading } }) => {
  // calling our action
  useEffect(() => {
    getTechs();
    // eslint-disable-next-line
  }, []);
  // States are moved to techReducer

  //getTechs action is moved to techActions.js

  return (
    <div id='tech-list-modal' className='modal'>
      <div className='modal-content'>
        <h4>Technician List</h4>
        <ul className='collection'>
          {!loading &&
            techs !== null &&
            techs.map(tech => <TechModal tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  tech: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  tech: state.tech // .tech is techs object in db.json, we mapping through that techs in above
});
export default connect(
  mapStateToProps,
  { getTechs }
)(TechListModal);
