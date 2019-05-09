import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { App } from './components/app.component';
import { waitForUser } from './services/auth.service';
import * as serviceWorker from './serviceWorker';
import './services/firebase.service';
import {root} from 'baobab-react/higher-order';
import {tree} from './services/tree';
const RootedApp = root(tree, App);

waitForUser().then(() => {
    ReactDOM.render(<RootedApp/>, document.getElementById('root'));
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
