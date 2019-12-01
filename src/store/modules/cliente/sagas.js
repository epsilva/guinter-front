import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import {
    insertSucces,
    updateSucces,
    deleteSucces,
    clienteFailure,
} from './actions';
import api from '~/services/api';

export function* insert({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.post, 'clientes', data);

        yield put(insertSucces(response.data));

        toast.success('Cliente inserido com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(clienteFailure());
    }
}

export function* update({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.put, 'clientes', data);

        yield put(updateSucces(response.data));

        toast.success('Cliente atualizado com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(clienteFailure());
    }
}

export function* remover({ payload }) {
    try {
        const { data } = payload;

        const response = yield call(api.delete, `clientes/${data.id}`);

        yield put(deleteSucces(response.data));

        toast.success('Cliente removido com sucesso');
    } catch (err) {
        console.tron.log(err);
        toast.error('Falha na operação, verifique seus dados.');
        yield put(clienteFailure());
    }
}

export default all([
    takeLatest('@cliente/INSERT_REQUEST', insert),
    takeLatest('@cliente/UPDATE_REQUEST', update),
    takeLatest('@cliente/DELETE_REQUEST', remover),
]);
