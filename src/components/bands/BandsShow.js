import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

// import Auth from '../../lib/Auth';
// import BackButton from '../utility/BackButton';

class BandsShow extends React.Component {
  state = {
    band: null
  }

  componentWillMount() {
    console.log('mounting');

    Axios
      .get(`/api/bands/${this.props.match.params.id}`)
      .then(res => this.setState({ band: res.data }))
      .catch(err => console.log(err));
  }

  // deleteBand = () => {
  //   Axios
  //     .delete(`/api/bands/${this.props.match.params.id}`, {
  //       headers: { 'Authorization': `Bearer ${Auth.getToken()}`}
  //     })
  //     .then(() => this.props.history.push('/'))
  //     .catch(err => console.log(err));
  // }

  render() {
    if (!this.state.band) return null;
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.band.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2>{this.state.band.bandName}</h2>
          <p>{this.state.band.about}</p>
          <h5>Style: {this.state.band.style}</h5>
          <h5>Created By: {this.state.band.createdBy.username}</h5>

          <h3>members: {this.state.band.members && this.state.band.members.map(member => <div key={member._id}>
            {member.username}
          </div>)}</h3>

          {/* <h5>Members: {this.state.band.bandMembers}</h5> */}
          <h5>Member Required: {this.state.band.memberRequired}</h5>
          { <Link to={`/bands/${this.state.band.id}/requests/new`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Apply
          </Link>}
          {/* <button>Apply</button> */}
          {/* <button>Accept</button>
          <button>Decline</button> */}

          {/* { Auth.isAuthenticated() && <Link to={`/artists/${this.state.artist.id}/edit`} className="standard-button">
            <i className="fa fa-pencil" aria-hidden="true"></i>Edit
          </Link>}
          {' '}
          { Auth.isAuthenticated() && <button className="main-button" onClick={this.deleteartist}>
            <i className="fa fa-trash" aria-hidden="true"></i>Delete
          </button>} */}
        </div>
      </div>
    );
  }
}

export default BandsShow;
