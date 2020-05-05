import {SAMPLE_ACTION_TYPE} from '../actionTypes';

const initialState = {};

function appReducer(state = initialState, action) {
    switch (action.type) {
        case SAMPLE_ACTION_TYPE:
            return state;
        default:
            return state;
    }
}

export default appReducer;
