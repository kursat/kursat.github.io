import {FETCH_POSTS} from '../actionTypes';

export const getPostMetadatas = () => {
    return (dispatch) => {
        const payload = fetch('/metadata.json').then((res) => res.json());

        dispatch({
            type: FETCH_POSTS,
            payload,
        });
    };
};
