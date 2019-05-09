import React from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import './app.component.scss';
import { authorized } from '../services/auth.service';
import { Home } from './home/home.component';
import { Login } from './login/login.component';
import { Profile } from './profile/profile.component';
import {Register} from "./register/register.component";

function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={props =>
                authorized() ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: props.location }
                        }}
                    />
                )
            }
        />
    );
}


export function App() {
  return (
      <Router>
          <div className="app">
              <Route path="/" exact component={Home} />
              <Route path="/login" component={Login} />
              <Route path="/register" component={Register} />
              <PrivateRoute path="/profile" component={Profile} />
          </div>
      </Router>
  );
}
