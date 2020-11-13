const ADD_SOKET = 'ADD-SOKET';

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
    ]
}
const mboardReducer = (state = initialState, action) => {


    switch (action.type) {
        case ADD_SOKET:
            let sok = action.typingSoket
            return {
                ...state,
                sokets: [...state.sokets, { id: 5, soket: sok }]
            };
        default:
            return state;

    }
}

export const addSoketActionCreator = (typingSoket) => {
    return { type: ADD_SOKET, typingSoket }
}

export default mboardReducer;