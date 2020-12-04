import React from 'react';

const DesignSide = ({ showPasswordless }) => {
    return (
        <section
            id='design-side'
            className={`background-1 ${
                showPasswordless ? 'show-password-less' : ''
            }`}
        >
            <div className='text-1 heading-text foreground-light'>
                <div>OUR</div>
                <div>VOTE</div>
            </div>
            <div className='text-2 heading-text foreground-light'>
                <div>IS</div>
                <div>OUR</div>
                <div>VOICE</div>
            </div>
        </section>
    );
};

export default DesignSide;
