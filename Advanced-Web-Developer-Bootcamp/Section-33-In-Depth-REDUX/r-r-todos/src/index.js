import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './react-app/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore } from "redux";
import { rootReducer } from './redux/rootReducer';
import { Provider } from "react-redux"; // the Provider component is what we use from react-redux to connect our react app with our redux store

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//<Provider store={store}>  glue between our react-app and redux store
// We allow any component that we make to get access to the redux store
ReactDOM.render(
    <Provider store={store}>  
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();