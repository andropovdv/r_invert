//import React from 'react';
import { connect } from 'react-redux';
import {
    getCpusDataAC, pushCpusDataAC, setCpusAC, typingCpuModelAC, typingCpuVendorAC
}
    from '../../bll/cpuEpxReducer';
import CpusExpC from './CpusExpC';

let mapsStateToProps = (state) => {
    return {
        cpusDataExp: state.cpuPageExp.cpusDataExp,
        typingVendorExp: state.cpuPageExp.typingVendorExp,
        typingModelExp: state.cpuPageExp.typingModelExp,
        vendors: state.vendorPage.vendors
    }
}
let mapsDispatchToProps = (dispatch) => {
    return {
        changeVendorExp: (text) => {
            dispatch(typingCpuVendorAC(text));
        },
        changeModelExp: (text) => {
            dispatch(typingCpuModelAC(text))
        },
        setCpusExp: (cpuSql) => {
            dispatch(setCpusAC(cpuSql))
        },
        getCpus: (url) => {
            dispatch(getCpusDataAC(url))
        },
        pushCpus: (url, pushData) => {
            dispatch(pushCpusDataAC(url, pushData))
        }
    }
}

// const CpusContainerExp = connect(mapsStateToProps, mapsDispatchToProps)(CpusExpC);
const CpusContainerExp = connect(mapsStateToProps, mapsDispatchToProps)(CpusExpC)

export default CpusContainerExp;