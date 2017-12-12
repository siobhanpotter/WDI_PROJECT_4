import React from 'react';

import MultiSelect from '../utility/MultiSelect';

const BandsNewForm = ({ handleSubmit, handleChange, band, handleSelectChange, removeSelected, value, members }) => {
// const BandsNewForm = ({ handleSubmit, handleChange, band }) => {
  return (
    <div>
      <h1>Create Band</h1>
      <div className="row">
        <div className="page-banner col-md-12">

        </div>
        <form onSubmit={handleSubmit} className="col-md-6">
          <div className="form-group">
            <label htmlFor="bandName">Band Name</label>
            <input
              type="text"
              className="form-control"
              id="bandName"
              name="bandName"
              value={band.bandName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={band.image}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="about">About</label>
            <input
              type="text"
              className="form-control"
              id="about"
              name="about"
              value={band.about}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              className="form-control"
              id="location"
              name="location"
              value={band.location}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="style">Style</label>
            <select
              className="form-control"
              id="style"
              name="style"
              value={band.style}
              onChange={handleChange}
            >
              <option value="" disabled>Please Select</option>
              <option>Folk</option>
              <option>Rock</option>
              <option>Pop</option>
              <option>Metal</option>
              <option>Jazz</option>
            </select>
          </div>


          <MultiSelect
            handleSelectChange={handleSelectChange}
            removeSelected={removeSelected}
            options={members}
            value={value}
          />

          {/* <div className="form-group">
            <label htmlFor="members">Members</label>
            <input
              type="text"
              className="form-control"
              id="members"
              name="members"
              value={band.members}
              onChange={handleChange}
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="memberRequired">Member Required</label>
            <input
              type="text"
              className="form-control"
              id="memberRequired"
              name="memberRequired"
              value={band.memberRequired}
              onChange={handleChange}
            />
          </div>

          <div>
            <button className="save-button">Save</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BandsNewForm;
