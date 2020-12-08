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

    const elections = useFirestore('elections');

    const [activeElections, setActiveElections] = useState(
        []
    );

    const [pastElections, setPastElections] = useState([]);

    const [
        upcomingElections,
        setUpcomingElections,
    ] = useState([]);

    const updateStart = async (doc) => {
        fire_store.collection('elections').doc(doc).update({
            started: true,
        });
    };

    const updateEnd = async (doc) => {
        fire_store.collection('elections').doc(doc).update({
            ended: true,
        });
    };

    const sortElections = () => {
        const currentDateTime = new Date();

        setActiveElections([]);
        setPastElections([]);
        setUpcomingElections([]);

        elections.docs.forEach((election) => {
            if (
                (election.started ||
                    currentDateTime >=
                        new Date(
                            election.election_start_time
                        )) &&
                !election.ended &&
                currentDateTime <
                    new Date(election.election_end_time)
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
                    new Date(election.election_start_time)
            ) {
                setUpcomingElections(
                    (upcomingElections) => [
                        ...upcomingElections,
                        election,
                    ]
                );
            } else if (
                election.ended ||
                currentDateTime >=
                    new Date(election.election_end_time)
            ) {
                setPastElections((pastElections) => [
                    ...pastElections,
                    election,
                ]);

                if (!election.ended) {
                    updateEnd(election.id);
                }
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
                    Welcome, {userData.Voter_Name}{' '}
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
