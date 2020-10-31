//import React from 'react';
import { connect } from 'react-redux';
import {
    getVendorsDataAC, pressOffEditVendor, typingVendorFullNameActionCreator,
    typingVendorNameActionCreator
} from '../../../bll/vendorReducer';
import MyVendor from './MyVendor';
import { pushVendorsDataAC } from '../../../bll/vendorReducer';
import { selectVendor } from '../../../bll/vendorReducer';
import { pressOnEditVendor } from '../../../bll/vendorReducer';


let mapsStateToProps = (state) => {
    return {
        vendors: state.vendorPage.vendors,
        newName: state.vendorPage.newName,
        newFullName: state.vendorPage.newFullName,
        sVendor: state.vendorPage.sVendor,
        isEdit: state.vendorPage.isEdit
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
        },
        selectVendor: (id_vendor, name, fullName) => {
            dispatch(selectVendor(id_vendor, name, fullName))
        },
        pressOnEditVendor: () => {
            dispatch(pressOnEditVendor())
        },
        pressOffEditVendor: () => {
            dispatch(pressOffEditVendor())
        } 
    }
}

const MyVendorContainer = connect(mapsStateToProps, mapsDispatchToProps)(MyVendor);


export default MyVendorContainer;