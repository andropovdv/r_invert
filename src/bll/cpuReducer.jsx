const ADD_CPU = 'ADD-CPU';
const TYPING_CPU_VENDOR = 'TYPING-CPU-VENDOR';
const TYPING_CPU_MODEL = 'TYPING-CPU-MODEL'

let initialState = {
    cpusData: [
        { id: '1', vendor: 'AMD', model: 'Ryzen 5 2600' },
        { id: '2', vendor: 'INTEL', model: 'Core i5 9400F' },
        { id: '3', vendor: 'AMD', model: 'Ryzen 7 2700' },
        { id: '4', vendor: 'AMD', model: 'Ryzen 5 3600' },
        { id: '5', vendor: 'AMD', model: 'A8 9600' },
        { id: '6', vendor: 'INTEL', model: 'Core i3 9100F' }
    ],
    typingVendor: '',
    typingModel: 'model'
}
const cpuReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_CPU:
            let newCpuN = {
                id: 7,
                vendor: state.typingVendor,
                model: state.typingModel
            }
            return {
                ...state,
                typingModel: '',
                cpusData: [...state.cpusData, newCpuN]
            };
        case TYPING_CPU_VENDOR:
            let copyState = { ...state };
            if (action.newText !== 'Выберите') {
                copyState.typingVendor = action.newText;
            } else {
                copyState.typingVendor = '';
            }
            return copyState;

        case TYPING_CPU_MODEL: {
            return { ...state, typingModel: action.newText };
        }
        default:
            return state;
    }

}

export const addCpuActionCreator = () => {
    return { type: ADD_CPU }
}
export const typingCpuVendorActionCreator = (textName) => {
    return { type: TYPING_CPU_VENDOR, newText: textName }
}
export const typingCpuModelActionCreator = (textName) => {
    return { type: TYPING_CPU_MODEL, newText: textName }
}

export default cpuReducer;