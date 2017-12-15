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
      å  {/* <div>
            <img src="https://static.pexels.com/photos/8263/pexels-photo.jpg" className="img-responsive"  />
          </div> */}



        <div>
          <div className="col-sm-12">
            <div className="row">
              <div className="section-one-outer col-lg-6">
                <section className="container">
                  <h1>Musicians</h1>
                  { <Link to={'/users'} className="standard-button">
                    <i className="fa fa-pencil" aria-hidden="true"></i>View All
                  </Link>}
                </section>
              </div>
            </div>

            <div className="row">
              <div className="section-two-outer col-lg-6">
                <section className="container">
                  <h1>Bands</h1>
                  { <Link to={'/bands'} className="standard-button">
                    <i className="fa fa-pencil" aria-hidden="true"></i>View   All
                  </Link>}
                </section>
              </div></div>
          </div>

          <div className="container" role="main">
            <div className="row">
              <div className="col-sm-4">
                <div className="row">
                </div>
              </div>
            </div>
          </div>



        </div>
      </div>
    );
  }
}

export default DiscoverIndex;
