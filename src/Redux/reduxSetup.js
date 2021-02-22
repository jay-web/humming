import {createStore, applyMiddleware, combineReducers } from "redux";
import {reducer as formReducer} from 'redux-form';
import reduxThunk from "redux-thunk";
import authReducer from "./Reducers/authReducer";
import {persistStore} from "redux-persist";

// importing local storage
import {persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";   

// for storing session in localstorage
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['auth'],
    
}

const mainReducer = combineReducers({
    form: formReducer,
    auth: authReducer
});

const finalReducer = persistReducer( persistConfig, mainReducer)


export const store = createStore(finalReducer, {}, applyMiddleware(reduxThunk));

export const persistor = persistStore(store);

