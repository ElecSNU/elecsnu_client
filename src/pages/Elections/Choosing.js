import React, { useState } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { fire_store } from '../../configs/firebase/config';
import { toast } from 'react-toastify';
import useLoader from '../../hooks/useLoader';

import Share from './Share';

import './Choosing.css';

const Choosing = ({ candidates }) => {
    const [chosen, setChosen] = useState(0);
    const electionDocs = useFirestore('newelections').docs;
    const showLoader = useLoader();
    const [done, setDone] = useState(false);
    const [electionName, setElectionName] = useState('');

    const castVote = () => {
        showLoader(true);
        const electionId = window.location.pathname.split(
            '/'
        )[3];
        let electionDetails = {};
        electionDocs.forEach((e) => {
            if (e.id === electionId) {
                electionDetails = e;
                return;
            }
        });
        setElectionName(electionDetails.election_name);

        let userGender = window.localStorage.getItem(
            'voter_gender'
        );
        let userDept = window.localStorage.getItem(
            'voter_dept'
        );
        let userBatch = window.localStorage.getItem(
            'voter_batch'
        );
        let userRoll = window.localStorage.getItem(
            'user_roll'
        );

        electionDetails.voters = [
            ...electionDetails.voters,
            Number(userRoll),
        ];
        electionDetails.election_votes = [
            ...electionDetails.election_votes,
            {
                voter_gender: userGender,
                groups: `${userDept},Batch${userBatch}`,
                candidate_chosen: chosen,
            },
        ];

        fire_store
            .collection('newelections')
            .doc(electionId)
            .set(electionDetails);

        showLoader(false);

        toast.success('Successfully casted vote!');

        setDone(true);
    };

    return (
        <>
            {done ? (
                <Share electionName={electionName} />
            ) : (
                <></>
            )}
            <div id='choosing'>
                <div className='heading-text capital-text center-text foreground-back'>
                    Who would you want to vote for?
                </div>
                <div className='candidates'>
                    {candidates.map((candidate, index) => {
                        return (
                            <div
                                className={`candidate background-1 border-radius-15 ${
                                    index === chosen
                                        ? 'chosen'
                                        : ''
                                }`}
                                key={index}
                                onClick={() =>
                                    setChosen(index)
                                }
                            >
                                <h1 className='capital-text subheading-text foreground-light center-text'>
                                    {candidate}
                                </h1>
                            </div>
                        );
                    })}
                </div>
                <button
                    className='submit-button'
                    onClick={castVote}
                >
                    CAST VOTE
                </button>
            </div>
        </>
    );
};

export default Choosing;
