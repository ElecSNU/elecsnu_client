import React, { useRef, useState } from 'react';
import Quagga from 'quagga';
import { toast } from 'react-toastify';
import { useStoreActions } from 'easy-peasy';

import useFirestore from '../../hooks/useFirstore';

import './PasswordLess.css';

const Paswordless = ({
    showPasswordless,
    setShowPasswordless,
}) => {
    const fileRef = useRef();

    const voters_data = useFirestore('voters');

    const [idCardImage, setIdCardImage] = useState('');
    const [detectedRoll, setDetectedRoll] = useState(null);

    const passwordless_login_action = useStoreActions(
        (actions) => actions.accountModel.passwordless_login
    );

    const scan = async (img) => {
        await Quagga.decodeSingle(
            {
                src: img,
                numOfWorkers: 0, // Needs to be 0 when used within node
                locate: true,
                decoder: {
                    readers: ['code_128_reader'], // List of active readers
                },
            },
            (result) => {
                if (result && result.codeResult) {
                    console.log(result);
                    setDetectedRoll(result.codeResult.code);
                } else {
                    console.log('not detected', result);
                }
            }
        );
    };

    const loginPasswordless = async () => {
        if (detectedRoll != null) {
            let voter_found = false;
            let voterEmail = '';
            voters_data.docs.forEach((doc) => {
                if (doc.id === detectedRoll) {
                    voter_found = true;
                    voterEmail = `${doc.net_id}@snu.edu.in`;
                }
            });

            if (!voter_found || voterEmail === '') {
                toast.error('User not Found!');
            } else {
                passwordless_login_action({
                    email: voterEmail,
                });
            }
        } else {
            toast.error(
                'Roll Number not detected from ID Card! Please select a valid image'
            );
        }
    };

    return (
        <div
            id='password-less'
            className={
                showPasswordless ? 'show-password-less' : ''
            }
        >
            <h1
                className='login-heading'
                style={{ fontSize: '2rem' }}
            >
                LOGIN
            </h1>

            <div className='submit-container'>
                <input
                    type='file'
                    accept='image/*'
                    style={{
                        display: 'none',
                        opacity: '0',
                        width: '100%',
                        height: '100%',
                        position: 'absolute',
                    }}
                    ref={fileRef}
                    onChange={async () => {
                        URL.revokeObjectURL(idCardImage);

                        if (fileRef.current.files[0]) {
                            console.log(
                                fileRef.current.files[0]
                            );
                            let imgURL = URL.createObjectURL(
                                fileRef.current.files[0]
                            );
                            setIdCardImage(imgURL);
                            await scan(imgURL);
                        }
                    }}
                />
                <button
                    className='submit-border dark'
                    onClick={() => {
                        fileRef.current.click();
                    }}
                >
                    Choose ID Card image
                </button>
            </div>
            <div
                id='id-image'
                style={{
                    height:
                        idCardImage === '' ? '0' : '45%',
                    border:
                        idCardImage === ''
                            ? 'none'
                            : '2px solid var(--accent2)',
                }}
            >
                <img
                    src={idCardImage}
                    alt=''
                    style={{
                        display:
                            idCardImage === ''
                                ? 'none'
                                : 'block',
                    }}
                />
            </div>
            <div className='submit-container'>
                <button
                    className='submit-button'
                    onClick={async () => {
                        loginPasswordless();
                    }}
                >
                    LET'S VOTE
                </button>
                <p
                    className='passwordless-option'
                    onClick={() => {
                        setIdCardImage('');
                        setDetectedRoll(null);
                        setShowPasswordless(false);
                    }}
                >
                    Sign in with Email and Password
                </p>
            </div>
        </div>
    );
};

export default Paswordless;
