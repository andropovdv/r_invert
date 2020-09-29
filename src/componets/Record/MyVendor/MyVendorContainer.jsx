import React from 'react';
import {
    addVendorActionCreator, typingVendorFullNameActionCreator,
    typingVendorNameActionCreator
} from '../../../bll/vendorReducer';
import MyVendor from './MyVendor';



const MyVendorContainer = (props) => {

    let state = props.store.getState()

    let addVendor = () => {
        props.store.dispatch(addVendorActionCreator());
    }

    let onVendorNameChange = (textName) => {
        props.store.dispatch(typingVendorNameActionCreator(textName));
    }

    let onVendorFullNameChange = (textName) => {
        props.store.dispatch(typingVendorFullNameActionCreator(textName));
    }
    return (
        <MyVendor changeFullName={onVendorFullNameChange}
            changeName={onVendorNameChange}
            addVendor={addVendor} 
            vendors = {state.vendorPage.vendors}
            newName = {state.vendorPage.newName}
            newFullName = {state.vendorPage.newFullName}/>
    )
}



export default MyVendorContainer;