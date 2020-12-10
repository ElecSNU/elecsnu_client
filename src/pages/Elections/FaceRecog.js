import React, { useEffect } from 'react';
import useLoader from '../../hooks/useLoader';
import { fire_storage } from '../../configs/firebase/config';
import { toast } from 'react-toastify';

const FaceRecog = () => {
    const showLoader = useLoader();

    const getImageURL = async () => {
        const url = await fire_storage
            .ref('face_image')
            .getDownloadURL();
        return url;
    };

    const tryFaceRecog = async () => {
        showLoader(true);
        const url = getImageURL();
        const roll_no = window.localStorage.getItem(
            'user_roll'
        );

        // let prediction = await fetch(
        //     // 'https://cors-anywhere.herokuapp.com/' +
        //     'http://24001a0548d5.ngrok.io',
        //     {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             URL: url,
        //             ROLLNO: roll_no,
        //         }),
        //     }
        // );

        // let message = await prediction.json();

        showLoader(false);

        if (true) {
            const elecId = window.location.pathname.split(
                '/'
            )[3];
            window.location.pathname = `/dashboard/poll/${elecId}/voting/recognised`;
        } else {
            toast.error('User not verified!');
            window.location.pathname = '/';
        }
    };

    useEffect(() => {
        tryFaceRecog();
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
