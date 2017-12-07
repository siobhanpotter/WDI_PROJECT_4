import React    from 'react';
import Axios    from 'axios';
// import { Link } from 'react-router-dom';

// import Auth from '../../lib/Auth';

class BandsUsersIndex extends React.Component {
  state = {
    users: []
  }

  componentWillMount() {
    Axios
      .get('/api/users')
      .then(res => this.setState({ users: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Index, Boom!</h1>
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

      </div>
    );
  }
}

export default BandsUsersIndex;
