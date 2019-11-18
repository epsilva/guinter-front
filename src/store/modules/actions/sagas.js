import { takeLatest, put, all } from 'redux-saga/effects';
import {
    successIsOpenModalTeachers,
    successIsOpenModalSubject,
} from './actions';

export function* openCloseModalTeachers({ payload }) {
    const { isOpenModalTeacher } = payload;

    yield put(successIsOpenModalTeachers(isOpenModalTeacher));
}

export function* openCloseModalSubject({ payload }) {
    const { isOpenModalSubject } = payload;

    yield put(successIsOpenModalSubject(isOpenModalSubject));
}

export default all([
    takeLatest(
        '@actions/REQUEST_IS_OPEN_MODAL_TEACHER',
        openCloseModalTeachers
    ),
    takeLatest('@actions/REQUEST_IS_OPEN_MODAL_SUBJECT', openCloseModalSubject),
]);
