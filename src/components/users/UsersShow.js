import React    from 'react';
// import { Link } from 'react-router-dom';
import Axios    from 'axios';

// import Auth from '../../lib/Auth';
// import BackButton from '../utility/BackButton';

class UsersShow extends React.Component {
  state = {
    user: {}
  }

  componentWillMount() {
    Axios
      .get(`/api/users/${this.props.match.params.id}`)
      .then(res => this.setState({ user: res.data }))
      .catch(err => console.log(err));
  }

  // deleteuser = () => {
  //   Axios
  //     .delete(`/api/users/${this.props.match.params.id}`, {
  //       headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
  //     })
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log(err));
  // }

  render() {
    return (
      <div className="row">
        <h1>Profile Page</h1>
        <div className="image-tile col-md-6">
          <img src={this.state.user.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2>{this.state.user.username}</h2>
          <p>{this.state.user.about}</p>
          <h5>{this.state.user.style}</h5>

          {/* { Auth.isAuthenticated() && <Link to={`/artists/${this.state.artist.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteartist}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>} */}
          <button>Edit Profile</button>
        </div>
      </div>
    );
  }
}

export default UsersShow;
