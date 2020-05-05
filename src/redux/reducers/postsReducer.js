import {FETCH_POSTS} from '../actionTypes';

const initialState = [];

function postsReducer(state = initialState, action) {
    switch (action.type) {
        case `${FETCH_POSTS}_FULFILLED`: {
            return action.payload.sort((i1, i2) => i1.date < i2.date);
        }
        default:
            return state;
    }
}

export default postsReducer;
