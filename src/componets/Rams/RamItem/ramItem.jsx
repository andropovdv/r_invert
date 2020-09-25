import React from 'react';
import s from './ramItem.module.css'
import { NavLink } from 'react-router-dom';

const RamItem = (props) => {
    debugger;
    let path = "/Rams/" + props.id;
    return (
        // <tr className={s.item}>
        //     <NavLink to={path} activeClassName={s.activeLink}><td>{props.vendor}</td> <td>{props.model}</td> <td>{props.volume}</td></NavLink>
        // </tr>
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model} {props.volume}</NavLink>
        </div>
    )
}

export default RamItem;
 