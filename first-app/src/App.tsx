import React from 'react';
import './App.css';
import Header from './Components/Header';


import HomePage from './Pages/HomePage';

import { Route, BrowserRouter, Switch, withRouter } from 'react-router-dom';
import ContactPage from './Pages/ContactPage';

function App() {
  return (
    <div className="App">
      <Header />
      < br/>
       <Switch>
          <Route exact path='/home' component={withRouter(HomePage)} />
          <Route exact path='/contact' component={withRouter(ContactPage)} />

          <Route path='/' >
              <HomePage />
          </Route>
        </Switch>
    </div>
  );
}

export default App;
