import React from 'react';
import { Link } from 'react-router-dom';

import './Capabilities.css';

const Capabilities = () => {
    const capabilities = [
        {
            id: 'integrity',
            heading: 'Voting Integrity',
            subheading:
                'Trust the results of your votes and elections',
            points: [
                {
                    heading: 'One-to-One Voting',
                    text:
                        'Ensure voters are not able to cast multiple votes on the same ballot',
                },
                {
                    heading: 'Voter Authentication',
                    text:
                        'The voters are authenticated using Machine learning techniques like face detection and face recognition',
                },
            ],
        },
        {
            id: 'security',
            heading: 'Security',
            subheading:
                "Ensure the election's security and peace of mind.",
            points: [
                {
                    heading: 'Anonymity of votes',
                    text:
                        'Even the admin will not be able to see who voted for whom. Thus maintaining the anonymity of votes.',
                },
                {
                    heading: 'Voter Login',
                    text:
                        'Face detection technique is used to make sure only one person logs in while voting. Face recognition is also carried out to ensure that the person casting the vote and the one logged in are the same ',
                },
            ],
        },
        {
            id: 'admin',
            heading: 'Admin Experience',
            subheading:
                'Manage the voting process with ease',
            points: [
                {
                    heading: 'Voting Platform',
                    text:
                        'Gain control over your voting events. See the results analysis and everything at one place',
                },
                {
                    heading: 'Vote Management Services',
                    text:
                        'The admin can create groups of voters for different elections like club elections, student council elections, etc.',
                },
                {
                    heading: 'Voter Upload Modules',
                    text:
                        'Our voter list upload modules let you manage the list of eligible voters, their details, and login information.',
                },
                {
                    heading: 'Vote Scheduling Options',
                    text:
                        'Set elections to open and close at a preferred date and time',
                },
            ],
        },
        {
            id: 'voter',
            heading: 'Voter Experience',
            subheading:
                'Offer voters a straightforward, pleasant experience',
            points: [
                {
                    heading: 'Voter Notifications',
                    text:
                        'Even the admin will not be able to see who voted for whom. Thus maintaining the anonymity of votes.',
                },
                {
                    heading:
                        'Effective and User Friendly UI',
                    text:
                        'Providing voters an alternate login option using their college ID cards which is a unique-to-the-voter link that bypasses the traditional login page.',
                },
                {
                    heading: 'Candidate Manifestos',
                    text:
                        'There is an option to view the manifestos of all the candidates so that voters can make a more informed decision',
                },
                {
                    heading: 'Social Media',
                    text:
                        'In order to increase the voter turnout,we provide an option for the people who voted to upload a picture on their social media',
                },
            ],
        },
    ];

    return (
        <div id='capabilities'>
            <div className='capabilities-container background-light-translucent border-radius-15 box-shadow'>
                <h1 className='heading-text main-heading foreground-back capital-text center-text'>
                    Capabilities
                </h1>
                <div className='capabilities-links'>
                    {capabilities.map(
                        (capability, index) => (
                            <a
                                className='capability-link'
                                key={index}
                                href={`#${capability.id}`}
                            >
                                <img src='' alt='' />
                                <h1 className='heading-text foreground-accent1 capital-text center-text'>
                                    {capability.heading}
                                </h1>
                            </a>
                        )
                    )}
                </div>
            </div>
            {capabilities.map((capability, index) => (
                <>
                    <div
                        id={capability.id}
                        className={`capabilities-container border-radius-15 box-shadow capability foreground-${
                            index % 2 !== 0
                                ? 'back'
                                : 'light'
                        } background-${
                            index % 2 !== 0
                                ? 'light-translucent'
                                : '1-translucent'
                        }`}
                        key={index}
                    >
                        <div className='capability-headings'>
                            <h1 className='heading-text capital-text'>
                                {capability.heading}
                            </h1>
                            <h2 className='subheading-text'>
                                {capability.subheading}
                            </h2>
                        </div>
                        <ul className='capability-points'>
                            {capability.points.map(
                                (capabilityPoint, i) => (
                                    <li key={i}>
                                        <div className='subheading-text'>
                                            {
                                                capabilityPoint.heading
                                            }
                                        </div>
                                        <p className='normal-text'>
                                            {
                                                capabilityPoint.text
                                            }
                                        </p>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>
                    <br />
                    <br />
                </>
            ))}
            <div style={{ opacity: '0' }}>.</div>
        </div>
    );
};

export default Capabilities;
