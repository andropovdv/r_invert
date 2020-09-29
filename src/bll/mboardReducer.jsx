const ADD_SOKET = 'ADD-SOKET';
const TYPING_MB_SOKET = 'TYPING-MB-SOKET';

let initialState = {
    mboards: [
        { id: 1, vendor: 'ASUS', model: 'ROG STRIX B360-F GAMING' },
        { id: 2, vendor: 'ASUS', model: 'PRIME B365M-A' },
        { id: 3, vendor: 'ASUS', model: 'PRIME B360M-K' },
        { id: 4, vendor: 'ASUS', model: 'TUF B450-PRO GAMING' },
        { id: 5, vendor: 'ASUS', model: 'TUF B450M-PRO GAMING' },
        { id: 6, vendor: 'GIGABYTE', model: 'B450M DS3H' }
    ],
    sokets: [
        { id: 1, soket: 'LGA 1700' },
        { id: 2, soket: 'LGA 1200' },
        { id: 3, soket: 'Socket R4 (LGA 2066)' },
        { id: 4, soket: 'Socket H4 (LGA 1151)' }
    ],
    typingSoket: 'soket'
}
const mboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SOKET:
            let newSoket = {
                id: 5,
                soket: state.typingSoket
            }
            state.sokets.push(newSoket);
            state.typingSoket = '';
            return state;
        case TYPING_MB_SOKET:
            state.typingSoket = action.newText;
            return state;
        default:
            return state;

    }
}

export const addSoketActionCreator = () => {
    return { type: ADD_SOKET }
}
export const typingMbSoketActionCreator = (textName) => {
    return { type: TYPING_MB_SOKET, newText: textName }
}

export default mboardReducer;