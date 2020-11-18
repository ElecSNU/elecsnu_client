import React from 'react';
import { useStoreState } from 'easy-peasy';

const Dashboard = () => {
    const userData = useStoreState(
        (store) => store.accountModel.user_data
    );

    console.log(userData);

    return (
        <div>
            <h1>Welcome, {userData.name} </h1>
            <h3>
                {userData.department} {userData.batch}
            </h3>
        </div>
    );
};

export default Dashboard;
