//import React from 'react';
import { connect } from 'react-redux';
import { addSoketActionCreator, typingMbSoketActionCreator } from '../../bll/mboardReducer';
import MBoards from './MBoards';

let mapsStateToProps = (state) => {
    return {
        mboards: state.mboardPage.mboards,
        sokets: state.mboardPage.sokets,
        typingSoket: state.mboardPage.typingSoket
    }
}
let mapsDispatchToProps = (dispatch) => {
    return {
        addSoket: () => {
            dispatch(addSoketActionCreator());
        },
        changeSoket: (vendor) => {
            dispatch(typingMbSoketActionCreator(vendor))
        }
    }
}

const MBoardsContainer = connect(mapsStateToProps, mapsDispatchToProps)(MBoards)

export default MBoardsContainer;