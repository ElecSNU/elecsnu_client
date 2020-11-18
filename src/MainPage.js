import React, { useEffect } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useStoreActions } from 'easy-peasy';

const Login = React.lazy(() =>
    import('./pages/Login/Login')
);
const HomePage = React.lazy(() =>
    import('./pages/HomePage/index')
);

const MainPage = () => {
    const checkLoginAction = useStoreActions(
        (actions) => actions.accountModel.check_login
    );

    useEffect(() => {
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
            </Switch>
        </div>
    );
};

export default MainPage;
