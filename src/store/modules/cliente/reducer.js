import { produce } from 'immer';

const INITIAL_STATE = {
    data: {},
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@cliente/INSERT_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                break;
            }
            case '@cliente/INSERT_SUCCESS': {
                draft.token = action.payload.token;
                draft.loading = false;
                break;
            }
            case '@cliente/CLIENTE_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
