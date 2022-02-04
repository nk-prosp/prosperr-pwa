import { combineReducers } from 'redux';
import homeReducer from '../containers/Home/store/reducer';

const rootReducer = combineReducers({
    auth: homeReducer,
});

export default rootReducer;