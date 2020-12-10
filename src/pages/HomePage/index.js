import React, { useEffect } from 'react';
import { useStoreActions } from 'easy-peasy';

import './HomeArt.css';

import homeArt from '../../assets/images/home-art.svg';

const HomePage = () => {
    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    useEffect(() => {
        checkLoginAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            id='home'
            style={{
                width: '100%',
                height: '100%',
            }}
        >
            <div className='voting-banner'>
                <h1>Let's make voting fun!</h1>
                <button className='submit-button'>
                    Vote Now!
                </button>
            </div>
            <div className='home-art'>
                <img src={homeArt} alt='home-art' />
            </div>
        </div>
    );
};

export default HomePage;
