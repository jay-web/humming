import {createStore, applyMiddleware, combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import reduxThunk from "redux-thunk";


const mainReducer = combineReducers({
    form: formReducer
});


const store = createStore(mainReducer, {}, applyMiddleware(reduxThunk));


export default store;