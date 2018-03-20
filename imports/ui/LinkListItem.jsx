import React from 'react';
import PropTypes from 'proptypes';
import Clipboard from 'clipboard';
import { Meteor } from 'meteor/meteor';
import moment from 'moment';

export default class LinkListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            justCopied: false
        };
    }
    componentDidMount() {
        this.clipboard = new Clipboard(this.refs.copy);
        this.clipboard.on('success', () => {
            this.setState({ justCopied: true });
            setTimeout(() => this.setState({ justCopied: false }), 1000);
        }).on('error', () => {
            alert('Unable to copy, please try again manually');
        });
    }
    componentWillUnmount() {
        this.clipboard.destroy();
    }
    renderStats() {
        const visitMessage = this.props.visitedCount === 1 ? 'visit' : 'visits';
        let visitedMessage = null;

        if (typeof (this.props.lastVisitedAt) === 'number') {
            visitedMessage = `(visited ${moment(this.props.lastVisitedAt).fromNow()})`;
        }

        return <p className="item__message">{this.props.visitedCount} {visitMessage} {visitedMessage}</p>;
    }
    render() {
        return (
            <div className="item">
                <h2>{this.props.url}</h2>
                <p className="item__message">{this.props.shortUrl}</p>
                {this.renderStats()}
                <a href={this.props.shortUrl} target="blank" className="button button--pill button--link">Visit</a>
                <button className="button button--pill" ref="copy" data-clipboard-text={this.props.shortUrl}>{this.state.justCopied ? 'Copied' : 'Copy'}</button>
                <button className="button button--pill" onClick={() => Meteor.call('links.setVisibility', this.props._id, !this.props.visible)}>
                    {this.props.visible ? 'Hide' : 'Unhide'}
                </button>
            </div>
        );
    }
}

LinkListItem.propTypes = {
    _id: PropTypes.string.isRequired,
    shortUrl: PropTypes.string.isRequired,
    userId: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    visible: PropTypes.bool.isRequired,
    visitedCount: PropTypes.number.isRequired,
    lastVisitedAt: PropTypes.number
};