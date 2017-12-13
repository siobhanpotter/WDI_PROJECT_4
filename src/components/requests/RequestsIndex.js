import React from 'react';
import Axios from 'axios';
import { Link } from 'react-router-dom';

import Auth from '../../lib/Auth';

class RequestsIndex extends React.Component {
  state = {
    requests: []
  }

  componentDidMount() {
    this.getRequests();
  }

  getRequests = () => {
    Axios
      .get('/api/requests/find', {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.setState({ requests: res.data }));
  }

  // acceptRequest = (request) => {
  //   console.log('accepted');
  //   console.log(request);
  //   Axios
  //     .get('/api/requests/:id/accept')
  //     .then(res => this.setState({ request: res.data }));
  //   // once request has been made, alter state to include editted request
  // }


  respondToRequest = (request, response) => {
    Axios
      .put(`/api/requests/${request.id}/respond`, { status: response }, {
        headers: {'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => {
        console.log(res);
        this.getRequests();
        // const request = Object.assign({}, this.state.request, res.data);
        // this.setState({ request });
      });
    // once request has been made, alter state to include edited request
  }


  rejectRequest = (request) => {
    console.log('rejected');
    console.log(request);
    Axios
      .get('/api/requests/:id/reject')
      .then(res => {
        const request = Object.assign({}, this.state.request, res.data);
        this.setState({ request });
      });
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
                <li onClick={() => this.respondToRequest(request, 'accepted')} className="btn btn-success">Accept</li>
                <li onClick={() => this.respondToRequest(request, 'rejected')} className="btn btn-danger">Reject</li>
              </ul>
            </li>
          )}
        </ul>}

      </div>
    );
  }
}

export default RequestsIndex;
