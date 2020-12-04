import React, { useState } from 'react';
import { useStoreState } from 'easy-peasy';

import './Dashboard.css';

const Elections = React.lazy(() => import('./Elections'));

const Dashboard = () => {
    const userData = useStoreState(
        (store) => store.accountModel.user_data
    );

    const [activeElections, setActiveElections] = useState([
        {
            Election_Id:
                'Student Council Elections 2019 Active 1',
            Election_Candidates: [],
        },
        {
            Election_Id:
                'Student Council Elections 2019 Active 2',
            Election_Candidates: [],
        },
    ]);
    const [pastElections, setPastElections] = useState([
        {
            Election_Id:
                'Student Council Elections 2019 Past 1',
            Election_Candidates: [],
        },
        {
            Election_Id:
                'Student Council Elections 2019 Past 2',
            Election_Candidates: [],
        },
    ]);
    const [
        upcomingElections,
        setUpcomingElections,
    ] = useState([
        {
            Election_Id:
                'Student Council Elections 2019 Upcoming 1',
            Election_Candidates: [],
        },
        {
            Election_Id:
                'Student Council Elections 2019 Upcoming 2',
            Election_Candidates: [],
        },
    ]);

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
