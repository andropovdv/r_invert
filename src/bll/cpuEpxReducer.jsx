import Axios from "axios";

const TYPING_CPU_VENDOR_EXP = 'TYPING-CPU-VENDOR-EXP';
const TYPING_CPU_MODEL_EXP = 'TYPING-CPU-MODEL-EXP';
const SET_CPUS_EXP = 'SET-CPUS-EXP';
const GET_CPUS_FROM_API_SUCCES = 'GET_CPUS_FROM_API_SUCCES';
const PUSH_CPUS_FROM_API_SUCCES = 'PUSH_CPUS_FROM_API_SUCCES';

let initialState = {
    cpusDataExp: [],
    typingVendorExp: '',
    typingModelExp: 'model'
}

const CReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPING_CPU_VENDOR_EXP:
            let copyState = { ...state };
            if (action.newText !== 'Выберите') {
                copyState.typingVendorExp = action.newText;
            } else {
                copyState.typingVendorExp = '';
            }
            return copyState;

        case TYPING_CPU_MODEL_EXP: {
            return { ...state, typingModelExp: action.newText };
        }
        case GET_CPUS_FROM_API_SUCCES: {
            return { ...state, cpusDataExp: [...action.item.result] }
        }
        case PUSH_CPUS_FROM_API_SUCCES: {
            debugger;
            let push_cpu = {
                id_cpu: action.last_id,
                vendor: state.typingVendorExp,
                model: state.typingModelExp
            }
            return {
                ...state,
                typingModelExp: '',
                cpusDataExp: [...state.cpusDataExp, push_cpu]
            }
        }
        default:
            return state;
    }

}

// export const addCpuAC = () => {
//     return { type: ADD_CPU_EXP }
// }
export const typingCpuVendorAC = (textName) => {
    return { type: TYPING_CPU_VENDOR_EXP, newText: textName }
}
export const typingCpuModelAC = (textName) => {
    return { type: TYPING_CPU_MODEL_EXP, newText: textName }
}
export const setCpusAC = (cpuSql) => ({ type: SET_CPUS_EXP, cpusData: cpuSql })

export const getCpusAC = (item) => {
    return { type: GET_CPUS_FROM_API_SUCCES, item }
}

export const pushCpusAC = (last_id) => {
    return { type: PUSH_CPUS_FROM_API_SUCCES, last_id }
}

// export function getCpusDataAC(url) {
//     return (dispatch) => {
//         Axios.get(url).then((res) => dispatch(getCpusAC(res.data)))
//     }
// }
export let getCpusDataAC = (url) => {
    return (dispatch) => {
        Axios.get(url).then((res) => dispatch(getCpusAC(res.data)))
    }
}

export const pushCpusDataAC = (url, pushData) => {
    return (dispatch) => {
        Axios.post(url, pushData).then((res) => dispatch(getCpusDataAC(url)))
        // Axios.post(url, pushData).then((res) => dispatch(pushCpusAC(res.data)))
    }
}

export default CReducer;