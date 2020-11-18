import React from 'react';
import { NavLink } from 'react-router-dom';
import { useStoreActions, useStoreState } from 'easy-peasy';

import './Navbar.css';

const Navbar = () => {
    const logoutAction = useStoreActions(
        (actions) => actions.accountModel.logout
    );

    const userLoggedIn = useStoreState(
        (store) => store.accountModel.user_logged_in
    );

    return (
        <div id='navbar'>
            <div className='brand'>
                <NavLink to='/'>ElecSNU</NavLink>
            </div>
            <div className='links'>
                <NavLink to='/features'>Features</NavLink>
                <NavLink to='/about-us'>About Us</NavLink>
                {userLoggedIn ? (
                    <NavLink to='/dashboard'>
                        Dashboard
                    </NavLink>
                ) : (
                    <NavLink to='/login'>Login</NavLink>
                )}
                {userLoggedIn && (
                    <NavLink
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
