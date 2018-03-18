import React from 'react';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { Session } from 'meteor/session';

// My code
import { Links } from './../api/links';
import LinkListItem from './LinkListItem';

export default class LinksList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: []
        };
    }
    componentDidMount() {
        this.linksTracker = Tracker.autorun(() => {
            Meteor.subscribe('links');
            const links = Links.find({ visible: Session.get('showVisible') }).fetch();
            this.setState({ links });
        });
    }
    componentWillUnmount() {
        this.linksTracker.stop();
    }
    renderLinksListItems() {
        return this.state.links.map(link => {
            return <LinkListItem key={link._id} shortUrl={Meteor.absoluteUrl(link._id)} {...link} />
        });
    }
    render() {
        return (
            <div>
                <p>Link List</p>
                <div>
                    {this.renderLinksListItems()}
                </div>
            </div>
        );
    }
}