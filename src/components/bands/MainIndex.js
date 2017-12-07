import React    from 'react';
import Axios    from 'axios';

import Promise  from 'bluebird';
// import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class MainIndex extends React.Component {
  state = {
    users: [],
    bands: []
  }

  componentWillMount() {
    const promises = {
      users: Axios.get('/api/users').then(res => res.data),
      bands: Axios.get('/api/bands').then(res => res.data)
    };

    Promise.props(promises)
      .then(data => this.setState(data))
      .catch(err => console.log(err));
  }


  render() {
    return (
      <div>
        <h1>Index Page</h1>
        <div className="row">
          {this.state.users.map(user => {
            return(
              <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">
                <h1>{ user.username }</h1>
                {/* <h2>{ user.instrument }</h2>
                <h2>{ user.location }</h2>
                <h2>{ user.image }</h2>
                <h2>{ user.instrument }</h2>
                <h2>{ user.styles }</h2> */}
              </div>
            );
          })}
        </div>
        <div className="row">
          {this.state.bands.map(band => {
            return(
              <div key={band.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">
                <h1>{ band.username }</h1>
                <div className="image-tile col-md-6">
                  <img src={band.image} className="img-responsive" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default MainIndex;
