import { Meteor } from 'meteor/meteor';
import ReactDOM from 'react-dom';
import { Tracker } from 'meteor/tracker';
import { onAuthChange, routes } from './../imports/routes/routes';
import { Links } from './../imports/api/links';

Tracker.autorun(() => {
    const isAuthenticated = !!Meteor.userId();
    onAuthChange(isAuthenticated);
});

Tracker.autorun(() => {
    const links = Links.find().fetch();
    console.log('New Links',links);
});

Meteor.startup(() => {
    Meteor.call('addNumbers',1,2, (err, res) => {
        console.log('Geet User Arguments', err, res);
    });
    ReactDOM.render(routes, document.getElementById('app'));
});