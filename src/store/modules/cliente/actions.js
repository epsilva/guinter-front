export function insertRequest(data) {
    return {
        type: '@cliente/INSERT_REQUEST',
        payload: { data },
    };
}

export function insertSucces(data) {
    return {
        type: '@cliente/INSERT_SUCCESS',
        payload: { data },
    };
}

export function deleteRequest(data) {
    return {
        type: '@cliente/DELETE_REQUEST',
        payload: { data },
    };
}

export function deleteSucces(data) {
    return {
        type: '@cliente/DELETE_SUCCESS',
        payload: { data },
    };
}

export function clienteFailure() {
    return { type: '@cliente/CLIENTE_FAILURE' };
}
