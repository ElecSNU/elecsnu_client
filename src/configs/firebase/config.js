import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

// const firebaseConfig = {
//     apiKey: process.env.REACT_APP_API_KEY,
//     authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//     databaseURL: process.env.REACT_APP_DATABASE_URL,
//     projectId: process.env.REACT_APP_PROJECT_ID,
//     storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//     messagingSenderId:
//         process.env.REACT_APP_MESSAGING_SENDER_ID,
//     appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
    apiKey: 'AIzaSyAMCgqzA-YOkFvsojV5JuQ8T1jEb3uLQgI',
    authDomain: 'swe-2-42cc3.firebaseapp.com',
    projectId: 'swe-2-42cc3',
    storageBucket: 'swe-2-42cc3.appspot.com',
    messagingSenderId: '263749183114',
    appId: '1:263749183114:web:6a62633739b0efa3226f73',
};

const fire_app = firebase.initializeApp(firebaseConfig);

export const fire_auth = fire_app.auth();
export const fire_store = fire_app.firestore();
export const fire_storage = fire_app.storage();
export default fire_app;
