import React from 'react';
import s from './MboardSoket.module.css';

const MBoardSoket = (props) => {
    return (
        <div className={s.item}>
            {props.soket}
        </div>
        // вывод выподающим списком
        // <option value={props.id}>
        //     {props.soket}
        // </option>
    )
}

export default MBoardSoket;