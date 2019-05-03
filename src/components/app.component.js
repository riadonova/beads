import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './app.component.scss';
import { Home } from './home/home.component';
import { Login } from './login/login.component';

export function App() {
  return (
      <Router>
          <div className="app">
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
          </div>
      </Router>
  );
}
