import React from 'react';
import { addHddActionCreator, typingHddModelActionCreator } from '../../bll/hddReducer';
import { typingHddVendorActionCreator } from '../../bll/hddReducer';
import Hdds from './Hdds';

const HddsContainer = (props) => {

let state = props.store.getState();

    let addHdd = () => {
        props.store.dispatch(addHddActionCreator())
    }

    let onVendorChange = (text) => {
        props.store.dispatch(typingHddVendorActionCreator(text));
    }

    let onModelChange = (text) => {
        props.store.dispatch(typingHddModelActionCreator(text));
    }
debugger;
    return (
        <Hdds addHdd={addHdd} changeVendor={onVendorChange} changeModel={onModelChange}
        hdds={state.hddPage.hdds} typingVendor={state.hddPage.typingVendor} 
        typingModel={state.hddPage.typingModel} />
    )
}

export default HddsContainer;