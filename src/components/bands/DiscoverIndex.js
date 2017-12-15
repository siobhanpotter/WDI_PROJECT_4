import React    from 'react';
import Axios    from 'axios';

import Promise  from 'bluebird';
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
      <div>
        <div>
          {/* <div>
            <img src="https://static.pexels.com/photos/8263/pexels-photo.jpg" className="img-responsive"  />
          </div> */}
          <div>
            <img src="../assets/guitars.png" className="img-responsive"  />
          </div>
          <div className="section-one-outer">
            <section className="container">
              <h1>Musicians</h1>
              { <Link to={'/users'} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>View All
              </Link>}
            </section>
          </div>

          <div className="section-two-outer">
            <section className="container">
              <h1>Bands</h1>
              { <Link to={'/bands'} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>View   All
              </Link>}
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default DiscoverIndex;
