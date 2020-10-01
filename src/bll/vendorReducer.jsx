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
            let newVendor = {
                id: 3,
                name: state.newName,
                fullName: state.newFullName
            }
            let stateCopy = { ...state }
            stateCopy.vendors = [...state.vendors]
            stateCopy.vendors.push(newVendor);
            stateCopy.newName = '';
            stateCopy.newFullName = '';
            return stateCopy;
        }
        case TYPING_VENDOR_NAME: {
            let stateCopy = { ...state }
            stateCopy.newName = action.newText;
            return stateCopy;
        }
        case TYPING_VENDOR_FULLNAME: {
            let stateCopy = { ...state }
            stateCopy.newFullName = action.newText;
            return stateCopy;
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