import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Promise from 'redux-promise';

import rootReducer from './app/reducers/rootReducer';

const createStoreWithMiddleware = applyMiddleware(Promise)(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
