import {combineReducers} from 'redux';

import app from './appReducer';
import posts from './postsReducer';

const rootReducer = combineReducers({
    app,
    posts,
});

export default rootReducer;
