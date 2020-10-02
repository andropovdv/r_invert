const ADD_VENDOR = 'ADD-VENDOR';
const TYPING_VENDOR_NAME = 'TYPING-VENDOR-NAME';
const TYPING_VENDOR_FULLNAME = 'TYPING-VENDOR-FULLNAME';

let initialState = {
    vendors: [
        { id: 1, name: 'Asus', fullName: 'AsusTek Computer Inc.' },
        { id: 2, name: 'Acer', fullName: 'Acer' }
    ],
    newName: 'Inventor',
    newFullName: 'Inventor'
}

const vendorReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_VENDOR: {
            let t1 = state.newName
            let t2 = state.newFullName
            return {
                ...state,
                newName: '',
                newFullName: '',
                vendors: [...state.vendors, {id: 3, name: t1, fullName: t2}]
            };
        }
        case TYPING_VENDOR_NAME:
            return { ...state, newName: action.newText };

        case TYPING_VENDOR_FULLNAME: {
            return { ...state, newFullName: action.newText };
        }
        default:
            return state;
    }
}

export const addVendorActionCreator = () => ({ type: ADD_VENDOR }) //короткая запись ниже наже написанного

// export const addVendorActionCreator = () => {
//     return {
//         type: ADD_VENDOR
//     }
// }

export const typingVendorNameActionCreator = (textName) => {
    return {
        type: TYPING_VENDOR_NAME, newText: textName
    }
}

export const typingVendorFullNameActionCreator = (textName) => {
    return {
        type: TYPING_VENDOR_FULLNAME, newText: textName
    }
}

export default vendorReducer;