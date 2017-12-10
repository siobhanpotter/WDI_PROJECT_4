import React    from 'react';
import Axios    from 'axios';
import _ from 'lodash';
// import styled from 'styled-components';
// import Button from '../styled-components/Button.js'

// import SearchBar from './SearchBar';
import Promise  from 'bluebird';
import { Link } from 'react-router-dom';

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
    // const cheeses = _.orderBy(this.state.cheeses, ['name'], ['asc']);
    console.log(bands);

    // render() {

    return (
      <div>
        <section>

          {/* <SearchBar handleSort={this.handleSort} handleSearch={this.handleSearch} /> */}

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

export default BandsIndex;
