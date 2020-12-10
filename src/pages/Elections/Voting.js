import React, { useEffect, useState } from 'react';

import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';

import './Voting.css';
import FaceRecog from './FaceRecog';

const FaceDetect = React.lazy(() => import('./FaceDetect'));
const ErrorPage = React.lazy(() => import('./FaceDetect'));

const VotingPage = () => {
    const face_detected = window.location.pathname.split(
        '/'
    )[5];
    console.log(face_detected);

    // 0 ==> PROCESSING
    // 1 ==> SUCCESSFULL
    // 2 ==> ERROR
    const [faceRecogStatus, setFaceRecogStatus] = useState(
        0
    );

    return (
        <div
            id='voting-page'
            className='background-light-translucent border-radius-15 box-shadow'
        >
            {faceRecogStatus === 0 &&
            face_detected === undefined ? (
                <FaceDetect />
            ) : face_detected === 'detected' ? (
                <FaceRecog />
            ) : faceRecogStatus === 1 ? (
                <div>Okay then</div>
            ) : (
                <ErrorPage />
            )}
        </div>
    );
};

const Voting = (props) => {
    const candidates = new URL(
        document.location
    ).searchParams
        .get('candidates')
        .split(',');

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
