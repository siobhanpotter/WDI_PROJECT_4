import React        from 'react';
import RegisterForm from './RegisterForm';
import Axios        from 'axios';

import Auth from '../../lib/Auth';
// import AutoComplete from '../utility/AutoComplete';
// import GoogleMap from '../maps/GoogleMap';


class Register extends React.Component {
  state = {
    user: {
      username: '',
      name: '',
      email: '',
      password: '',
      passwordConfirmation: '',
      formatted_address: ''
    }
  };

  handleChange = ({ target: { name, value }}) => {
    const user = Object.assign({}, this.state.user, { [name]: value });
    this.setState({ user });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/register', this.state.user)
      .then(res => {
        Auth.setToken(res.data.token);
        this.props.history.push('/discover');
      })
      .catch(err => console.log(err));
  }


  handleLocationChange = (name, formatted_address, location) => {
    const user = Object.assign({}, this.state.user, { name, formatted_address, location });
    this.setState({ user });
  }

  render() {
    return (
      <RegisterForm
        user={this.state.user}
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleLocationChange={this.handleLocationChange}
        {...this.state}
      />
    );
  }
}

export default Register;
