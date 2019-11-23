export function insertRequest(data) {
    return {
        type: '@cliente/INSERT_IN_REQUEST',
        payload: { data },
    };
}

export function insertSucces(data) {
    return {
        type: '@cliente/INSERT_IN_SUCCESS',
        payload: { data },
    };
}

export function clienteFailure() {
    return { type: '@cliente/CLIENTE_FAILURE' };
}
