import React from 'react';
import { Session } from 'meteor/session';
import { Tracker } from 'meteor/tracker';

export default class LinksListFilter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showVisible: false
        };
    }
    componentDidMount() {
        this.showVisibleTracker = Tracker.autorun(() => {
            this.setState({
                showVisible: Session.get('showVisible')
            });
        });
    }
    componentWillUnmount() {
        this.showVisibleTracker.stop();
    }
    render() {
        return (
            <div>
                <label className="checkbox">
                    <input 
                        type="checkbox"
                        onChange={(e) => this.setState({ showVisible: Session.set('showVisible',!e.target.checked) })} 
                        className="checkbox__box"
                    />
                    Show Hidden Links
                </label>
            </div>
        );
    }
}