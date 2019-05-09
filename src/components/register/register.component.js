import React from 'react';
import logo from "../../logo_beads.svg";
import {Link} from "react-router-dom";
import {signInWithGoogle} from "../../services/auth.service";
import {UnautorizedHeader} from "../common/unautorized-header/unautorized-header";
import {IconButton} from "../common/icon-button/icon-button.component";
import googleIcon from "../../logo_google.svg";

export class Register extends React.Component {
    signUp() {
        signInWithGoogle().then(() => {
            this.props.history.push(`/profile`);
        });
    }
    render() {
        return (
            <div>
                <UnautorizedHeader/>
                <div className='header'>Sign up</div>
                <IconButton className="btn btn-dark" icon={googleIcon}>Sign Up With Google</IconButton>
                {/*<button onClick={signInWithGoogle} className="btn btn-dark">Sign Up With Google</button>*/}
            </div>
        )
    }
}

