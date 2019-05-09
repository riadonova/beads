import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/database';
import './firebase.service';
import { tree } from './tree';

const provider = new firebase.auth.GoogleAuthProvider();

const userCursor = tree.select('user');

var user = firebase.auth().currentUser;

if (user) {
    const {uid, displayName, email, photoURL} = user;
    userCursor.set({uid, displayName, email, photoURL});
}

export function waitForUser() {
    return new Promise(resolve => {
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                const {uid, displayName, email, photoURL} = user;
                userCursor.set({uid, displayName, email, photoURL});
            } else {
                userCursor.set(null);
            }
            resolve(user);
        });
    })
}





provider.setCustomParameters({
    'login_hint': 'user@example.com'
});

function readUser(userId) {
    return firebase.database().ref('/users/' + userId).once('value').then(function(snapshot) {
        return snapshot.val();
    });
}

function writeUser(userData) {

}

export function signInWithGoogle() {
    return firebase.auth().signInWithPopup(provider).then(result => {
        //debugger;
        // This gives you a Google Access Token. You can use it to access the Google API.
        const token = result.credential.accessToken;
        // The signed-in user info.
        //const user = readUser(result.user.uid);
        const {uid, displayName, email, photoURL} = result.user;
        userCursor.set({uid, displayName, email, photoURL});
    }).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        // ...
    });
}

export function authorized() {
    return firebase.auth().currentUser;
}
