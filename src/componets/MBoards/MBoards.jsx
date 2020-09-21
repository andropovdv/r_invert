import React from 'react';
import s from './MBoards.module.css';
import { NavLink } from 'react-router-dom';

const MBoards = (props) => {
    return (
        <div className={s.mboards}>
            <div className={s.mboard_items}>
                <div><h4>Материнские платы</h4></div>
                <div className={s.item}>
                    <NavLink to='/Mboards/1' activeClassName={s.activeLink}>ASUS ROG STRIX B360-F GAMING</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Mboards/2' activeClassName={s.activeLink}>ASUS PRIME H310M-R R2.0</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Mboards/3' activeClassName={s.activeLink}>ASUS PRIME B365M-A</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Mboards/4' activeClassName={s.activeLink}>ASUS PRIME B360M-K</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Mboards/5' activeClassName={s.activeLink}>ASUS TUF B450-PRO GAMING</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/Mboards/6' activeClassName={s.activeLink}>ASUS TUF B450M-PRO GAMING</NavLink>
                </div>
            </div>
            <div className={s.mb_adds}>
                <div className={s.item}>
                    <h4>Разъемы:</h4>
                </div>
                <div className={s.item}>
                LGA 1700
                </div>
                <div className={s.item}>
                LGA 1200
                </div>
                <div className={s.item}>
                Socket R4 (LGA 2066)
                </div>
                <div className={s.item}>
                Socket H4 (LGA 1151) 
                </div>
            </div>
        </div>
    )
}

export default MBoards;