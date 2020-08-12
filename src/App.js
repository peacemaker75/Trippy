import React from 'react';
import './containers/Config';
import './containers/HomeContainer';
import './Global';
import './App.css';
import './components/core/Home';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import HomeContainer from './containers/HomeContainer';

class App extends React.Component {
  render() {
    return(
      <Router>
        <div>
          <Switch>
            <Route path="/">
              <HomeContainer />
              <Home />
            </Route>
          </Switch>
        </div>
    </Router>
    )
    
  }
}

export default App;