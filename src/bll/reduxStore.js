import { applyMiddleware, combineReducers, createStore } from 'redux';
import vendorReducer from './vendorReducer';
import cpuReducer from './cpuReducer';
import mboardReducer from './mboardReducer';
import hddReducer from './hddReducer';
import ramReducer from './ramReducer';
import usersReducer from './usersReducer';
import CReducer from './cpuEpxReducer';
import ProfileReducer from './ProfileReducer'
import thunk from 'redux-thunk';
import authReducer from './authReducer';


let reducers = combineReducers({
    vendorPage: vendorReducer,
    cpuPage: cpuReducer,
    mboardPage: mboardReducer,
    hddPage: hddReducer,
    ramPage: ramReducer,
    userPage: usersReducer,
    cpuPageExp: CReducer,
    profilePage: ProfileReducer,
    auth: authReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;