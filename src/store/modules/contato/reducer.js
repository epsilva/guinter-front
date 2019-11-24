import { produce } from 'immer';

const INITIAL_STATE = {
    data: {},
    contatos: [],
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@contato/INSERT_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                break;
            }
            case '@contato/INSERT_SUCCESS': {
                draft.data = action.payload.data;
                draft.loading = false;
                break;
            }
            case '@contato/CONTATO_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
