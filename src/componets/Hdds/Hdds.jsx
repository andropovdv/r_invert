import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Hdds.module.css';

const HddItem = (props) => {
    let path = "/Hdds/" + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model}</NavLink>
        </div>
    )
}

const Hdds = (props) => {

    let hdds = [
        { id: '1', vendor: 'WD', model: 'Caviar Blue WD10EZEX' },
        { id: '2', vendor: 'TOSHIBA', model: 'P300 HDWD110UZSVA' },
        { id: '3', vendor: 'SEAGATE', model: 'Barracuda ST1000DM010' },
        { id: '4', vendor: 'SEAGATE', model: 'Barracuda ST2000DM008' },
        { id: '5', vendor: 'WD', model: 'Blue WD10EZRZ' },
        { id: '6', vendor: 'WD', model: 'Blue WD20EZAZ' },
    ]

    let hddsElement = hdds.map((h) => {
        return (
            <HddItem id={h.id} vendor={h.vendor} model={h.model} />
        )
    });

    return (
        <div className={s.hdds}>
            <div className={s.hdd_items}>
                <div><h4>Жесткие диски:</h4></div>
                {hddsElement}
            </div>
            <div>
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

export default Hdds;