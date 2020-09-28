const ADD_VENDOR = 'ADD-VENDOR';
const TYPING_VENDOR_NAME = 'TYPING-VENDOR-NAME';
const TYPING_VENDOR_FULLNAME = 'TYPING-VENDOR-FULLNAME';

const vendorReducer = (state, action) => {

    switch (action.type) {
        case ADD_VENDOR:
            let newVendor = {
                id: 3,
                name: state.newName,
                fullName: state.newFullName
            }
            state.vendors.push(newVendor);
            state.newName = '';
            state.newFullName = '';
            return state;
        case TYPING_VENDOR_NAME:
            state.newName = action.newText;
            return state;
        case TYPING_VENDOR_FULLNAME:
            state.newFullName = action.newText;
            return state;
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