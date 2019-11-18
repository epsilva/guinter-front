import { all } from 'redux-saga/effects';

import auth from './auth/sagas';
import actions from './actions/sagas';

export default function* rootSaga() {
    return yield all([auth, actions]);
}
