import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class RequestsIndex extends React.Component {
  state = {
    requests: []
  }

  componentDidMount() {
    Axios
    .get('/api/requests/find', {
      headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
    })
    .then(res => this.setState({ requests: res.data }));
  }

  acceptRequest = (request) => {
    console.log('accepted');
    console.log(request);

    // once request has been made, alter state to include editted request
  }

  rejectRequest = (request) => {
    console.log('rejected');
    console.log(request);

    // once request has been made, alter state to include editted request
  }

  render() {
    return (
      <div>
        <h1>My Pending Requests</h1>

        { this.state.requests.length === 0 && <h2>You have no pending requests at this point.</h2>}

        { this.state.requests.length !== 0 && <ul>
          { this.state.requests.map(request =>
            <li key={request._id}>
              <ul>
                <li><Link to={`/users/${request.sender._id}`}>{ request.sender.username }</Link></li>
                <li>{ request.band.bandName }</li>
                <li>{ request.message }</li>
                <li onClick={() => this.acceptRequest(request)} className="btn btn-success">Accept</li>
                <li onClick={() => this.rejectRequest(request)} className="btn btn-danger">Reject</li>
              </ul>
            </li>
          )}
        </ul>}

      </div>
    );
  }
}

export default RequestsIndex;
