import React, { useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';
import * as faceapi from 'face-api.js';
import { fire_storage } from '../../configs/firebase/config';
import { uploadImage, b64toBlob } from './HelperFunctions';

import './FaceRecog.css';

const FaceRecog = ({
    faceRecogStatus,
    setFaceRecogStatus,
    showLoader,
}) => {
    const videoRef = useRef();
    const webcamRef = useRef(null);

    const [faceDetected, setFaceDetected] = useState(false);

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
        if (!faceDetected) {
            const detections2 = await faceapi.detectAllFaces(
                videoRef.current,
                new faceapi.TinyFaceDetectorOptions()
            );
            if (detections2.length === 1 && !faceDetected) {
                console.log(faceDetected);
                setFaceDetected(true);
                if (faceDetected) capture();

                videoRef.current.pause();
            }
        }
    };

    const capture = () => {
        if (faceDetected) {
            console.log(faceDetected);
            let screenshot = null;
            if (webcamRef && webcamRef.current)
                screenshot = webcamRef.current.getScreenshot();

            let ssBlob = null;
            if (screenshot)
                ssBlob = b64toBlob(
                    screenshot.split(',')[1],
                    'image/jpeg'
                );

            let imageLink = '';
            if (ssBlob) {
                imageLink = uploadImage(
                    ssBlob,
                    fire_storage
                );
                // console.log(imageLink);
            }
        }
        return;
    };

    useEffect(() => {
        window.localStorage.removeItem('imageUploaded');
        // loadFaceDetectModels();
        if (!faceDetected) playVideo();
    }, []);

    // useEffect(() => {
    //     if (faceDetected) showLoader(true);
    // }, [faceDetected]);

    return (
        <div id='face-recog'>
            <h1 className='heading-text foreground-back center-text capital text'>
                Verifying voter Identity
            </h1>
            {/* {faceDetected ? (
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
            {/* )} */}
        </div>
    );
};

export default FaceRecog;
