import React from 'react';
import s from './Cpus.module.css';
import { NavLink } from 'react-router-dom';

const CpuItem = (props) => {
    let path = "/cpus/" + props.id
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model}</NavLink>
        </div>
    )
}

const Cpus = (props) => {

    let cpusData = [
        { id: '1', vendor: 'AMD', model: 'Ryzen 5 2600' },
        { id: '2', vendor: 'INTEL', model: 'Core i5 9400F' },
        { id: '3', vendor: 'AMD', model: 'Ryzen 7 2700' },
        { id: '4', vendor: 'AMD', model: 'Ryzen 5 3600' },
        { id: '5', vendor: 'AMD', model: 'A8 9600' },
        { id: '6', vendor: 'INTEL', model: 'Core i3 9100F' }
    ]

    let cpuElements = cpusData.map(c => <CpuItem vendor={c.vendor} model={c.model} id={c.id} />

    );

    return (
        <div className={s.cpus}>
            <div className={s.cpu_items}>
                <div><h4>Процесоры</h4></div>
                {cpuElements}
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
                {/* TODO доработать добавление по полям state */}
                <hr />
                <div className={s.item}>
                    <label>Производитель</label>
                    <input />
                </div>
                <div className={s.item}>
                    <label>Модель</label><br />
                    <input />
                </div>
                <div>
                    <button>Добавить</button>
                </div>

            </div>
        </div>
    )
}

export default Cpus;