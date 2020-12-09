import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PrivateRoute = ({
    component: Component,
    ...rest
}) => {
    const loggedIn = window.localStorage.getItem('token');

    return loggedIn != null && loggedIn ? (
        <Route
            {...rest}
            render={(props) => <Component {...props} />}
        />
    ) : (
        <Redirect to='/login' />
    );
};

export default PrivateRoute;
