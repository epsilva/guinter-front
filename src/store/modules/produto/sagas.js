import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    insertSucces,
    updateSucces,
    deleteSucces,
    clienteFailure,
} from './actions';
import { api } from '~/services/api';

export function* insert({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.post, 'produtos', data);

        yield put(insertSucces(response.data));

        toast.success('Produto inserido com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(clienteFailure());
    }
}

export function* update({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.put, 'produtos', data);

        yield put(updateSucces(response.data));

        toast.success('Produto atualizado com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(clienteFailure());
    }
}

export function* remover({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.delete, `produtos/${data.id}`);

        yield put(deleteSucces(response.data));

        toast.success('Produto removido com sucesso');
    } catch (err) {
        console.tron.log(err);
        toast.error('Falha na operação, verifique seus dados.');
        yield put(clienteFailure());
    }
}

export default all([
    takeLatest('@produto/INSERT_REQUEST', insert),
    takeLatest('@produto/UPDATE_REQUEST', update),
    takeLatest('@produto/DELETE_REQUEST', remover),
]);
