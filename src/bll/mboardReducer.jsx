const ADD_SOKET = 'ADD-SOKET';
const TYPING_MB_SOKET = 'TYPING-MB-SOKET';

const mboardReducer = (state, action) => {
    
    if (action.type === ADD_SOKET) {
        let newSoket = {
            id: 5,
            soket: state.typingSoket
        }
        state.sokets.push(newSoket);
        state.typingSoket = '';
    } else if (action.type === TYPING_MB_SOKET) {
        state.typingSoket = action.newText;
    }
    return state;
}

export const addSoketActionCreator = () => {
    return { type: ADD_SOKET }
}
export const typingMbSoketActionCreator = (textName) => {
    return { type: TYPING_MB_SOKET, newName: textName }
}

export default mboardReducer;