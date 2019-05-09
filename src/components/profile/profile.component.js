import { branch } from 'baobab-react/higher-order';
import React from 'react';
@branch({
    userProfile: ['user'],
})
class Profile extends React.Component {
    render() {
        const {userProfile} = this.props;
        debugger;
        return (
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}
export {Profile};
