import { combineReducers } from 'redux';
import currentUser from './currentUser';
import messages from './messages';

const rootReducer = combineReducers({
    currentUser, // concerned only with data that is inside that key
    messages, // concerned only with data that is inside that key
});

export default rootReducer;