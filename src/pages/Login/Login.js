import React from 'react';

import './Login.css';

const DesignSide = React.lazy(() => import('./DesignSide'));
const AuthSide = React.lazy(() => import('./AuthSide'));

const index = () => {
    return (
        <div id='login'>
            <DesignSide />
            <AuthSide />
        </div>
    );
};

export default index;
