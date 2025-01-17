import React, { Suspense } from 'react';
import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import Loader from './components/Loader/Loader';

const Navbar = React.lazy(() =>
    import('./components/Navbar/index')
);
const MainPage = React.lazy(() => import('./MainPage'));

function App() {
    return (
        <Suspense fallback={<div></div>}>
            <div id='app'>
                <ToastContainer />
                <Navbar />
                <MainPage />
                <Loader />
            </div>
        </Suspense>
    );
}

export default App;
