import React from 'react';
//import s from './MboardSoket.module.css';

const VendorSelect = (props) => {
    return (
        <option value={props.vendor}>
            {props.vendor}
        </option>

    )
}
export default VendorSelect;