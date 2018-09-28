import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App.jsx';
import { E404 } from './E404.jsx';
import { Router, Route, Switch } from 'react-router';

import createBrowserHistory from 'history/createBrowserHistory';
const customHistory = createBrowserHistory();

ReactDOM.render(
    <Router history={customHistory}>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/list-days" component={App} />
            <Route path="/add-day" component={App} />
            <Route component={E404} />
        </Switch>
    </Router>,
    document.getElementById('root')
)