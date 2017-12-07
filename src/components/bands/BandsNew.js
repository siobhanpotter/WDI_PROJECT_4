import React     from 'react';
import BandsNewForm from './BandsNewForm';
import Axios     from 'axios';

import Auth from '../../lib/Auth';

class BandsNew extends React.Component {
  state = {
    band: {
      username: '',
      image: '',
      about: '',
      // members: {},
      location: '',
      style: []
    }
  };


  handleChange = ({ target: { name, value } }) => {
    const band = Object.assign({}, this.state.band, { [name]: value });
    this.setState({ band });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    Axios
      .post('/api/bands', this.state.band, {
        headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
      })
      .then(() => this.props.history.push('/'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <BandsNewForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        band={this.state.band}
      />
    );
  }
}

export default BandsNew;


// const bandSchema = mongoose.Schema({
//   username: { type: String, required: true },//username
//   image: { type: String, required: true },
//   description: { type: String, required: true},
//   members: { type: {} },//name:intrument required: true
//   //search by the parameters below
//   location: { type: String, required: true },
//   style: { type: Array, required: true },
//   type: { type: String }//band or musician
// });
