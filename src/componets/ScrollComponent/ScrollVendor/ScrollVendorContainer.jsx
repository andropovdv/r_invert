import React from 'react';
import { connect } from 'react-redux';
import ScrollVendor from './ScrollVendor';
import { getVendorsDataAC } from '../../../bll/vendorReducer';

class ScrollVendorContainer extends React.Component {

    componentDidMount() {
        this.props.getVendorsDataAC();
    }

    render() {
        const { input } = this.props;
        return (
            <select {...input}>
                {this.props.vendors.map(v => <ScrollVendor key={v.id} vendor={v.name} />)}
            </select>
        )
    }
}


const mapsStateToProps = (state) => ({
    vendors: state.vendorPage.vendors
})



export default connect(mapsStateToProps, { getVendorsDataAC })(ScrollVendorContainer);