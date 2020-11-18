import { authAPI } from "../api/api";

const SET_USER_DATE = 'SET_USER_DATE';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATE:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}

export const setAuthUserData = (id, email, login, isAuth) => ({ type: SET_USER_DATE, payload: { id, email, login, isAuth } })

// thunk

export const setAuthUser = () => {
    return (dispatch) => {
        authAPI.me().then(response => {
            if (response.data.resultCode === 0) {
                let { id, login, email } = response.data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
    }
}

export const login = (email, password, rememberMe) => {
    return (dispatch) => {
        authAPI.login(email, password, rememberMe).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUser());
            }
        })
    }
}

export const logout = () => {
    return (dispatch) => {
        authAPI.logout().then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setAuthUserData(null, null, null, false));
            }
        })
    }
}

export default authReducer;