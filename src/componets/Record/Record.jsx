//TODO переименовость в vendor
import React from 'react';
// import MyVendor from './MyVendor/MyVendor';
import MyVendorContainer from './MyVendor/MyVendorContainer';
import s from './Record.module.css';
import VendorInfo from './VendorInfo/VendorInfo';

const Record = (props) => {
    return (
        <div className={s.content}>
            <VendorInfo />

            <MyVendorContainer store={props.store} />
        </div>
    )
}

export default Record;