import React, { useRef, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import './AuthSide.css';

const AuthSide = () => {
    const loggedIn = useStoreState(
        (store) => store.accountModel.user_logged_in
    );

    const loginAction = useStoreActions(
        (actions) => actions.accountModel.login
    );
    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    const email = useRef();
    const pass = useRef();

    const handleLogin = async () => {
        loginAction({
            email: email.current.value,
            password: pass.current.value,
        });
    };

    useEffect(() => {
        const unsubscribe = checkLoginAction();

        if (loggedIn) {
            window.location.pathname = '/';
        }

        return unsubscribe;
    });

    return (
        <section id='auth-side'>
            <h1 className='login-heading'>LOGIN</h1>
            <div id='get-input'>
                <input
                    className='input-text'
                    type='text'
                    ref={email}
                    placeholder='Enter SNU Net ID'
                />
                <input
                    className='input-text'
                    type='password'
                    ref={pass}
                    placeholder='Enter password'
                />
            </div>
            <button
                className='submit-button'
                onClick={() => handleLogin()}
            >
                LET'S VOTE
            </button>
        </section>
    );
};

export default AuthSide;
