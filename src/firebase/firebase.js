var Rebase = require('re-base');
var firebase = require('firebase');
var database = require('firebase/database');
import 'firebase/auth'; //initialize the auth object

var app = firebase.initializeApp({
    apiKey: "AIzaSyAskNvPLe8AdnRFtDZ6i2JL7b4Tt2_l-kY",
    authDomain: "react-firebase-authentic-21445.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-21445.firebaseio.com",
    projectId: "react-firebase-authentic-21445",
    storageBucket: "",
    messagingSenderId: "1083346612472"
});

if (!firebase.apps.length) {
    firebase.initializeApp(config);
  }
const auth = firebase.auth();

export {
  auth,
};

var db = firebase.database(app);
var base = Rebase.createClass(app.database());
