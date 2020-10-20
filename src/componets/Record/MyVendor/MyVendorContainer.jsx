//import React from 'react';
import { connect } from 'react-redux';
import {
    getVendorsDataAC, typingVendorFullNameActionCreator,
    typingVendorNameActionCreator
} from '../../../bll/vendorReducer';
import MyVendor from './MyVendor';
import { pushVendorsDataAC } from '../../../bll/vendorReducer';


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
        getVendors: (url) => {
            dispatch(getVendorsDataAC(url));
        },
        pushVendors: (url, pushDate) => {
            dispatch(pushVendorsDataAC(url, pushDate))
        }
    }
}

const MyVendorContainer = connect(mapsStateToProps, mapsDispatchToProps)(MyVendor);


export default MyVendorContainer;