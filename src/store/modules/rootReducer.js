import { combineReducers } from 'redux';

import auth from './auth/reducer';
import actions from './actions/reducer';
import contato from './contato/reducer';

export default combineReducers({
    auth,
    actions,
    contato,
});
