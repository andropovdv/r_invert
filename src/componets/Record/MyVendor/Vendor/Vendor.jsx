import React from 'react';
import s from './Vendor.module.css';

const Vendor = (props) => {
    return (
        <div>
            <div className={s.item}>
                {props.name}, {props.fullName}
            </div>
        </div>
    )
}

export default Vendor;