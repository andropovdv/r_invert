//import React from 'react';
import { connect } from 'react-redux';
import {
    addCpuAC, setCpusAC, typingCpuModelAC, typingCpuVendorAC
}
    from '../../bll/CReducer';
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
        addCpuExp: () => {
            dispatch(addCpuAC());
        },
        changeVendorExp: (text) => {
            dispatch(typingCpuVendorAC(text));
        },
        changeModelExp: (text) => {
            dispatch(typingCpuModelAC(text))
        },
        setCpusExp: (cpuSql) => {
            dispatch(setCpusAC(cpuSql))
        }
    }
}
debugger;

// const CpusContainerExp = connect(mapsStateToProps, mapsDispatchToProps)(CpusExpC);
const CpusContainerExp = connect(mapsStateToProps, mapsDispatchToProps)(CpusExpC)

export default CpusContainerExp;