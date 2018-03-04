import React from 'react';
import { Link } from 'react-router-dom';

export default class Login extends React.Component {
    render () {
        return (
            <div>
                <h1>Login to Short Lnk</h1>

                login from here

                <Link to="/signup">Have an account?</Link>
            </div>
        );
    }
}