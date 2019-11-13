import React from "react";

const AddButton = () => {
  return (
    // big blue add icon

    <div className='fixed-action-btn'>
      {/* addlogModal */}
      <a
        href='#add-log-modal'
        className='btn-floating btn-large red darken-2 modal-trigger'
      >
        <i className='large material-icons'>add</i>
      </a>

      {/* list of add techs */}

      <ul>
        <li>
          <a
            href='#tech-list-modal'
            className='btn-floating green modal-trigger'
          >
            <i className='material-icons'>people</i>
          </a>
        </li>
        {/* add technician */}
        <li>
          <a href='#add-tech-modal' className='btn-floating blue modal-trigger'>
            <i className='material-icons'>person_add</i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default AddButton;
