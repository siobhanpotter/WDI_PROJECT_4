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
      style: '',
      members: [],
      memberRequired: '',
      formatted_address: ''
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


  handleLocationChange = (name, formatted_address, location) => {
    const band = Object.assign({}, this.state.band, { name, formatted_address, location });
    this.setState({ band });
  }

  render() {
    return (
      <BandsNewForm
        handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        handleSelectChange={this.handleSelectChange}
        handleSelectChange2={this.handleSelectChange2}
        handleLocationChange={this.handleLocationChange}
        {...this.state}
      />
    );
  }
}

export default BandsNew;
