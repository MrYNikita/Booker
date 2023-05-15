import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Store from './stores/store';
import StyleGlobal from './Style';
import StyleAnimations from './styles/root/animations';
import StyleBorders from './styles/root/borders';
import StyleBoxShadows from './styles/root/boxShadows';
import StyleColors from './styles/root/colors';
import StyleScrollbar from './styles/root/scrollbar';
import StyleAll from './styles/selectors/all';
import StyleImg from './styles/selectors/img';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(

    <React.StrictMode>

        {/* Стили :root */}
        <StyleGlobal />
        <StyleColors />
        <StyleBorders />
        <StyleBoxShadows />
        <StyleScrollbar />
        <StyleAnimations />

        {/* Стили селекторов */}
        <StyleAll />
        <StyleImg />

        {/* Приложение */}
        <Provider store={Store}>
            <App />
        </Provider>

    </React.StrictMode>
);