import { combineReducers, createStore } from 'redux';
import vendorReducer from './vendorReducer';
import cpuReducer from './cpuReducer';
import mboardReducer from './mboardReducer';
import hddReducer from './hddReducer';
import ramReducer from './ramReducer';
import usersReducer from './usersReducer';
import cpuReducerExp from './cpuReducerExp';


let reducers = combineReducers({
    vendorPage: vendorReducer,
    cpuPage: cpuReducer,
    mboardPage: mboardReducer,
    hddPage: hddReducer,
    ramPage: ramReducer,
    userPage: usersReducer,
    cpuPageExp: cpuReducerExp
})

let store = createStore(reducers);

export default store;