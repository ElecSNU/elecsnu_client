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

election1 = {
    election_results: { public: true },
    election_name: 'CSE 2022 Class Representative',
    started: true,
    election_start_time: '2020-12-02T00:18',
    ended: false,
    election_end_time: '2020-12-4T00:18',
    voters: [1010110734],
    election_candidates: [
        {
            candidate_manifesto:
                'https://firebasestorage.googleapis.com/v0/b/elecsnu.appspot.com/o/Q2UYGmNq7WTbexU9v4IZ%2FKaustubh%20Rai_Manifesto%20-%20Kaustubh%20Rai.pdf?alt=media&token=becec072-84ac-4aca-b5e3-799bd71c3953',
            candidate_name: 'Kaustubh Rai',
            candidate_roll_no: '1810110102',
            candidate_group: 'CSE,Batch2022',
            candidate_gender: 'Male',
        },
        {
            candidate_group: 'CSE,Batch2022',
            candidate_manifesto:
                'https://firebasestorage.googleapis.com/v0/b/elecsnu.appspot.com/o/Q2UYGmNq7WTbexU9v4IZ%2FExperience%20-%20Megha%20Agarwal.pdf?alt=media&token=e68ca772-0f72-4a4c-b845-78dd770c00d4',
            candidate_roll_no: '1810110129',
            candidate_name: 'Megha Agarwal',
            candidate_gender: 'Female',
        },
    ],
    election_votes: [
        {
            groups: 'CSE,Batch2022',
            voter_gender: 'Male',
        },
    ],
};

election2 = {
    election_results: { public: true },
    election_name: 'CSE 2022 Class Representative 1',
    started: false,
    election_start_time: '2020-12-02T00:18',
    ended: false,
    election_end_time: '2020-12-14T00:18',
    voters: [1010110734],
    election_candidates: [
        {
            candidate_manifesto:
                'https://firebasestorage.googleapis.com/v0/b/elecsnu.appspot.com/o/Q2UYGmNq7WTbexU9v4IZ%2FKaustubh%20Rai_Manifesto%20-%20Kaustubh%20Rai.pdf?alt=media&token=becec072-84ac-4aca-b5e3-799bd71c3953',
            candidate_name: 'Kaustubh Rai',
            candidate_roll_no: '1810110102',
            candidate_group: 'CSE,Batch2022',
            candidate_gender: 'Male',
        },
        {
            candidate_group: 'CSE,Batch2022',
            candidate_manifesto:
                'https://firebasestorage.googleapis.com/v0/b/elecsnu.appspot.com/o/Q2UYGmNq7WTbexU9v4IZ%2FExperience%20-%20Megha%20Agarwal.pdf?alt=media&token=e68ca772-0f72-4a4c-b845-78dd770c00d4',
            candidate_roll_no: '1810110129',
            candidate_name: 'Megha Agarwal',
            candidate_gender: 'Female',
        },
    ],
    election_votes: [
        {
            groups: 'CSE,Batch2022',
            voter_gender: 'Male',
        },
    ],
};

election3 = {
    election_results: { public: true },
    election_name: 'CSE 2022 Class Representative',
    started: false,
    election_start_time: '2020-12-12T00:18',
    ended: false,
    election_end_time: '2020-12-14T00:18',
    voters: [1010110734],
    election_candidates: [
        {
            candidate_manifesto:
                'https://firebasestorage.googleapis.com/v0/b/elecsnu.appspot.com/o/Q2UYGmNq7WTbexU9v4IZ%2FKaustubh%20Rai_Manifesto%20-%20Kaustubh%20Rai.pdf?alt=media&token=becec072-84ac-4aca-b5e3-799bd71c3953',
            candidate_name: 'Kaustubh Rai',
            candidate_roll_no: '1810110102',
            candidate_group: 'CSE,Batch2022',
            candidate_gender: 'Male',
        },
        {
            candidate_group: 'CSE,Batch2022',
            candidate_manifesto:
                'https://firebasestorage.googleapis.com/v0/b/elecsnu.appspot.com/o/Q2UYGmNq7WTbexU9v4IZ%2FExperience%20-%20Megha%20Agarwal.pdf?alt=media&token=e68ca772-0f72-4a4c-b845-78dd770c00d4',
            candidate_roll_no: '1810110129',
            candidate_name: 'Megha Agarwal',
            candidate_gender: 'Female',
        },
    ],
    election_votes: [
        {
            groups: 'CSE,Batch2022',
            voter_gender: 'Male',
        },
    ],
};

db.collection('elections').add(election1);
db.collection('elections').add(election2);
db.collection('elections').add(election3);
