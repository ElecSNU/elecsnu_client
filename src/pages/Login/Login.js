import React, { useEffect, useState } from 'react';
import { fire_auth } from '../../configs/firebase/config';
import { toast } from 'react-toastify';

import './Login.css';

const DesignSide = React.lazy(() => import('./DesignSide'));
const AuthSide = React.lazy(() => import('./AuthSide'));

const Login = () => {
    useEffect(() => {
        let urlParams = new URLSearchParams(
            window.location.search
        );

        let email = '';

        if (urlParams.get('apiKey')) {
            if (
                fire_auth.isSignInWithEmailLink(
                    window.location.href
                )
            ) {
                email = window.localStorage.getItem(
                    'emailForSignIn'
                );
                if (!email) {
                    email = window.prompt(
                        'Please provide your email for confirmation'
                    );
                }
                fire_auth
                    .signInWithEmailLink(
                        email,
                        window.location.href
                    )
                    .then((result) => {
                        console.log(result);
                        window.localStorage.removeItem(
                            'emailForSignIn'
                        );
                        toast.success(
                            'Logged in Successfully'
                        );
                    })
                    .catch((error) => {
                        console.error(error);
                        toast.error(error.message);
                    });
            }
        }
    }, []);

    const [
        showPasswordless,
        setShowPasswordless,
    ] = useState(false);

    return (
        <div
            id='login'
            className='border-radius-15 box-shadow'
        >
            <DesignSide
                showPasswordless={showPasswordless}
            />
            <AuthSide
                showPasswordless={showPasswordless}
                setShowPasswordless={setShowPasswordless}
            />
        </div>
    );
};

export default Login;
