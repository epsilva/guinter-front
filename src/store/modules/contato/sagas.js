import { takeLatest, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { insertSucces, contatoFailure } from './actions';

export function* insert({ payload }) {
    try {
        const { data } = payload;

        console.tron.log(payload);

        const contato = {
            nome: data.nome,
            telefone: data.telefone.replace(/[^0-9]+/g, ''),
            email: data.email,
            principal: data.principal,
        };

        yield put(insertSucces(contato));

        toast.success('Contato inserido com sucesso');
    } catch (err) {
        toast.error('Falha na operação, verifique seus dados.');
        yield put(contatoFailure());
    }
}

export default all([takeLatest('@contato/INSERT_REQUEST', insert)]);
