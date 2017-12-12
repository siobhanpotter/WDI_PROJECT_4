import React     from 'react';
import BandsNewForm from './BandsNewForm';
import Axios     from 'axios';

import Auth from '../../lib/Auth';

class BandsNew extends React.Component {
  state = {
    band: {
      bandName: '',
      image: '',
      about: '',
      location: '',
      style: '',
      members: [],
      memberRequired: ''
    },
    removeSelected: true,
    members: [],
    value: []
  }


  componentDidMount() {
    Axios
      .get('/api/users')
      .then(res => {
        const members = res.data.map(member => {
          return { label: member.username, value: member.id };
        });
        this.setState({members}, () => {
          console.log(this.state.members);
        });
      })
      .catch(err => this.setState({ errors: err.response.data.errors }));
  }


  handleChange = ({ target: { name, value } }) => {
    const band = Object.assign({}, this.state.band, { [name]: value });
    this.setState({ band });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const bandMembers = this.state.value.map(member => member.value);
    console.log(bandMembers);
    const band = Object.assign({}, this.state.band, { members: bandMembers });
    console.log(band);
    this.setState({ band }, () => {

      Axios
        .post('/api/bands', this.state.band, {
          headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
        })
        .then(() => this.props.history.push('/'))
        .catch(err => console.log(err));
    });
  }


  handleSelectChange = (value) => {
    this.setState({ value });
  }

  render() {
    return (
      <BandsNewForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleSelectChange={this.handleSelectChange}
        {...this.state}
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
