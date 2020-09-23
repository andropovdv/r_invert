import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './CpusItem.module.css'

const CpuItem = (props) => {
    let path = "/cpus/" + props.id
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model}</NavLink>
        </div>
    )
}

export default CpuItem;
