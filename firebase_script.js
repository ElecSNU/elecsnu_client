const firebase = require('firebase');
require('firebase/firestore');

firebase.initializeApp({
    apiKey: 'AIzaSyCmGWwe8BdUk-0co6_YSjmi3Fx6d-P5t64',
    authDomain: 'elecsnu.firebaseapp.com',
    databaseURL: 'https://elecsnu.firebaseio.com',
    projectId: 'elecsnu',
    storageBucket: 'elecsnu.appspot.com',
    messagingSenderId: '940855381122',
    appId: '1:940855381122:web:a7533509a6d86c623cb89b',
});

var db = firebase.firestore();

// db.collection('voter_groups')
//     .doc('Other')
//     .set({
//         group_id: 6,
//         list: [...other],
//     });

db.collection('elections').onSnapshot((snap) => {
    console.log(snap);
});
