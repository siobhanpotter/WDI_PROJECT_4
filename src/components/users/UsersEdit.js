import React from 'react';
import Axios from 'axios';

import Auth      from '../../lib/Auth';
import UsersEditForm from './UsersEditForm';

class UsersEdit extends React.Component {
  state = {
    user: {//do all of these fields need to match the model??
      // username: '',
      // email: '',
      // password: '',
      image: '',
      about: '',
      mainInstrument: '',
      // additionalInstruments: [],
      location: '',
      style: ''
    }
  };

  componentDidMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => {
        const user = Object.assign({}, this.state.user, res.data);
        this.setState({ user });
      })
      .catch(err => console.log(err));
  }

  handleChange = ({ target: { name, value } }) => {
    console.log(name, value);
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user }, () => {
      console.log(this.state);
    });
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
        history={this.props.history}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        user={this.state.user}
      />
    );
  }
}


export default UsersEdit;
