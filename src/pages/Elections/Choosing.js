import React, { useState, useEffect } from 'react';
import useFirestore from '../../hooks/useFirestore';
import { fire_store } from '../../configs/firebase/config';
import { useStoreState, useStoreActions } from 'easy-peasy';
import useLoader from '../../hooks/useLoader';

import Share from './Share';

import './Choosing.css';

const Choosing = ({ candidates }) => {
    const [chosen, setChosen] = useState(0);
    const electionDocs = useFirestore('elections').docs;
    const userData = useStoreState(
        (store) => store.accountModel.user_data
    );
    const checkLogin = useStoreActions(
        (actions) => actions.accountModel.check_login
    );
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
                voter_gender: userData.Voter_Gender,
                groups: `${userData.Voter_Dept},Batch${userData.Batch}`,
                candidate_chosen: chosen,
            },
        ];

        fire_store
            .collection('elections')
            .doc(electionId)
            .set(electionDetails);

        showLoader(false);
        setDone(true);
    };

    useEffect(() => {
        checkLogin();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

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
