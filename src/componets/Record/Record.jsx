//TODO переименовость в vendor
import React from 'react';
import MyVendor from './MyVendor/MyVendor';
import s from './Record.module.css';
import VendorInfo from './VendorInfo/VendorInfo';

const Record = () => {
    return (
        <div className={s.content}>
            <VendorInfo />
            <MyVendor />
        </div>
    )
}

export default Record;