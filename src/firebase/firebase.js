import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCt8dSx-LAr5v0qx0gLIXQrkECJsBXSWa0",
    authDomain: "rich-analog-101123.firebaseapp.com",
    databaseURL: "https://rich-analog-101123.firebaseio.com",
    projectId: "rich-analog-101123",
    storageBucket: "rich-analog-101123.appspot.com",
    messagingSenderId: "963482135977"
};

firebase.initializeApp(config);

const database = firebase.database();

export {
    firebase,
    database as
    default
};