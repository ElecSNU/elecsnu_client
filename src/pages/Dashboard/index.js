import React, { useState, useEffect } from 'react';
import { useStoreState } from 'easy-peasy';
import { fire_store } from '../../configs/firebase/config';
import useFirestore from '../../hooks/useFirestore';

import './Dashboard.css';

const Elections = React.lazy(() => import('./Elections'));

const Dashboard = () => {
    const userData = useStoreState(
        (store) => store.accountModel.user_data
    );
    const elections = useFirestore('newelections');

    const [activeElections, setActiveElections] = useState(
        []
    );

    const [pastElections, setPastElections] = useState([]);

    const [
        upcomingElections,
        setUpcomingElections,
    ] = useState([]);

    const updateStart = async (doc) => {
        fire_store
            .collection('newelections')
            .doc(doc)
            .update({
                started: true,
            });
    };

    const updateEnd = async (doc) => {
        fire_store
            .collection('newelections')
            .doc(doc)
            .update({
                ended: true,
            });
    };

    const sortElections = () => {
        const currentDateTime = new Date();
        const user_roll_no = Number(
            window.localStorage.getItem('user_roll')
        );

        setActiveElections([]);
        setPastElections([]);
        setUpcomingElections([]);

        elections.docs.forEach((election) => {
            if (
                !election.election_eligible_voters.includes(
                    user_roll_no
                )
            ) {
                return;
            }

            if (
                election.voters.includes(user_roll_no) ||
                election.ended ||
                currentDateTime >=
                    new Date(
                        election.election_end_time.seconds *
                            1000
                    )
            ) {
                setPastElections((pastElections) => [
                    ...pastElections,
                    election,
                ]);

                if (
                    !election.ended &&
                    !election.voters.includes(user_roll_no)
                ) {
                    updateEnd(election.id);
                }
            } else if (
                (election.started ||
                    currentDateTime >=
                        new Date(
                            election.election_start_time
                                .seconds * 1000
                        )) &&
                !election.ended &&
                currentDateTime <
                    new Date(
                        election.election_end_time.seconds *
                            1000
                    )
            ) {
                setActiveElections((activeElections) => [
                    ...activeElections,
                    election,
                ]);

                if (!election.started) {
                    updateStart(election.id);
                }
            } else if (
                !election.started &&
                currentDateTime <
                    new Date(
                        election.election_start_time
                            .seconds * 1000
                    )
            ) {
                setUpcomingElections(
                    (upcomingElections) => [
                        ...upcomingElections,
                        election,
                    ]
                );
            } else {
                console.log(election);
            }
        });
    };

    useEffect(() => {
        sortElections();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [elections.docs]);

    return (
        <div
            id='dashboard'
            className='border-radius-15 box-shadow'
        >
            <div id='dashboard-content'>
                <div className='heading-text'>
                    Welcome, {userData.Voter_Name}
                </div>
                <div className='subheading-text batch-heading'>
                    {userData.Voter_Dept} {userData.Batch}
                </div>
                <div className='elections'>
                    <Elections
                        polls={activeElections}
                        state={'active'}
                    />
                    <Elections
                        polls={pastElections}
                        state={'past'}
                    />
                    <Elections
                        polls={upcomingElections}
                        state={'upcoming'}
                    />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
