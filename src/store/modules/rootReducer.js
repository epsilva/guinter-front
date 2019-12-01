import { combineReducers } from 'redux';

import auth from './auth/reducer';
import actions from './actions/reducer';
import contato from './contato/reducer';
import cliente from './cliente/reducer';
import produto from './produto/reducer';

export default combineReducers({
    auth,
    actions,
    contato,
    cliente,
    produto,
});
