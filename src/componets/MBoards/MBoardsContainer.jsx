import React from 'react';
import { addSoketActionCreator, typingMbSoketActionCreator } from '../../bll/mboardReducer';
import MBoards from './MBoards';

const MBoardsContainer = (props) => {

    let state = props.store.getState();
    let addSoket = () => {
        props.store.dispatch(addSoketActionCreator())
    }

    // let onSoketChange = (e) => {
    //     let textSoket = e.target.value;
    //     props.dispatch(typingMbSoketActionCreator(textSoket))
    // }

    let onSelectChange = (vendor) => {
        props.store.dispatch(typingMbSoketActionCreator(vendor))
        alert(vendor)
    }

    return (
        <MBoards addSoket={addSoket} changeSoket={onSelectChange}
            mboards={state.mboardPage.mboards}
            sokets={state.mboardPage.sokets}
            typingSoket={state.mboardPage.typingSoket} />
    )
}

export default MBoardsContainer;