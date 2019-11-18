import { combineReducers } from 'redux';

import auth from './auth/reducer';
import actions from './actions/reducer';

export default combineReducers({
    auth,
    actions,
});
