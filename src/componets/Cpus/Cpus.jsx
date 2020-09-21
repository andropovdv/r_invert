import React from 'react';
import s from './Cpus.module.css';

const Cpus = (props) => {
    return (
        <div className={s.cpus}>
            <div className={s.cpu_item}>
                <div><h4>Процесоры</h4></div>
                <div className={s.item + ' ' + s.active}>
                    AMD Ryzen 5 2600
                </div>
                <div className={s.item}>
                    INTEL Core i5 9400F
                </div>
                <div className={s.item}>
                    AMD Ryzen 7 2700
                </div>
                <div className={s.item}>
                    AMD Ryzen 5 3600
                </div>
                <div className={s.item}>
                    AMAMD A8 9600
                </div>
                <div className={s.item}>
                    INTEL Core i3 9100F
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