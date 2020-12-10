import React, { useEffect, useState } from 'react';

import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';

import './Voting.css';
import FaceRecog from './FaceRecog';

const FaceDetect = React.lazy(() => import('./FaceDetect'));
const Choosing = React.lazy(() => import('./Choosing'));

const VotingPage = () => {
    const face_detected = window.location.pathname.split(
        '/'
    )[5];

    const candidates = new URL(
        document.location
    ).searchParams
        .get('candidates')
        .split(',');

    return (
        <div
            id='voting-page'
            className='background-light-translucent border-radius-15 box-shadow'
        >
            {face_detected === undefined ? (
                <FaceDetect />
            ) : face_detected === 'detected' ? (
                <FaceRecog />
            ) : face_detected === 'recognised' ? (
                <Choosing candidates={candidates} />
            ) : (
                <div style={{ color: 'red' }}>ERROR</div>
            )}
        </div>
    );
};

const Voting = (props) => {
    useEffect(() => {
        // toast.info('Please provide camera permissions!');
    }, []);

    return (
        <div id='voting' className='background-light'>
            <ParticleBackground child={VotingPage} />
        </div>
    );
};

export default Voting;
