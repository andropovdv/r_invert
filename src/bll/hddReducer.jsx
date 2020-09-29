const TYPING_HDD_MODEL = 'TYPING-HDD-MODEL';
const TYPING_HDD_VENDOR = 'TYPING-HDD-VENDOR';
const ADD_HDD = 'ADD-HDD';

let initialState = {
    hdds: [
        { id: '1', vendor: 'WD', model: 'Caviar Blue WD10EZEX' },
        { id: '2', vendor: 'TOSHIBA', model: 'P300 HDWD110UZSVA' },
        { id: '3', vendor: 'SEAGATE', model: 'Barracuda ST1000DM010' },
        { id: '4', vendor: 'SEAGATE', model: 'Barracuda ST2000DM008' },
        { id: '5', vendor: 'WD', model: 'Blue WD10EZRZ' },
        { id: '6', vendor: 'WD', model: 'Blue WD20EZAZ' },
    ],
    typingVendor: 'vendor',
    typingModel: 'model'
}

const hddReducer = (state = initialState, action) => {

    switch (action.type) {
        case TYPING_HDD_VENDOR:
            state.typingVendor = action.newText;
            return state;
        case TYPING_HDD_MODEL:
            state.typingModel = action.newText;
            return state;
        case ADD_HDD:
            let newHdd = {
                id: 7,
                vendor: state.typingVendor,
                model: state.typingModel
            }
            state.hdds.push(newHdd);
            state.typingVendor = '';
            state.typingModel = '';
            return state;
        default:
            return state;

    }


}

export const typingHddModelActionCreator = (textName) => {
    return { type: TYPING_HDD_MODEL, newText: textName }
}
export const typingHddVendorActionCreator = (textName) => {
    return { type: TYPING_HDD_VENDOR, newText: textName }
}
export const addHddActionCreator = () => {
    return { type: ADD_HDD }
}

export default hddReducer;