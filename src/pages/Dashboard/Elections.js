import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

import './Elections.css';

const Elections = ({ polls, state }) => {
    const [startPoll, setStartPoll] = useState(null);

    return startPoll != null ? (
        <Redirect to={'/poll/' + startPoll} />
    ) : (
        <div id='active-elections' className='election'>
            <h1 className='heading-text'>
                {state} Elections
            </h1>
            <div
                className={`polls ${
                    state === 'active'
                        ? 'background-1'
                        : 'background-accent2'
                } border-radius-15`}
            >
                {polls.map((poll, index) => (
                    <div
                        className='poll border-radius-15 background-light subheading-text'
                        onClick={() => {
                            setStartPoll('123');
                        }}
                        key={index}
                    >
                        {poll.Election_Id}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Elections;
