import { thunk, action, thunkOn } from 'easy-peasy';
import { fire_auth as auth } from '../configs/firebase/config';
import { fire_store } from '../configs/firebase/config';

const account = {
    // STORE
    user_logged_in: false,
    token: null,
    user_roll: null,
    user_data: {},

    // THUNKS
    login: thunk(async (actions, { email, password }) => {
        let emailVal = `${email}@snu.edu.in`;
        let passVal = password;

        auth.signInWithEmailAndPassword(emailVal, passVal)
            .then(async (res) => {
                // console.log(res.user.uid);
                await actions.setToken(res.user.uid);
                return true;
            })
            .catch((e) => {
                console.log(e);
                return false;
            });
    }),
    logout: thunk(async (actions) => {
        auth.signOut();
        await actions.setLogout();
    }),
    check_login: thunk(async (actions) => {
        return auth.onAuthStateChanged(async (user) => {
            // console.log(
            //     user
            //         ? 'Already Logged In ' + user.uid
            //         : 'Logged out'
            // );
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
                            .collection('voters')
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
            // console.log(userData);
            state.user_data = userData;
            state.user_roll = roll_no;
        }
    ),
};

export default account;
