import React    from 'react';
import Axios    from 'axios';
import _ from 'lodash';
// import styled from 'styled-components';
// import Button from '../styled-components/Button.js'

import BandsSearchBar from './BandsSearchBar';
import Promise  from 'bluebird';
import { Link } from 'react-router-dom';

// import GoogleMap from '../maps/GoogleMap';

// import Auth from '../../lib/Auth';


class BandsIndex extends React.Component {
  state = {
    bands: [],
    sortBy: 'bandName',
    sortDirection: 'asc',
    query: ''
  }

  componentWillMount() {
    const promises = {
      bands: Axios.get('/api/bands').then(res => res.data)
    };

    Promise.props(promises)
      .then(data => this.setState(data))
      .catch(err => console.log(err));
  }


  handleSort = (e) => {
    const [sortBy, sortDirection] = e.target.value.split('|');
    this.setState({ sortBy, sortDirection });
  }

  handleSearch = (e) => {
    console.log(e.target.value);
    this.setState({ query: e.target.value });
  }


  render() {
    console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
    // console.log(this.state.cheeses);
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');
    const orderedBands = _.orderBy(this.state.bands, [sortBy], [sortDirection]);

    const bands = _.filter(orderedBands, (band) => regex.test(band.bandName));

    //
    // const bands = _.orderBy(this.state.bands, ['name'], ['asc']);
    console.log(bands);

    // render() {

    return (
      <div>
        <section>

          {/* <div>
            <img src="https://static.pexels.com/photos/8263/pexels-photo.jpg" className="img-responsive"  />
          </div> */}

          <BandsSearchBar handleSort={this.handleSort} handleSearch={this.handleSearch} />
          <div className="container">
            <h1>Bands</h1>
            <div className="row">
              {bands.map(band => {
                return(
                  <div key={band.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">
                    <h1>{ band.bandName }</h1>
                    <div className="image-tile col-md-6 img-container">
                      <img src={band.image} className="img-responsive band-img" />
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
          </div>
        </section>

      </div>

    );
  }
}

export default BandsIndex;
