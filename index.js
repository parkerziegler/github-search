import { createStore, combineReducers } from 'redux';
import searchReducer from './app/reducers/searchReducer';

const store = createStore(
    combineReducers({ searchReducer })
);

export default store;
