import React from 'react';
import Axios from 'axios';

import Auth      from '../../lib/Auth';
import UsersEditForm from './UsersEditForm';

class UsersEdit extends React.Component {
  state = {
    user: {
      username: '',
      email: '',
      password: '',
      image: '',
      about: '',
      instrument: '',
      additionalInstruments: [],
      location: '',
      style: []
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .put(`/api/users/${this.props.match.params.id}`, this.state.user, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(res => this.props.history.push(`/users/${res.data.id}`))
      .catch(err => console.log(err));
  }



  render() {
    return (
      <UsersEditForm
        // history={this.props.history}
        // handleSubmit={this.handleSubmit}
        // handleChange={this.handleChange}
        // artist={this.state.user}
      />
    );
  }
}


export default UsersEdit;
