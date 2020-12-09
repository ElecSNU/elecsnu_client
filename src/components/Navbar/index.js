import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

import './Navbar.css';

const Navbar = () => {
    const logoutAction = useStoreActions(
        (actions) => actions.accountModel.logout
    );

    const loggedIn = useStoreState(
        (store) => store.accountModel.user_logged_in
    );

    let userLoggedIn = window.localStorage.getItem('token');

    useEffect(() => {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        userLoggedIn = window.localStorage.getItem('token');

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [loggedIn]);

    return (
        <div data-testid = "navbar" id='navbar'>
            <div className='brand'>
                <NavLink
                    
                    className='normal-text logdata-testid = "ElecSNU"out'
                    to='/'
                >
                    ElecSNU
                </NavLink>
            </div>
            <div className='links'>
                <NavLink
                    className='normal-text'
                    to='/features'
                >
                    Features
                </NavLink>
                <NavLink
                    className='normal-text'
                    to='/about-us'
                >
                    About Us
                </NavLink>
                {userLoggedIn ? (
                    <NavLink
                        className='normal-text'
                        to='/dashboard'
                    >
                        Dashboard
                    </NavLink>
                ) : (
                    <NavLink
                        className='normal-text'
                        to='/login'
                    >
                        Login
                    </NavLink>
                )}
                {userLoggedIn && (
                    <NavLink
                        className='normal-text logout'
                        to='/'
                        onClick={() => logoutAction()}
                    >
                        Logout
                    </NavLink>
                )}
            </div>
        </div>
    );
};

export default Navbar;
