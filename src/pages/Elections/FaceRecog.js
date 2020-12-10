import React, { useEffect } from 'react';
import useLoader from '../../hooks/useLoader';

const FaceRecog = () => {
    const showLoader = useLoader();

    const tryFaceRecog = async () => {};

    useEffect(() => {
        showLoader(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div
            className='heading-text foreground-accent1 d-flex'
            style={{
                justifyContent: 'center',
                alignItems: 'center',
                fontSize: '5rem',
            }}
        >
            Verifying voter through Face Recognition
        </div>
    );
};

export default FaceRecog;
