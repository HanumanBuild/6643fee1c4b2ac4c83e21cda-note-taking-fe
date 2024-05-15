import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import MainPage from './components/MainPage';
import SignupPage from './components/SignupPage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path='/' exact component={MainPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/login' component={LoginPage} />
          <Route path='/dashboard' component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;