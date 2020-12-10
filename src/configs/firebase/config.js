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
    apiKey: 'AIzaSyD4GUzGWvZyd-lRTrLapit5hSAFuG1EaYw',
    authDomain: 'swe-testing-c9c07.firebaseapp.com',
    databaseURL: 'https://swe-testing-c9c07.firebaseio.com',
    projectId: 'swe-testing-c9c07',
    storageBucket: 'swe-testing-c9c07.appspot.com',
    messagingSenderId: '994917797834',
    appId: '1:994917797834:web:a36834979bdcb325c60933',
};

const fire_app = firebase.initializeApp(firebaseConfig);

export const fire_auth = fire_app.auth();
export const fire_store = fire_app.firestore();
export const fire_storage = fire_app.storage();
export default fire_app;
