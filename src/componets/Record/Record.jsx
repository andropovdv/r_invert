//TODO переименовость в vendor
import React from 'react';
// import MyVendor from './MyVendor/MyVendor';
import MyVendorContainer from './MyVendor/MyVendorContainer';
import s from './Record.module.css';
import VendorInfo from './VendorInfo/VendorInfo';
import { compose } from 'redux';
import { withAuthRedirect } from '../hoc/withAuthRedirect';

const Record = (props) => {
    return (
        <div className={s.content}>
            <VendorInfo />
            <MyVendorContainer />
        </div>
    )
}

// export default Record;

export default compose(
    withAuthRedirect
)(Record);