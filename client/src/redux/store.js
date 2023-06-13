import {createStore,combineReducers, applyMiddleware}  from 'redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension';
import { todosReducers } from './reducers/todosReducer';

const reducers = combineReducers({
    todos:todosReducers
})

const middleware = [thunk];

const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;