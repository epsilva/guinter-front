import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import actions from './actions/sagas';
import contato from './contato/sagas';
import cliente from './cliente/sagas';
import produto from './produto/sagas';

export default function* rootSaga() {
    return yield all([auth, actions, contato, cliente, produto]);
}
