import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

// import BackButton from '../utility/BackButton';

function UsersEditForm({ handleSubmit, handleChange, user }) {
  return (
    <div>
      <h1>Edit Profile</h1>
      <div className="row">
        <div className="page-banner col-md-12">
        </div>
        <form onSubmit={handleSubmit} className="col-md-6">

          <div className="form-group">
            <label htmlFor="image">Image</label>
            <input
              type="text"
              className="form-control"
              id="image"
              name="image"
              value={user.image}
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
              value={user.about}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mainInstrument">Instrument</label>
            <input
              type="text"
              className="form-control"
              id="mainInstrument"
              name="mainInstrument"
              value={user.mainInstrument}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="style">Style</label>
            <select
              className="form-control"
              id="style"
              name="style"
              value={user.style}
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


          

          <div>
            <button className="save-button">Save</button>
          </div>

        </form>
      </div>
    </div>
  );
}

export default UsersEditForm;
