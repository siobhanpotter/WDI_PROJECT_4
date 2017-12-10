import React    from 'react';
import Axios    from 'axios';
import _ from 'lodash';
// import styled from 'styled-components';
// import Button from '../styled-components/Button.js'

// import SearchBar from '/SearchBar';
import Promise  from 'bluebird';
import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';



class MainIndex extends React.Component {
  state = {
    users: [],
    sortBy: 'username',
    sortDirection: 'asc',
    query: ''
  }

  componentWillMount() {
    const promises = {
      users: Axios.get('/api/users').then(res => res.data)
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
    const orderedUsers = _.orderBy(this.state.users, [sortBy], [sortDirection]);

    const bands = _.filter(orderedUsers, (user) => regex.test(user.username));

    //
    // const cheeses = _.orderBy(this.state.cheeses, ['name'], ['asc']);
    console.log(bands);

    // render() {

    return (
      <div>
        <section>
          {/* <Button>hi</Button> */}
          <h1>Musicians</h1>
          <div className="row">
            {this.state.users.map(user => {
              return(
                <div key={user.id} className="image-tile col-md-4 col-sm-6 col-xs-12 tile-padding-margin">

                  <div className="image-tile col-md-4">
                    <img src={user.image} className="img-responsive"  />
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
      </div>

    );
  }
}

export default MainIndex;
