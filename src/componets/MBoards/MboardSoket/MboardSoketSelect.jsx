import React from 'react';
//import s from './MboardSoket.module.css';

const MBoardSoketSelect = (props) => {
    return (
        <option value={props.soket}>
            {props.soket}
        </option>

    )
}
export default MBoardSoketSelect;