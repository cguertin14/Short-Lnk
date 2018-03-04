import React from 'react';
import { Link } from 'react-router-dom';

export default class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increment() {
        this.setState({
            count: this.state.count + 1
        });
    }
    render() {
        return (
            <div>
                <h1>Join Short Lnk</h1>

                <p>{this.state.count}</p>
                <button onClick={() => {
                    this.setState({ count: this.state.count - 1 });
                }}>-1</button>
                <button onClick={this.increment.bind(this)}>+1</button>

                <Link to="/">Already have an account?</Link>
            </div>
        );
    }
}