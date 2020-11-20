import React from 'react';
import { connect } from 'react-redux';
import ScrollVendor from './ScrollVendor';
import { getVendorsDataAC } from '../../../bll/vendorReducer';
import Preloader from '../../Common/Preloader/Preloader';

class ScrollVendorContainer extends React.Component {

    componentDidMount() {
        this.props.getVendorsDataAC();
    }


    render() {
        const { input } = this.props;
        // let testArray = this.props.vendors.map((v) => <li>v.id_vendors</li>)

        return (
            <div>
                {this.props.isFetching ? <Preloader /> : null}
                <select {...input}>
                    {/* <option value="Default" disabled selected>выбирите</option> */}
                    {this.props.vendors.map(v => <ScrollVendor index={v.id_vendor} vendor={v.name} />)}
                </select>

            </div>
        )
    }
}


const mapsStateToProps = (state) => ({
    vendors: state.vendorPage.vendors,
    isFetching: state.vendorPage.isFetching,
    startSelect: state.vendorPage.startSelect
})



export default connect(mapsStateToProps, { getVendorsDataAC })(ScrollVendorContainer);