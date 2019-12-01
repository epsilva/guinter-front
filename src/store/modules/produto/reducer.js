import { produce } from 'immer';

const INITIAL_STATE = {
    data: {},
    loading: false,
};

export default function auth(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@produto/INSERT_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                break;
            }
            case '@produto/INSERT_SUCCESS': {
                draft.data = action.payload.data;
                draft.loading = false;
                break;
            }
            case '@produto/UPDATE_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                break;
            }
            case '@produto/UPDATE_SUCCESS': {
                draft.data = action.payload.data;
                draft.loading = false;
                break;
            }
            case '@produto/DELETE_REQUEST': {
                draft.loading = true;
                draft.data = action.payload.data;
                break;
            }
            case '@produto/DELETE_SUCCESS': {
                draft.data = action.payload.data;
                draft.loading = false;
                break;
            }
            case '@produto/PRODUTO_FAILURE': {
                draft.loading = false;
                break;
            }
            default:
        }
    });
}
