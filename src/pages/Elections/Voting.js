import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';

import ParticleBackground from '../../components/ParticleBackground/ParticleBackground';

import './Voting.css';

const FaceRecog = React.lazy(() => import('./FaceRecog'));
const ErrorPage = React.lazy(() => import('./FaceRecog'));

const VotingPage = () => {
    const showLoader = useLoader();

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
            {faceRecogStatus === 0 ? (
                <FaceRecog
                    setFaceRecogStatus={setFaceRecogStatus}
                    faceRecogStatus={faceRecogStatus}
                    showLoader={showLoader}
                />
            ) : faceRecogStatus === 1 ? (
                <></>
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
