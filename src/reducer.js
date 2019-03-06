/* Importing Core Library */
import { combineReducers } from 'redux';

/* Import Custom Reducer */
import home from './containers/home/home.reducer';

const rootReducer = combineReducers({
    home,
});

export default rootReducer;
