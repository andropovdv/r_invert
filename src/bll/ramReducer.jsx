const TYPING_RAM_VENDOR = 'TYPING-RAM-VENDOR';
const TYPING_RAM_MODEL = 'TYPING-RAM-MODEL';
const TYPING_RAM_VOLUME = 'TYPING-RAM-VOLUME';
const ADD_RAM = 'ADD-RAM';

let initialState = {
    rams: [
        { id: 1, vendor: 'KINGSTON', model: 'VALUERAM KVR26N19S8', volume: '8 Gb' },
        { id: 2, vendor: 'CORSAIR', model: 'Vengeance LPX CMK16GX4M2A2666C16', volume: '8 Gb' },
        { id: 3, vendor: 'AMD Radeon', model: 'R7 Performance Series R748G2606U2S-UO', volume: '8 Gb' },
        { id: 4, vendor: 'CORSAIR', model: 'Vengeance LPX CMK16GX4M2B3200C16', volume: '8 Gb' },
        { id: 5, vendor: 'CRUCIAL', model: 'CT4G4DFS8266', volume: '4 Gb' },
        { id: 6, vendor: 'PATRIOT', model: 'Signature PSD48G266681', volume: '8 Gb' }
    ],
    typingVendor: 'производитель',
    typingModel: 'модель',
    typingVolume: 'объем'

}

const ramReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPING_RAM_VENDOR:
            state.typingVendor = action.newText;
            return state;
        case TYPING_RAM_MODEL:
            state.typingModel = action.newText;
            return state;
        case TYPING_RAM_VOLUME:
            state.typingVolume = action.newText;
            return state;
        case ADD_RAM:
            let newRam = {
                id: 7,
                vendor: state.typingVendor,
                model: state.typingModel,
                volume: state.typingVolume

            }
            state.rams.push(newRam);
            state.typingModel = '';
            state.typingVendor = '';
            state.typingVolume = '';
            return state;
        default:
            return state;
    }
}

export const typingRamVendorActionCreator = (textName) => {
    return { type: TYPING_RAM_VENDOR, newName: textName }
}
export const typingRamModelActionCreator = (textName) => {
    return { type: TYPING_RAM_MODEL, newName: textName }
}
export const typingRamVolumeActionCreator = (textName) => {
    return { type: TYPING_RAM_VENDOR, newName: textName }
}
export const addRamActionCreator = () => {
    return { type: ADD_RAM }
}
export default ramReducer;