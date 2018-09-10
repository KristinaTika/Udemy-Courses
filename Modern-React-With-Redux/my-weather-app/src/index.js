import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux';
import ReduxPromise from 'redux-promise';
import reducers from './app/reducers';


const createStoreWithMiddleWare = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
<Provider store={createStoreWithMiddleWare(reducers)} >
<App />
</Provider>, 
document.getElementById('root'));
registerServiceWorker();
