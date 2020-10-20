//TODO переименовость в vendor
import React from 'react';
// import MyVendor from './MyVendor/MyVendor';
import MyVendorContainer from './MyVendor/MyVendorContainer';
import s from './Record.module.css';
import VendorInfo from './VendorInfo/VendorInfo';

const RecordL = (props) => {
    return (
        <div className={s.content}>
            <VendorInfo profile={props.profile} />
            <MyVendorContainer />
        </div>
    )
}

export default RecordL;