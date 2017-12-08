import React    from 'react';
import Axios    from 'axios';

import Promise  from 'bluebird';
import { Link } from 'react-router-dom';

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
        <section>
          <h1>Musicians</h1>
          <div className="row">
            {this.state.users.map(user => {
              return(
                <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">

                  <div className="image-tile col-md-4">
                    <img src={user.image} className="img-responsive" width="700px" />
                  </div>
                  <h1>{ user.username }</h1>
                  <p>{ user.mainInstrument }</p>
                  <p>{ user.location }</p>
                  <h5>{ user.style }</h5>
                  { <Link to={`/users/${user.id}`} className="standard-button">
                    <i className="fa fa-pencil" aria-hidden="true"></i>Read More
                  </Link>}
                </div>
              );
            })}
          </div>
        </section>
        <section>
          <h1>Bands</h1>
          <div className="row">
            {this.state.bands.map(band => {
              return(
                <div key={band.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">
                  <h1>{ band.username }</h1>
                  <div className="image-tile col-md-6">
                    <img src={band.image} className="img-responsive" />
                  </div>
                  <h5>{ band.style }</h5>
                  <h2>{ band.createdBy }</h2>
                  <p>{ band.location }</p>
                  { <Link to={`/bands/${band.id}`} className="standard-button">
                    <i className="fa fa-pencil" aria-hidden="true"></i>Read More
                  </Link>}
                </div>
              );
            })}
          </div>
        </section>
      </div>

    );
  }
}

export default MainIndex;
