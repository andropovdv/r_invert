import Axios from "axios";

const ADD_CPU_EXP = 'ADD-CPU-EXP';
const TYPING_CPU_VENDOR_EXP = 'TYPING-CPU-VENDOR-EXP';
const TYPING_CPU_MODEL_EXP = 'TYPING-CPU-MODEL-EXP';
const SET_CPUS_EXP = 'SET-CPUS-EXP';

let initialState = {
    cpusDataExp: [
        // { id: '1', vendor: 'AMD', model: 'Ryzen 5 2600' },
        // { id: '2', vendor: 'INTEL', model: 'Core i5 9400F' },
        // { id: '3', vendor: 'AMD', model: 'Ryzen 7 2700' },
        // { id: '4', vendor: 'AMD', model: 'Ryzen 5 3600' },
        // { id: '5', vendor: 'AMD', model: 'A8 9600' },
        // { id: '6', vendor: 'INTEL', model: 'Core i3 9100F' }
    ],
    typingVendorExp: '',
    typingModelExp: 'model'
}
const CReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CPU_EXP:
            //FIXME не обновляеся таблица
            let newCpuS = {
                // id: 7,
                vendor: state.typingVendorExp,
                model: state.typingModelExp
            }
            let newCpu = {
                id: 7,
                vendor: state.typingVendorExp,
                model: state.typingModelExp
            }
            debugger;
            let res = Axios.post('http://localhost:4000/cpus/', newCpuS);
            debugger
            return {
                ...state,
                typingModelExp: '',
                cpusDataExp: [...state.cpusDataExp, newCpu]

            };
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
        case SET_CPUS_EXP: {
            debugger
            return { ...state, cpusDataExp: [...action.cpusData] }
            // return { ...state, cpusDataExp: [...state.cpusDataExp, ...action.cpusData] }
        }
        default:
            return state;
    }

}

export const addCpuAC = () => {
    return { type: ADD_CPU_EXP }
}
export const typingCpuVendorAC = (textName) => {
    return { type: TYPING_CPU_VENDOR_EXP, newText: textName }
}
export const typingCpuModelAC = (textName) => {
    return { type: TYPING_CPU_MODEL_EXP, newText: textName }
}
export const setCpusAC = (cpuSql) => ({ type: SET_CPUS_EXP, cpusData: cpuSql })


export default CReducer;