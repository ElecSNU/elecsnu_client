import React, { useEffect, useRef } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { fire_storage } from '../../configs/firebase/config';
import { b64toBlob } from './HelperFunctions';

import './FaceDetect.css';

const FaceDetect = () => {
    const videoRef = useRef();
    const webcamRef = useRef(null);

    const playVideo = async () => {
        await loadFaceDetectModels();
        navigator.getUserMedia(
            { video: {} },
            (stream) =>
                (videoRef.current.srcObject = stream),
            (e) => console.error(e)
        );
    };

    const loadFaceDetectModels = async () => {
        await faceapi.nets.tinyFaceDetector
            .loadFromUri('/models')
            .then((result) =>
                console.log('SUCCESS', result)
            )
            .catch((e) => console.log('ERROR', e));
    };

    const faceDetect = async () => {
        // await loadFaceDetectModels();
        const detections2 = await faceapi.detectAllFaces(
            videoRef.current,
            new faceapi.TinyFaceDetectorOptions()
        );
        if (detections2.length === 1) {
            if (capture())
                setTimeout(() => {
                    const elecId = window.location.pathname.split(
                        '/'
                    )[3];

                    window.location.pathname = `/dashboard/poll/${elecId}/voting/detected`;
                }, 500);

            videoRef.current.pause();
        }
    };

    const capture = () => {
        let screenshot = null;
        if (webcamRef && webcamRef.current)
            screenshot = webcamRef.current.getScreenshot();

        let ssBlob = null;
        if (screenshot)
            ssBlob = b64toBlob(
                screenshot.split(',')[1],
                'image/jpeg'
            );

        console.log('HEY');
        if (ssBlob) {
            // uploadImage(ssBlob, fire_storage);
            fire_storage
                .ref('face_image')
                .put(ssBlob)
                .then(() => {
                    window.localStorage.setItem(
                        'imageUploaded',
                        'y'
                    );
                });
            // console.log(imageLink);
            return true;
        }
    };

    useEffect(() => {
        window.localStorage.removeItem('imageUploaded');
        // loadFaceDetectModels();
        playVideo();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     if (faceDetectStatus) showLoader(true);
    // }, [faceDetectStatus]);

    return (
        <div id='face-detect'>
            <h1 className='heading-text foreground-back center-text capital text'>
                Verifying voter Identity
            </h1>
            <br />
            {/* {faceDetectStatus ? (
                <></>
            ) : ( */}
            <>
                <video
                    ref={videoRef}
                    autoPlay
                    style={{
                        transform: 'scale(-1, 1)',
                    }}
                    className='border-radius-15 box-shadow video'
                    onPlay={() =>
                        setInterval(() => faceDetect(), 500)
                    }
                ></video>
                <Webcam
                    audio={false}
                    height={720}
                    ref={webcamRef}
                    screenshotFormat='image/jpeg'
                    width={1280}
                    className='video'
                    style={{
                        opacity: '0',
                        position: 'absolute',
                    }}
                />
            </>
            {/* )}   */}
        </div>
    );
};

export default FaceDetect;
