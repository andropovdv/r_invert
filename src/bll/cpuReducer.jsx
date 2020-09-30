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
            let newCpu = {
                id: 7,
                vendor: state.typingVendor,
                model: state.typingModel
            }
            state.cpusData.push(newCpu);
            state.typingModel = '';
            return state;
        case TYPING_CPU_VENDOR:
            if (action.newText !== 'Выберите') {
                state.typingVendor = action.newText;
            } else {
                state.typingVendor = '';
            }
            return state;
        case TYPING_CPU_MODEL:
            state.typingModel = action.newText;
            return state;
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