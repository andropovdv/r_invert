// import React from 'react';
import { connect } from 'react-redux';
import { addSoketActionCreator } from '../../bll/mboardReducer';
import MBoards from './MBoards';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapsStateToProps = (state) => {
    return {
        mboards: state.mboardPage.mboards,
        sokets: state.mboardPage.sokets,
    }
}
let mapsDispatchToProps = (dispatch) => {
    return {
        addSoket: (typingSoket) => {
            dispatch(addSoketActionCreator(typingSoket));
        }
    }
}



// let AuthRedirectComponent = withAuthRedirect(MBoards)

// const MBoardsContainer = connect(mapsStateToProps, mapsDispatchToProps)(AuthRedirectComponent)

export default compose(
    connect(mapsStateToProps, mapsDispatchToProps),
    withAuthRedirect
)(MBoards);