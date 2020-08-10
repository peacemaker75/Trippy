import React from 'react';
import './containers/Config';
import './containers/HomeContainer';
import './Global';
import './App.css';
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
            </Route>
          </Switch>
        </div>
    </Router>
    )
    
  }
}

export default App;