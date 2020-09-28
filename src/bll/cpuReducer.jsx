const ADD_CPU = 'ADD-CPU';
const TYPING_CPU_VENDOR = 'TYPING-CPU-VENDOR';
const TYPING_CPU_MODEL = 'TYPING-CPU-MODEL'

const cpuReducer = (state, action) => {
    switch (action.type) {
        case ADD_CPU:
            let newCpu = {
                id: 7,
                vendor: state.typingVendor,
                model: state.typingModel
            }
            state.cpusData.push(newCpu);
            state.typingVendor = '';
            return state;
        case TYPING_CPU_VENDOR:
            state.typingVendor = action.newText;
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