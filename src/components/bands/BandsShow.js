import React    from 'react';
import { Link } from 'react-router-dom';
import Axios    from 'axios';

// import Auth from '../../lib/Auth';
// import BackButton from '../utility/BackButton';

class BandsShow extends React.Component {
  state = {
    band: {}
  }

  componentWillMount() {
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
    return (
      <div className="row">
        <div className="image-tile col-md-6">
          <img src={this.state.band.image} className="img-responsive" />
        </div>
        <div className="col-md-6">
          <h2>{this.state.band.title}</h2>
          <h3>{this.state.band.artist}</h3>
          <p>{this.state.band.about}</p>
          <h5>{this.state.band.style}</h5>
          <button>Apply</button>
          <button>Accept</button>
          <button>Decline</button>

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
