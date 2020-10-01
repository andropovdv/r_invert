import { connect } from 'react-redux';
import { addRamActionCreator, typingRamModelActionCreator, typingRamVendorActionCreator } from '../../bll/ramReducer';
import { typingRamVolumeActionCreator } from '../../bll/ramReducer';
import Rams from './Rams';

let mapsStateToProps = (state) => {
    return {
        rams: state.ramPage.rams,
        typingVendor: state.ramPage.typingVendor,
        typingModel: state.ramPage.typingModel,
        typingVolume: state.ramPage.typingVolume
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        addRam: () => {
            dispatch(addRamActionCreator());
        },
        changeVendor: (text) => {
            dispatch(typingRamVendorActionCreator(text))
        },
        changeModel: (text) => {
            dispatch(typingRamModelActionCreator(text))
        },
        changeVolume: (text) => {
            dispatch(typingRamVolumeActionCreator(text))
        }
    }
}


const RamsContainer = connect(mapsStateToProps, mapsDispatchToProps)(Rams)

export default RamsContainer;