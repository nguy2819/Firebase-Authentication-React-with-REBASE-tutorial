var Rebase = require('re-base');
var firebase = require('firebase');
var app = firebase.initializeApp({
    apiKey: "AIzaSyAskNvPLe8AdnRFtDZ6i2JL7b4Tt2_l-kY",
    authDomain: "react-firebase-authentic-21445.firebaseapp.com",
    databaseURL: "https://react-firebase-authentic-21445.firebaseio.com",
    projectId: "react-firebase-authentic-21445",
    storageBucket: "",
    messagingSenderId: "1083346612472"
});
var base = Rebase.createClass(app.database());