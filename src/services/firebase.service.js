import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAUWOVhA6NrdiVfH7yX1fqzy65EjUFv5nE",
    authDomain: "beads-chat.firebaseapp.com",
    databaseURL: "https://beads-chat.firebaseio.com",
    projectId: "beads-chat",
    storageBucket: "beads-chat.appspot.com",
    messagingSenderId: "343902051878",
    appId: "1:343902051878:web:7b0179c6765b1219"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
