export function requestIsOpenModalTeachers(isOpenModalTeacher) {
    return {
        type: '@actions/REQUEST_IS_OPEN_MODAL_TEACHER',
        payload: { isOpenModalTeacher },
    };
}

export function successIsOpenModalTeachers(isOpenModalTeacher) {
    return {
        type: '@actions/SUCCSESS_IS_OPEN_MODAL_TEACHER',
        payload: { isOpenModalTeacher },
    };
}

export function requestIsOpenModalSubject(isOpenModalSubject) {
    return {
        type: '@actions/REQUEST_IS_OPEN_MODAL_SUBJECT',
        payload: { isOpenModalSubject },
    };
}

export function successIsOpenModalSubject(isOpenModalSubject) {
    return {
        type: '@actions/SUCCSESS_IS_OPEN_MODAL_SUBJECT',
        payload: { isOpenModalSubject },
    };
}
