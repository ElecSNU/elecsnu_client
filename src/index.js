import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import { StoreProvider, createStore } from 'easy-peasy';

import models from './store/index';

const store = createStore(models);

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <StoreProvider store={store}>
                <App />
            </StoreProvider>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
