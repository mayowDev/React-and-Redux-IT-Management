import React from "react";
import { connect } from "react-redux";
import { deleteTech } from "../../actions/techActions";
import PropTypes from "prop-types";

import M from "materialize-css/dist/js/materialize.min.js";

const TechModal = ({ tech, deleteTech }) => {
  const onDelete = () => {
    deleteTech(tech.id);

    M.toast({ html: "Tech deleted" });
  };
  return (
    <li className='collection-item'>
      <div>
        {tech.firstName} {tech.lastName}
        <a href='#!' className='secondary-content' onClick={onDelete}>
          {/* delete technician */}
          <i className='material-icons grey-text'>delete</i>
        </a>
      </div>
    </li>
  );
};

TechModal.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(
  null,
  { deleteTech }
)(TechModal);
