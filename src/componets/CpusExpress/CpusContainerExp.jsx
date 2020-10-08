//import React from 'react';
import { connect } from 'react-redux';
import {
    addCpuActionCreator, setCpusAC, typingCpuModelActionCreator,
    typingCpuVendorActionCreator
}
    from '../../bll/cpuReducerExp';
import CpusExp from './CpusExp';

let mapsStateToProps = (state) => {
    return {
        cpusDataExp: state.cpuPageExp.cpusDataExp,
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
        },
        setCpus: (cpuSql) => {
            dispatch(setCpusAC(cpuSql))
        }
    }
}

const CpusContainerExp = connect(mapsStateToProps, mapsDispatchToProps)(CpusExp);

export default CpusContainerExp;