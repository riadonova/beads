import React from 'react';
import { Link } from 'react-router-dom';

export class Home extends React.Component {
    render() {
        return (
            <div>
                <h1>Home Page</h1>
                <Link to="/login">Login</Link>
            </div>
        )
    }
}
