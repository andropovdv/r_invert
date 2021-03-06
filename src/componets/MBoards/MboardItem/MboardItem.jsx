import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MboardItem.module.css';

const MBoardItem = (props) => {
    let path = "/Mboards/" + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model}</NavLink>
        </div>
    )
}

export default MBoardItem;