import { branch } from 'baobab-react/higher-order';
import React from 'react';
@branch({
    userProfile: ['user'],
})
export class Profile extends React.Component {
    render() {
        const {userProfile} = this.props;
        return (
            <div>
                <h1>Profile</h1>
                <img alt={userProfile.displayName} src={userProfile.photoURL} />
                <p>{userProfile.displayName}</p>
                <p>{userProfile.email}</p>
            </div>
        )
    }
}
