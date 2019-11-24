import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { insertSucces, deleteSucces, contatoFailure } from './actions';

export function* insert({ payload }) {
    try {
        const { data } = payload;

        yield put(insertSucces(data));
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(contatoFailure());
    }
}

export default all([takeLatest('@contato/INSERT_REQUEST', insert)]);
