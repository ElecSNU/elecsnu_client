import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyCmGWwe8BdUk-0co6_YSjmi3Fx6d-P5t64',
    authDomain: 'elecsnu.firebaseapp.com',
    databaseURL: 'https://elecsnu.firebaseio.com',
    projectId: 'elecsnu',
    storageBucket: 'elecsnu.appspot.com',
    messagingSenderId: '940855381122',
    appId: '1:940855381122:web:a7533509a6d86c623cb89b',
};

const fire_app = firebase.initializeApp(firebaseConfig);

export const fire_auth = fire_app.auth();
export const fire_store = fire_app.firestore();
export default fire_app;
