import React from 'react';
import logo from "../../logo_beads.svg";
import {Link} from "react-router-dom";
import {signInWithGoogle} from "../../services/auth.service";

export class Register extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-7">
                        <img className="logo" src={logo} alt='logo'/>
                    </div>
                    <div className="col-5">
                        <Link className="btn-login btn btn-outline-primary btn-sm" to="/login">Login</Link>
                    </div>
                </div>
                <div className='header'>Sign up</div>
                <button onClick={signInWithGoogle} className="btn btn-dark">Sign Up With Google</button>
            </div>
        )
    }
}

