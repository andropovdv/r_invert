//import React from 'react';
import { connect } from 'react-redux';
import { addCpuActionCreator, typingCpuModelActionCreator, typingCpuVendorActionCreator }
    from '../../bll/cpuReducer';
import Cpus from './Cpus';

let mapsStateToProps = (state) => {
    return {
        cpusData: state.cpuPage.cpusData,
        typingVendor: state.cpuPage.typingVendor,
        typingModel: state.cpuPage.typingModel,
        vendors: state.vendorPage.vendors
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        addCpu: () => {
            dispatch(addCpuActionCreator());
        },
        changeVendor: (text) => {
            dispatch(typingCpuVendorActionCreator(text));
        },
        changeModel: (text) => {
            dispatch(typingCpuModelActionCreator(text))
        }
    }
}

const CpusContainer = connect(mapsStateToProps, mapsDispatchToProps)(Cpus);

export default CpusContainer;