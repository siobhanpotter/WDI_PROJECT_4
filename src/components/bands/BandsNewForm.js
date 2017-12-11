import React from 'react';
// import Select from 'react-select';
import 'react-select/dist/react-select.css';

// import BackButton from '../utility/BackButton';

function BandsNewForm({ handleSubmit, handleChange, band }) {
// function CreateBandForm() {
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

          {/* <div className="form-group">
            <Select
              name="form-field-name"
              value={this.state.selectedOption.value}
              onChange={this.handleChange}
              options={[
                { value: 'one', label: 'One' },
                { value: 'two', label: 'Two' }
              ]}
            />
          </div> */}

          <div className="form-group">
            <label htmlFor="members">Members</label>
            <input
              type="text"
              className="form-control"
              id="members"
              name="members"
              value={band.members}
              onChange={handleChange}
            />
          </div>

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
}

export default BandsNewForm;
