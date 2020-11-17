import Axios from 'axios';
import { vendorAPI } from '../api/dal';

const TYPING_VENDOR_NAME = 'TYPING-VENDOR-NAME';
const TYPING_VENDOR_FULLNAME = 'TYPING-VENDOR-FULLNAME';
const GET_VENDORS_API = 'GET_VENDORS_API';
const SELECT_VENDOR = 'SELECT_VENDOR';
const IS_EDIT_ON = 'IS_EDIT_ON';
const IS_EDIT_OFF = 'IS_EDIT_OFF';

const VENDOR_IS_FETCHING = 'VENDOR_IS_FETCHING';

// const PUSH_VENDOR_API = 'const PUSH_VENDOR_API';

let initialState = {
    vendors: [],
    newName: '',
    newFullName: '',
    sVendor: null,
    rowState: false,
    isEdit: true,
    isFetching: true,
    value: null
}

const vendorReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPING_VENDOR_NAME:
            return { ...state, newName: action.newText };
        case TYPING_VENDOR_FULLNAME: {
            return { ...state, newFullName: action.newText };
        }
        case GET_VENDORS_API: {
            return {
                ...state,
                vendors: [...action.item.result],
                startSelect: action.item.result[0].name
            };
        }
        case IS_EDIT_ON: {
            return { ...state, isEdit: false };
        }
        case IS_EDIT_OFF: {
            return { ...state, isEdit: true };
        }
        case SELECT_VENDOR: {
            if (action.fullName === null) {
                action.fullName = '';
            }
            return {
                ...state,
                sVendor: action.id_vendor,
                newName: action.name,
                newFullName: action.fullName
            };
        }
        case VENDOR_IS_FETCHING:
            return { ...state, isFetching: action.isFetching };
        // case PUSH_VENDOR_API: {
        //     let push_vendor = {
        //         id_vendor: action.last_id,
        //         name: state.newName,
        //         fullName: state.newFullName
        //     }
        //     return {
        //         ...state,
        //         newName: '',
        //         newFullName: '',
        //         vendors: [...state.vendors, push_vendor]
        //     };
        // }
        default:
            return state;
    }
}

export const pressOnEditVendor = () => ({
    type: IS_EDIT_ON
})
export const pressOffEditVendor = () => ({
    type: IS_EDIT_OFF
})
export const selectVendor = (id_vendor, name, fullName) => ({
    type: SELECT_VENDOR, id_vendor: id_vendor, name: name, fullName: fullName
})


export const typingVendorNameActionCreator = (textName) => {
    return {
        type: TYPING_VENDOR_NAME, newText: textName
    }
}

export const typingVendorFullNameActionCreator = (textName) => {
    return {
        type: TYPING_VENDOR_FULLNAME, newText: textName
    }
}

export const getVendorsAC = (item) => {
    debugger
    return { type: GET_VENDORS_API, item }
}

export let getVendorsDataAC = (url) => {
    return (dispatch) => {
        dispatch(toggleIsFetching(true));
        vendorAPI.getVendors().then(res => {
            dispatch(toggleIsFetching(false));
            dispatch(getVendorsAC(res.data));
        });
    }
}

// export const pushVendorsAC = (last_id) => {
//     return { type: PUSH_VENDOR_API, last_id }
// }

export const pushVendorsDataAC = (url, pushData) => {
    return (dispatch) => {
        Axios.post(url, pushData).then((res) => dispatch(getVendorsDataAC(url)));
        // Axios.post(url, pushData).then((res) => dispatch(pushVendorsAC(res.data)));
    }
}

export const toggleIsFetching = (isFetching) => ({ type: VENDOR_IS_FETCHING, isFetching })

export default vendorReducer;