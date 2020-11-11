// import React from 'react';
import { connect } from 'react-redux';
import { addSoketActionCreator, typingMbSoketActionCreator } from '../../bll/mboardReducer';
import MBoards from './MBoards';
// import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

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



// let AuthRedirectComponent = withAuthRedirect(MBoards)

// const MBoardsContainer = connect(mapsStateToProps, mapsDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapsStateToProps, mapsDispatchToProps),
    withAuthRedirect
)(MBoards);