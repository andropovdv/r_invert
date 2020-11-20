// import Axios from "axios";
import Axios from 'axios';
import { ProfileAPI } from '../api/api';

const TYPING_VENDOR_NAME = 'TYPING-VENDOR-NAME';
const TYPING_VENDOR_FULLNAME = 'TYPING-VENDOR-FULLNAME';
const GET_VENDORS_API = 'GET_VENDORS_API';
const PUSH_VENDOR_API = 'const PUSH_VENDOR_API';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    vendors: [],
    newName: 'Inventor',
    newFullName: 'Inventor',
    profile: null,
    status: ''
}

const ProfileReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPING_VENDOR_NAME:
            return { ...state, newName: action.newText };
        case TYPING_VENDOR_FULLNAME: {
            return { ...state, newFullName: action.newText };
        }
        case GET_VENDORS_API: {
            return { ...state, vendors: [...action.item.result] };
        }
        case PUSH_VENDOR_API: {
            let push_vendor = {
                id_vendor: action.last_id,
                name: state.newName,
                full_name: state.newFullName
            }
            return {
                ...state,
                newName: '',
                newFullName: '',
                vendors: [...state.vendors, push_vendor]
            };
        }
        case SET_USER_PROFILE: {
            return { ...state, profile: action.profile }
        }
        case SET_STATUS: {
            return { ...state, status: action.status }
        }

        default:
            return state;
    }
}

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
    return { type: GET_VENDORS_API, item }
}

export let getVendorsDataAC = (url) => {
    return (dispatch) => {
        Axios.get(url).then((res) => dispatch(getVendorsAC(res.data)));
    }
}

export const pushVendorsAC = (last_id) => {
    return { type: PUSH_VENDOR_API, last_id }
}

export const pushVendorsDataAC = (url, pushData) => {
    return (dispatch) => {
        Axios.post(url, pushData).then((res) => dispatch(pushVendorsAC(res.data)));
    }
}

export const getProfile = (userId) => {
    debugger
    return (dispatch) => {
        ProfileAPI.getProfile(userId).then(response => {
            dispatch(setUserProfile(response.data));
        })
    }
}
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const getStatus = (userId) => {
    return (dispatch) => {
        ProfileAPI.getStatus(userId).then(response => {
            dispatch(setStatus(response.data));
        })
    }
}
export const setStatus = (status) => ({ type: SET_STATUS, status })

export const updateStatus = (status) => {
    return (dispatch) => {
        ProfileAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}

export default ProfileReducer;