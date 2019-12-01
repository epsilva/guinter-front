export function insertRequest(data) {
    return {
        type: '@produto/INSERT_REQUEST',
        payload: { data },
    };
}

export function insertSucces(data) {
    return {
        type: '@produto/INSERT_SUCCESS',
        payload: { data },
    };
}

export function updateRequest(data) {
    return {
        type: '@produto/UPDATE_REQUEST',
        payload: { data },
    };
}

export function updateSucces(data) {
    return {
        type: '@produto/UPDATE_SUCCESS',
        payload: { data },
    };
}

export function deleteRequest(data) {
    return {
        type: '@produto/DELETE_REQUEST',
        payload: { data },
    };
}

export function deleteSucces(data) {
    return {
        type: '@produto/DELETE_SUCCESS',
        payload: { data },
    };
}

export function clienteFailure() {
    return { type: '@produto/PRODUTO_FAILURE' };
}
