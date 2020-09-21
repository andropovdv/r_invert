//TODO переименовость в vendor
import React from 'react';
import MyVendor from './MyVendor/MyVendor';
import s from './Record.module.css';

const Record = () => {
    return (
        <div className={s.content}>
            <MyVendor/>
        </div>
    )
}

export default Record;