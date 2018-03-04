import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';

import SignUp from './../imports/ui/SignUp';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';


const routes = (
    <Router history={createBrowserHistory()}>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={SignUp} />
            <Route path="/links" component={Link} />
            <Route path="*" component={NotFound} />
        </Switch>
    </Router>
);

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});