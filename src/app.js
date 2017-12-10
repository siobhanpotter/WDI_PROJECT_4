import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Link

import 'bootstrap-css-only';
import Routes from './components/utility/Routes';

import Navbar from './components/utility/Navbar';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <header>
            <div>
              <img src="https://static.pexels.com/photos/8263/pexels-photo.jpg" className="img-responsive"  />
            </div>
            <h1>Music App</h1>
            <Navbar />
          </header>
          <main>
            <Routes />
          </main>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
