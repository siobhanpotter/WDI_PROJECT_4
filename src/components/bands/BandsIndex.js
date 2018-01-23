import React    from 'react';
import Axios    from 'axios';
import _ from 'lodash';

import BandsSearchBar from './BandsSearchBar';
import Promise  from 'bluebird';
import { Link } from 'react-router-dom';

import GoogleMapBands from '../maps/GoogleMapBands';
import '../../scss/style.scss';

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
    this.setState({ query: e.target.value });
  }

  render() {
    console.log('LOGGING Q IN RENDER METHOD ======> ', this.state.query);
    const { sortBy, sortDirection, query } = this.state;
    const regex = new RegExp(query, 'i');
    const orderedBands = _.orderBy(this.state.bands, [sortBy], [sortDirection]);

    const bands = _.filter(orderedBands, (band) => regex.test(band.bandName));

    return (
      <div>
        <section >

          {/* <div>
            <img src="https://static.pexels.com/photos/8263/pexels-photo.jpg" className="img-responsive"  />
          </div> */}

          <div className="header">
            <h1 id="index-title">Bands</h1>
            <BandsSearchBar handleSort={this.handleSort} handleSearch={this.handleSearch} />
          </div>

          <div className="main-container">
            <div className="row">
              {bands.map(band => {
                return(
                  <div key={band.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">
                    <h3>{ band.bandName }</h3>
                    <div className="img-container">
                      <img src={band.image} className="img-band" />
                    </div>
                    <h5>{ band.style }</h5>
                    { <Link to={`/bands/${band.id}`} className="standard-button">
                      <i className="fa fa-pencil" aria-hidden="true"></i>Read More
                    </Link>}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
        <section>
          <GoogleMapBands bands={this.state.bands} />
        </section>
      </div>
    );
  }
}

export default BandsIndex;
