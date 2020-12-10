import { thunk, action, thunkOn } from 'easy-peasy';
import { fire_auth as auth } from '../configs/firebase/config';
import { fire_store } from '../configs/firebase/config';

const account = {
    // STORE
    user_logged_in: false,
    token: null,
    user_roll: null,
    user_data: {},
    temp_status: [],

    // THUNKS
    login: thunk(async (actions, { email, password }) => {
        let emailVal =
            email === 'ib370'
                ? 'ishbeswal@gmail.com'
                : `${email}@snu.edu.in`;
        let passVal = password;

        auth.signInWithEmailAndPassword(emailVal, passVal)
            .then(async (res) => {
                // console.log(res.user.uid);
                await actions.setToken(res.user.uid);
                actions.setTempStatus([
                    true,
                    'Logged in successfully!',
                ]);
            })
            .catch((e) => {
                console.log(e);
                actions.setTempStatus([false, e.message]);
            });
    }),
    passwordless_login: thunk(
        async (actions, { email }) => {
            await auth
                .sendSignInLinkToEmail(email, {
                    url: 'http://localhost:3000/login',
                    handleCodeInApp: true,
                })
                .then((res) => console.log(res))
                .then(function () {
                    // The link was successfully sent. Inform the user.
                    // Save the email locally so you don't need to ask the user for it again
                    // if they open the link on the same device.
                    window.localStorage.setItem(
                        'emailForSignIn',
                        email
                    );
                })
                .catch(function (error) {
                    // Some error occurred, you can inspect the code: error.code
                    console.log(error);
                });
        }
    ),
    logout: thunk(async (actions) => {
        auth.signOut();
        await actions.setLogout();
    }),
    check_login: thunk(async (actions) => {
        return auth.onAuthStateChanged(async (user) => {
            if (user) {
                await actions.setToken(user.uid);
            }
        });
    }),
    get_user_data: thunkOn(
        (actions) => actions.setToken,
        async (actions, target) => {
            const uid = target.payload;
            fire_store
                .collection('voter_uid_ref')
                .onSnapshot((snap) => {
                    let roll_no = null;
                    snap.forEach((doc) => {
                        if (doc.id === uid) {
                            roll_no = doc.data()
                                .roll_number;
                        }
                    });
                    if (roll_no == null) {
                        return;
                    } else {
                        fire_store
                            .collection('voters_kr')
                            .onSnapshot((voterSnap) => {
                                let user_data = {};
                                voterSnap.forEach((doc) => {
                                    if (
                                        doc.id === roll_no
                                    ) {
                                        user_data = doc.data();
                                    }
                                });

                                if (user_data === {}) {
                                    return;
                                } else {
                                    actions.setUserData(
                                        user_data,
                                        roll_no
                                    );
                                    return;
                                }
                            });
                    }
                });
        }
    ),

    // ACTIONS
    setToken: action(async (state, token) => {
        localStorage.setItem('token', token);
        state.token = token;
        state.user_logged_in = true;
    }),
    setLogout: action((state) => {
        localStorage.removeItem('token');
        localStorage.removeItem('user_roll');
        state.token = null;
        state.user_roll = null;
        state.user_data = {};
        state.user_logged_in = false;
    }),
    setUserData: action(
        async (state, userData, roll_no) => {
            localStorage.setItem(
                'user_roll',
                userData.Voter_Roll_No
            );
            state.user_data = userData;
            state.user_roll = userData.Voter_Roll_No;
        }
    ),
    setTempStatus: action((state, status) => {
        state.temp_status = status;
    }),
};

export default account;
