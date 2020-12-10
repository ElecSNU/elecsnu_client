import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';
import useLoader from './hooks/useLoader';

import PrivateRoute from './components/PrivateRoute';

const ParticleBackground = React.lazy(() =>
    import(
        './components/ParticleBackground/ParticleBackground'
    )
);
const Login = React.lazy(() =>
    import('./pages/Login/Login')
);
const HomePage = React.lazy(() =>
    import('./pages/HomePage/index')
);
const Dashboard = React.lazy(() =>
    import('./pages/Dashboard/index')
);
const Elections = React.lazy(() =>
    import('./pages/Elections/Elections')
);
const Voting = React.lazy(() =>
    import('./pages/Elections/Voting')
);

const MainPage = () => {
    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    const showLoader = useLoader();

    useEffect(() => {
        showLoader(false);
    });

    useEffect(() => {
        // checkLoginAction();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div id='main-page'>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}
                />
                <Route exact path='/login'>
                    <ParticleBackground child={Login} />
                </Route>
                <PrivateRoute exact path='/dashboard'>
                    <ParticleBackground child={Dashboard} />
                </PrivateRoute>
                <PrivateRoute
                    exact
                    path='/dashboard/poll/:election_id'
                >
                    <ParticleBackground child={Elections} />
                </PrivateRoute>
                <PrivateRoute
                    exact
                    path='/dashboard/poll/:election_id/voting'
                >
                    <Voting />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

export default MainPage;
