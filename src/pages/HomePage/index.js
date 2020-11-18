import React from 'react';

import './HomeArt.css';

import homeArt from '../../assets/images/home-art.svg';

const HomePage = () => {
    return (
        <div id='home'>
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
