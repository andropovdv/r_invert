import React from 'react';
import s from './MboardSoket.module.css';

const MBoardSoket = (props) => {
    return (
        <div className={s.item}>
            {props.soket}
        </div>
    )
}

export default MBoardSoket;