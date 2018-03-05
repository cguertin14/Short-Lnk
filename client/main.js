import { Meteor } from 'meteor/meteor';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Switch } from 'react-router';
import { createBrowserHistory } from 'history';
import { Tracker } from 'meteor/tracker';
import { history } from 'history';

import SignUp from './../imports/ui/SignUp';
import Link from './../imports/ui/Link';
import NotFound from './../imports/ui/NotFound';
import Login from './../imports/ui/Login';

const unauthenticatedPages = ['/','/signup'];
const authenticatedPages = ['/links'];
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

window.browserHistory = createBrowserHistory();

Tracker.autorun(() => {
    const history = createBrowserHistory();
    const isAuthenticated = !!Meteor.userId();
    const pathname = history.location.pathname;
    const isUnauthenticatedPage = unauthenticatedPages.includes(pathname);
    const isAuthenticatedPage = authenticatedPages.includes(pathname);

    if (isUnauthenticatedPage && isAuthenticated)
        history.push('/links');
    else if (isAuthenticatedPage && !isAuthenticated)
        history.push('/');
    
    console.log('isAuthenticated',isAuthenticated);
});

Meteor.startup(() => {
    ReactDOM.render(routes, document.getElementById('app'));
});