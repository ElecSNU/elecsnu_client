import React from 'react';
import { useStoreState } from 'easy-peasy';

import './Loader.css';

const Loader = () => {
    const loader_shown = useStoreState(
        (store) => store.loaderModel.loader_shown
    );

    return (
        <div
            className={`loading ${
                loader_shown ? 'shown' : ''
            }`}
        >
            <div className='blobs'>
                <div className='blob-center'></div>
                <div className='blob'></div>
                <div className='blob'></div>
                <div className='blob'></div>
                <div className='blob'></div>
                <div className='blob'></div>
                <div className='blob'></div>
            </div>
        </div>
    );
};

export default Loader;
