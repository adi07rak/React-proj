import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import postRedu from '../reducer/post_reducer';
import loginRedu from '../reducer/login_reducer';
import logoutRedu from '../reducer/logout_reducer';

const packReducer = combineReducers({
    Post : postRedu,
    Login : loginRedu,
    Logout : logoutRedu
});

const store = createStore(packReducer,applyMiddleware(thunk));

export default store;