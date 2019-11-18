import { produce } from 'immer';

const INITIAL_STATE = {
    isOpenModalTeacher: false,
    isOpenModalSubject: false,
};

export default function actions(state = INITIAL_STATE, action) {
    return produce(state, draft => {
        switch (action.type) {
            case '@actions/REQUEST_IS_OPEN_MODAL_TEACHER': {
                draft.isOpenModalTeacher = !state.isOpenModalTeacher;
                break;
            }
            case '@actions/SUCCESS_IS_OPEN_MODAL_TEACHER': {
                draft.isOpenModalTeacher = !state.isOpenModalTeacher;
                break;
            }
            case '@actions/REQUEST_IS_OPEN_MODAL_SUBJECT': {
                draft.isOpenModalSubject = !state.isOpenModalSubject;
                break;
            }
            case '@actions/SUCCESS_IS_OPEN_MODAL_SUBJECT': {
                draft.isOpenModalSubject = !state.isOpenModalSubject;
                break;
            }

            default:
        }
    });
}
