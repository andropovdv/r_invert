import React from 'react';
import { addRamActionCreator, typingRamModelActionCreator, typingRamVendorActionCreator } from '../../bll/ramReducer';
import { typingRamVolumeActionCreator } from '../../bll/ramReducer';
import Rams from './Rams';

const RamsContainer = (props) => {

    let state = props.store.getState();

    let addRam = () => {
        props.store.dispatch(addRamActionCreator());
    }

    let onVendorChange = (text) => {
        props.store.dispatch(typingRamVendorActionCreator(text))
    }

    let onModelChange = (text) => {
        props.store.dispatch(typingRamModelActionCreator(text))
    }

    let onVolumeChange = (text) => {
        props.store.dispatch(typingRamVolumeActionCreator(text))
    }
    debugger;
    return (
        <Rams addRam={addRam} changeVendoe={onVendorChange} changeModel={onModelChange}
            changeVolume={onVolumeChange}
            rams={state.ramPage.rams} typingVendor={state.ramPage.typingVendor}
            typingModel={state.ramPage.typingModel}
            typingVolume={state.ramPage.typingVolume} />
    )
}

export default RamsContainer;