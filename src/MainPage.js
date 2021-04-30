import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import useLoader from './hooks/useLoader';
import { useStoreActions } from 'easy-peasy';

import PrivateRoute from './components/PrivateRoute';
import ParticleBackground from './components/ParticleBackground/ParticleBackground';

const Capabilities = React.lazy(() =>
    import('./pages/Capabilities/Capabilities')
);
const AboutUs = React.lazy(() =>
    import('./pages/AboutUs/AboutUs')
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
const Results = React.lazy(() =>
    import('./pages/Results/Results')
);
const GoogleAuth = React.lazy(() =>
    import('./pages/GoogleAuth/index')
);

const MainPage = () => {
    const showLoader = useLoader();

    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    useEffect(() => {
        showLoader(false);
    });

    useEffect(() => {
        checkLoginAction();
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
                <Route exact path='/google-auth'>
                    <ParticleBackground
                        child={GoogleAuth}
                    />
                </Route>
                <Route exact path='/capabilities'>
                    <ParticleBackground
                        child={Capabilities}
                    />
                </Route>
                <Route exact path='/about-us'>
                    <ParticleBackground child={AboutUs} />
                </Route>
                <Route
                    exact
                    path='/dashboard/results/:election_id'
                >
                    <ParticleBackground child={Results} />
                </Route>
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
                <PrivateRoute
                    exact
                    path='/dashboard/poll/:election_id/voting/detected'
                >
                    <Voting />
                </PrivateRoute>
                <PrivateRoute
                    exact
                    path='/dashboard/poll/:election_id/voting/recognised'
                >
                    <Voting />
                </PrivateRoute>
            </Switch>
        </div>
    );
};

export default MainPage;
