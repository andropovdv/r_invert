import React from 'react';
import s from './Vendor.module.css';

const Vendor = (props) => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                {props.name}, {props.fullName}
            </div>
        </div>
    )
}

export default Vendor;