import App from './App';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { StyleGlobal } from './style/global';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <StyleGlobal/>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </>
);
