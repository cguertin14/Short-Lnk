import React from 'react';
import { Accounts } from 'meteor/accounts-base';
import PropTypes from 'proptypes';

export default PrivateHeader = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <button onClick={() => Accounts.logout()}>Logout</button>
        </div>
    );
};

PrivateHeader.propTypes = {
    title: PropTypes.string.isRequired,
};