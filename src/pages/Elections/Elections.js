import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import useFirestore from '../../hooks/useFirestore';

import Manifesto_icon from '../../assets/images/manifesto_icon.svg';

import './Elections.css';

const Elections = () => {
    const params = useParams();
    const electionDocs = useFirestore('newelections').docs;

    const [electionDetails, setElectionDetails] = useState(
        {}
    );

    const [totalCandidates, setTotalCandidates] = useState(
        0
    );

    // 0 ==> Active
    // 1 ==> Past
    // 2 ==> Upcoming
    const [electionState, setElectionState] = useState(2);

    const getElectionDetails = () => {
        const userRoll = window.localStorage.getItem(
            'user_roll'
        );
        electionDocs.forEach((election) => {
            if (election.id === params.election_id) {
                let candidateNames = [];
                election.election_candidates.forEach(
                    (c) => {
                        candidateNames = [
                            ...candidateNames,
                            c.candidate_name,
                        ];
                    }
                );

                setTotalCandidates(candidateNames);

                setElectionDetails(election);
                if (!election.started) {
                    setElectionState(2);
                } else if (
                    election.started &&
                    !election.ended &&
                    !election.voters.includes(
                        Number(userRoll)
                    )
                ) {
                    setElectionState(0);
                } else {
                    setElectionState(1);
                }
                return;
            }
        });
    };

    useEffect(() => {
        getElectionDetails();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [electionDocs]);

    return (
        <div
            id='election'
            className='border-radius-15 box-shadow background-light-translucent'
        >
            <div
                id='election-content'
                className='d-flex-column'
            >
                <div className='election-heading heading-text background-accent1 border-radius-15 foreground-light'>
                    Voting - {electionDetails.election_name}
                </div>
                <div className='candidate-container'>
                    <div className='heading-text foreground-accent2'>
                        CANDIDATE LIST
                    </div>
                    <div className='candidates '>
                        {electionDetails !== {} &&
                            electionDetails.election_candidates &&
                            electionDetails.election_candidates.map(
                                (candidate) => {
                                    return (
                                        <div
                                            className='candidate d-flex background-1 border-radius-15'
                                            key={
                                                candidate.candidate_roll_no
                                            }
                                        >
                                            <h2 className='candidate-name heading-text capital-text foreground-light'>
                                                {
                                                    candidate.candidate_name
                                                }
                                            </h2>
                                            <a
                                                href={
                                                    candidate.candidate_manifesto
                                                }
                                                target='__blank'
                                                className='candidate-manifesto heading-text foreground-light'
                                            >
                                                MANIFESTO
                                                <img
                                                    src={
                                                        Manifesto_icon
                                                    }
                                                    alt='.'
                                                />
                                            </a>
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
                {electionState === 1 ? (
                    <Link
                        className='submit-button background-accent1'
                        onClick={() => {}}
                        to={`/dashboard/results/${params.election_id}`}
                    >
                        RESULTS
                    </Link>
                ) : (
                    <Link
                        className={`submit-button background-accent1 ${
                            electionState === 0
                                ? ''
                                : 'disabled'
                        }`}
                        onClick={() =>
                            console.log('Clicked')
                        }
                        to={{
                            pathname: `/dashboard/poll/${params.election_id}/voting`,
                            search: `?candidates=${totalCandidates.toString()}`,
                        }}
                    >
                        VOTE
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Elections;
