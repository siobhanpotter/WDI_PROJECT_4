import React from 'react';

// import BackButton from '../utility/BackButton';

function RequestsForm({ handleSubmit, handleChange, request }) {
// function RequestsForm() {
  return (
    <div>
      <h1>Request to join the band</h1>
      <div className="row">
        <div className="page-banner col-md-12">

        </div>
        <form onSubmit={handleSubmit} className="col-md-6">
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <input
              type="text"
              className="form-control"
              id="message"
              name="message"
              value={request.message}
              onChange={handleChange}
            />
          </div>

          <div>
            <button>Apply</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestsForm;
