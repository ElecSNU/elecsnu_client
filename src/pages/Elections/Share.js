import React from 'react';

import './Share.css';

// import icons
import FaTwitter from 'react-icons/lib/fa/twitter';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaEnvelope from 'react-icons/lib/fa/envelope';
import FaLinkedin from 'react-icons/lib/fa/linkedin';

// import react-custom-share components
import {
    ShareButtonRectangle,
    ShareBlockStandard,
} from 'react-custom-share';

const ShareComponent = (props) => {
    // create object with props for shareBlock
    const shareBlockProps = {
        url: 'elecsnu.firebaseapp.com',
        button: ShareButtonRectangle,
        buttons: [
            { network: 'Twitter', icon: FaTwitter },
            { network: 'Facebook', icon: FaFacebook },
            { network: 'Email', icon: FaEnvelope },
            { network: 'Linkedin', icon: FaLinkedin },
        ],
        text: 'Voting using ElecSNU',
        longtext: `Hey! I just voted for ${props.name} using ElecSNU. Check out their website for more!`,
    };

    return <ShareBlockStandard {...shareBlockProps} />;
};

const Share = ({ electionName }) => {
    return (
        <div id='share'>
            <div className='share-modal'>
                <h1
                    className='heading-text center-text foreground-accent1 border-radius-15 background-1'
                    style={{
                        padding: '2.5%',
                    }}
                >
                    Share your voting experience with
                    everyone!
                </h1>
                <div
                    className='cross'
                    onClick={() => {
                        window.location.pathname = '/';
                    }}
                >
                    x
                </div>
                <ShareComponent name={electionName} />
            </div>
        </div>
    );
};

export default Share;
