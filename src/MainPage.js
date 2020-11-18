import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

import PrivateRoute from './components/PrivateRoute';

const Login = React.lazy(() =>
    import('./pages/Login/Login')
);
const HomePage = React.lazy(() =>
    import('./pages/HomePage/index')
);
const Dashboard = React.lazy(() =>
    import('./pages/Dashboard/index')
);

const MainPage = () => {
    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    useEffect(() => {
        console.log(process.env);
        checkLoginAction();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    });

    return (
        <div id='main-page'>
            <Switch>
                <Route
                    exact
                    path='/'
                    component={HomePage}
                />
                <Route
                    exact
                    path='/login'
                    component={Login}
                />
                <PrivateRoute
                    exact
                    path='/dashboard'
                    component={Dashboard}
                />
            </Switch>
        </div>
    );
};

export default MainPage;
