import React from 'react';
import { withRouter } from 'react-router';
import { Accounts } from 'meteor/accounts-base';

class Link extends React.Component {
    onLogout() {
        //this.props.history.push('/');
        Accounts.logout();
    }
    render () {
        return (
            <div>
                <h1>Your Links</h1>
                <button onClick={this.onLogout.bind(this)}>Logout</button>
            </div>
        );
    }
}

export default withRouter(Link);