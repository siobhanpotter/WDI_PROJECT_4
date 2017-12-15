import React    from 'react';
import Axios    from 'axios';

import Promise  from 'bluebird';
// import SimpleSlider  from '../utility/SimpleSlider';
import { Link } from 'react-router-dom';

class DiscoverIndex extends React.Component {
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
      <div className="row">
        <div className="discover-container">
          <div className="col-sm-6 col-lg-6 ">
            <div className="row discover-left main-header-wrapper">
              <h1 className="main-header">Music App</h1>
              <h4>Music App is a way to bring local musicians and bands together.</h4>
              <ul>
                <li>Start a band</li>
                <li>Find new members</li>
                <li>Search for local musicans to jam with</li>
                <li>Apply to join a band</li>
              </ul>
            </div>
            <div className="row discover-left musicians-div">
              <h1>Musicians</h1>
              { <Link to={'/users'} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>View All
              </Link>}
            </div>

            <div className="row discover-left bands-div">
              <h1>Bands</h1>
              { <Link to={'/bands'} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>View   All
              </Link>}
            </div>
          </div>

          <div className="col-sm-6">
            <div className="row disc-img-container">
              <img src="../assets/couple.png" className="img-responsive img-band"  />
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default DiscoverIndex;
