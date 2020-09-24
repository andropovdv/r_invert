//TODO переименовость в vendor
import React from 'react';
import MyVendor from './MyVendor/MyVendor';
import s from './Record.module.css';
import VendorInfo from './VendorInfo/VendorInfo';

const Record = (props) => {
    return (
        <div className={s.content}>
            <VendorInfo />

            <MyVendor vendors={props.vendorPage.vendors}
                newName={props.vendorPage.newName}
                newFullName={props.vendorPage.newFullName}
                addVendor={props.addVendor}
                changeNewVendor={props.changeNewVendor}
                changeNewFullVendors={props.changeNewFullVendors} />
        </div>
    )
}

export default Record;