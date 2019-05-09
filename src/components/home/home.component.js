import React from 'react';
import { Link } from 'react-router-dom';
import './home.component.scss';

import logo from '../../logo_beads.svg';
import piano from '../../piano.svg';
import {UnautorizedHeader} from "../common/unautorized-header/unautorized-header";

export class Home extends React.Component {
    render() {
        return (
            <div>
               <UnautorizedHeader/>
                <div className="block">
                    <div className="row">
                        <div className="col-7">
                            <h1>Music chat</h1>
                            <h2 >non-standard solution for communication </h2>
                        </div>
                        <div className="col-5">
                            <Link className="btn-register btn btn-primary " to="/register">Sign up</Link>
                        </div>
                    </div>
                </div>
                <img className="piano" src={piano} alt='piano'/>
            </div>
        )
    }
}
