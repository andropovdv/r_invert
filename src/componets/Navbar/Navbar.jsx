import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <h3>Справочники:</h3>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Record" activeClassName={s.activeLink}>Производители</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/MBoards" activeClassName={s.activeLink}>Материнская плата</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Rams" activeClassName={s.activeLink}>Оперативная память</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Hdds" activeClassName={s.activeLink}>Жесткий диск</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Cpus" activeClassName={s.activeLink}>Процессор</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Cpussql" activeClassName={s.activeLink}>Процессор(sql)</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Users" activeClassName={s.activeLink}>Пользователи(API)</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Profile" activeClassName={s.activeLink}>Профайл</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;