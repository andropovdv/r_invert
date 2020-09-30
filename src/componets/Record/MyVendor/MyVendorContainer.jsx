//import React from 'react';
import { connect } from 'react-redux';
import {
    addVendorActionCreator, typingVendorFullNameActionCreator,
    typingVendorNameActionCreator
} from '../../../bll/vendorReducer';
import MyVendor from './MyVendor';


let mapsStateToProps = (state) => {
    return {
        vendors: state.vendorPage.vendors,
        newName: state.vendorPage.newName,
        newFullName: state.vendorPage.newFullName
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        changeFullName: (textName) => {
            dispatch(typingVendorFullNameActionCreator(textName));
        },
        changeName: (textName) => {
            dispatch(typingVendorNameActionCreator(textName));
        },
        addVendor: () => {
            dispatch(addVendorActionCreator());
        }
    }
}
debugger;

const MyVendorContainer = connect(mapsStateToProps, mapsDispatchToProps)(MyVendor);


export default MyVendorContainer;