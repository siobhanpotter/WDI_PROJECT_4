import React    from 'react';
import Axios    from 'axios';
// import _ from 'lodash';
// import styled from 'styled-components';
// import Button from '../styled-components/Button.js'

// import SearchBar from '/SearchBar';
import Promise  from 'bluebird';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';



class MainIndex extends React.Component {
  state = {
    users: [],
    bands: []
    // sortBy: 'bandName',
    // sortDirection: 'asc',
    // query: ''
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


  // handleSort = (e) => {
  //   const [sortBy, sortDirection] = e.target.value.split('|');
  //   this.setState({ sortBy, sortDirection });
  // }
  //
  // handleSearch = (e) => {
  //   console.log(e.target.value);
  //   this.setState({ query: e.target.value });
  // }
  //
  //
  // render() {
  //   console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
  //   // console.log(this.state.cheeses);
  //   const { sortBy, sortDirection, query } = this.state;
  //   const regex = new RegExp(query, 'i');
  //   const orderedBands = _.orderBy(this.state.bands, [sortBy], [sortDirection]);
  //
  //   const bands = _.filter(orderedBands, (band) => regex.test(band.name));
  //
  //   //
  //   // const cheeses = _.orderBy(this.state.cheeses, ['name'], ['asc']);
  //   console.log(bands);

  render() {

    return (
      <div>
        <div>
          {/* <div>
            <img src="https://static.pexels.com/photos/8263/pexels-photo.jpg" className="img-responsive"  />
          </div> */}

          <div className="section-one-outer">
            <section className="container">

              <h1>Musicians</h1>
              { <Link to={'/users'} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>View All
              </Link>}

              <div className="row">
                {this.state.users.map(user => {
                  return(
                    <div key={user.id} className="image-tile col-md-4   col-sm-6 col-xs-12 tile-padding-margin">

                      <div className="image-tile col-md-6 margin-top">
                        <img src={user.image} className="img-responsive"/>
                      </div>
                      <h1>{ user.username }</h1>
                      <p>{ user.mainInstrument }</p>
                      <h5>{ user.style }</h5>
                      <p>{ user.location }</p>
                      { <Link to={`/users/${user.id}`}   className="standard-button">
                        <i className="fa fa-pencil"   aria-hidden="true"></i>Read More
                      </Link>}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>

          <div className="section-two-outer">
            <section className="container">
              <h1>Bands</h1>
              { <Link to={'/bands'} className="standard-button">
                <i className="fa fa-pencil" aria-hidden="true"></i>View   All
              </Link>}
              <div className="row">
                {this.state.bands.map(band => {
                  return(
                    <div key={band.id} className="image-tile col-md-4     col-sm-6 col-xs-12 tile-padding-margin">
                      <h1>{ band.bandName }</h1>
                      <div className="image-tile col-md-6 ">
                        <img src={band.image} className="img-responsive"   />
                      </div>
                      <h5>{ band.style }</h5>
                      <h2>{ band.createdBy }</h2>
                      <p>{ band.location }</p>
                      { <Link to={`/bands/${band.id}`}     className="standard-button">
                        <i className="fa fa-pencil"   aria-hidden="true"></i>Read More
                      </Link>}
                    </div>
                  );
                })}
              </div>
            </section>
          </div>
        </div>
      </div>

    );
  }
}

export default MainIndex;
