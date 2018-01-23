import React    from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
  render() {
    return (

      <div className="box-wrapper">
        <div className="container">
          <div className="col">
            <div >
              <Link to="/discover" ><h1 className="music-box">MUSIC BOX</h1></Link>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default Home;
