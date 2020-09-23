import React from 'react';
import s from './hddItem.module.css'
import { NavLink } from 'react-router-dom';

const HddItem = (props) => {
    let path = "/Hdds/" + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model}</NavLink>
        </div>
    )
}

export default HddItem;
 