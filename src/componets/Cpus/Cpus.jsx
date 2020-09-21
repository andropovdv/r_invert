import React from 'react';
import s from './Cpus.module.css';
import { NavLink } from 'react-router-dom';

const Cpus = (props) => {
    return (
        <div className={s.cpus}>
            <div className={s.cpu_items}>
                <div><h4>Процесоры</h4></div>
                <div className={s.item}>
                    <NavLink to='/cpus/1' activeClassName='s.activeLink'>AMD Ryzen 5 2600</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/cpus/2' activeClassName='s.actveLink'>INTEL Core i5 9400F</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/cpus/2' activeClassName='s.actveLink'>AMD Ryzen 7 2700</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/cpus/2' activeClassName='s.actveLink'>AMD Ryzen 5 3600</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/cpus/2' activeClassName='s.actveLink'>AMD A8 9600</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to='/cpus/2' activeClassName='s.actveLink'>INTEL Core i3 9100F</NavLink>
                </div>
            </div>
            <div className={s.cpu_add}>
                <div className={s.item}>
                    <b>Добавить</b>
                </div>
                <div className={s.item}>
                    <textarea></textarea>
                </div>
                <div className={s.item}>
                    <button>Добавить</button>
                </div>
                <div className={s.item}>
                    <input></input>
                </div>

            </div>
        </div>
    )
}

export default Cpus;