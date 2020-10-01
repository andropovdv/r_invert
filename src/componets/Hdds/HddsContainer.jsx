import { connect } from 'react-redux';
import { addHddActionCreator, typingHddModelActionCreator } from '../../bll/hddReducer';
import { typingHddVendorActionCreator } from '../../bll/hddReducer';
import Hdds from './Hdds';

let mapsStateToProps = (state) => {
    return {
        hdds: state.hddPage.hdds,
        typingVendor: state.hddPage.typingVendor,
        typingModel: state.hddPage.typingModel
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        addHdd: () => {
            dispatch(addHddActionCreator());
        },
        changeVendor: (text) => {
            dispatch(typingHddVendorActionCreator(text));
        },
        changeModel: (text) => {
            dispatch(typingHddModelActionCreator(text));
        }
    }
}


const HddsContainer = connect(mapsStateToProps, mapsDispatchToProps)(Hdds);

export default HddsContainer;