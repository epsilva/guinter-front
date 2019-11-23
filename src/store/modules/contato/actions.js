export function insertRequest(data) {
    return {
        type: '@contato/INSERT_REQUEST',
        payload: { data },
    };
}

export function insertSucces(data) {
    return {
        type: '@contato/INSERT_SUCCESS',
        payload: { data },
    };
}

export function contatoFailure() {
    return { type: '@contato/CONTATO_FAILURE' };
}
