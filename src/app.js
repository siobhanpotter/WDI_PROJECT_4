import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
// Link

import Routes from './components/utility/Routes';

class App extends React.Component {

  render() {
    return (
      <Router>
        <div>
          <h1>WDI Project 4: MERN Stack App</h1>
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
