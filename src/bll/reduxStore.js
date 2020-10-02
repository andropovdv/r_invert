import { combineReducers, createStore } from 'redux';
import vendorReducer from './vendorReducer';
import cpuReducer from './cpuReducer';
import mboardReducer from './mboardReducer';
import hddReducer from './hddReducer';
import ramReducer from './ramReducer';
import usersReducer from './usersReducer';


let reducers = combineReducers({
    vendorPage: vendorReducer,
    cpuPage: cpuReducer,
    mboardPage: mboardReducer,
    hddPage: hddReducer,
    ramPage: ramReducer,
    userPage: usersReducer
})

let store = createStore(reducers);

export default store;