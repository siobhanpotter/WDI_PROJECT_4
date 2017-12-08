import React     from 'react';
import RequestForm from './RequestForm';
// import Axios     from 'axios';
//
// import Auth from '../../lib/Auth';

class RequestsNew extends React.Component {
  // state = {
  //   request: {
  //     message: '',
  //     sender_id: ,
  //     reciever_id: ,
  //     status: ,
  //   }
  // };


  // handleChange = ({ target: { name, value } }) => {
  //   const request = Object.assign({}, this.state.request, { [name]: value });
  //   this.setState({ request });
  // }
  //
  // handleSubmit = (e) => {
  //   e.preventDefault();
  //
  //   Axios
  //     .post('/api/requests', this.state.request, {
  //       headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
  //     })
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <RequestForm
        // handleChange={this.handleChange}
        // handleSubmit={this.handleSubmit}
        // band={this.state.request}
      />
    );
  }
}

export default RequestsNew;
