import React, { useRef, useEffect, useState } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';
import { toast } from 'react-toastify';
import { Redirect } from 'react-router-dom';
import useLoader from '../../hooks/useLoader';

import './AuthSide.css';

const PasswordLess = React.lazy(() =>
    import('./Paswordless')
);

const AuthSide = ({
    showPasswordless,
    setShowPasswordless,
}) => {
    const showLoader = useLoader();

    const loginStatus = useStoreState(
        (store) => store.accountModel.temp_status
    );

    const [loggedIn, setLoggedIn] = useState(false);

    const loginAction = useStoreActions(
        (actions) => actions.accountModel.login
    );
    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    const email = useRef();
    const pass = useRef();

    const handleLogin = async () => {
        showLoader(true);
        loginAction({
            email: email.current.value,
            password: pass.current.value,
        });
    };

    useEffect(() => {
        const unsubscribe = checkLoginAction();
        showLoader(false);

        if (loginStatus != null) {
            console.log('hey');

            if (loginStatus[0]) {
                toast.success(loginStatus[1]);
                setLoggedIn(true);

                window.location.pathname = '/';
            } else {
                toast.error(loginStatus[1]);
                setLoggedIn(false);
            }
        }

        return unsubscribe;

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loginStatus]);

    // if (loggedIn) {
    //     return <Redirect to='/' />;
    // } else
    return (
        <section id='auth-side'>
            <PasswordLess
                showPasswordless={showPasswordless}
                setShowPasswordless={setShowPasswordless}
            />
            <div
                id='with-pass'
                className={
                    showPasswordless
                        ? 'show-password-less'
                        : ''
                }
            >
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
                <div className='submit-container'>
                    <button
                        className='submit-button'
                        onClick={handleLogin}
                    >
                        LET'S VOTE
                    </button>
                    <p
                        className='passwordless-option'
                        onClick={() =>
                            setShowPasswordless(true)
                        }
                    >
                        Sign in with ID Card
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AuthSide;
