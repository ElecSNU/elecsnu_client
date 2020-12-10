const firebase = require('firebase');
require('firebase/firestore');
const fs = require('fs');

const mainApp = firebase.initializeApp({
    apiKey: 'AIzaSyAMCgqzA-YOkFvsojV5JuQ8T1jEb3uLQgI',
    authDomain: 'swe-2-42cc3.firebaseapp.com',
    projectId: 'swe-2-42cc3',
    storageBucket: 'swe-2-42cc3.appspot.com',
    messagingSenderId: '263749183114',
    appId: '1:263749183114:web:6a62633739b0efa3226f73',
});

const db = mainApp.firestore();

const electionData = require('./electionData.json');
const voters_krData = require('./voters_krData.json');
const voter_groupsData = require('./voter_groupsData.json');

// electionData.forEach((e) => {
//     db.collection('elections').add(e);
// });

// Object.keys(voter_groupsData).forEach((g) =>
//     db
//         .collection('voter_groups')
//         .doc(g)
//         .set(voter_groupsData[g])
// );

Object.keys(voters_krData).forEach((v) => {
    db.collection('voters_kr').doc(v).set(voters_krData[v]);
});
