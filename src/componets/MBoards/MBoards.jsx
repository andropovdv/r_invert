import React from 'react';
import s from './MBoards.module.css';
import { NavLink } from 'react-router-dom';

const MBoardItem = (props) => {
    let path = "/Mboards/" + props.id;
    return (
        <div className={s.item}>
            <NavLink to={path} activeClassName={s.activeLink}>{props.vendor} {props.model}</NavLink>
        </div>
    )
}

const MBoardSoket = (props) => {
    return (
        <div className={s.item}>
            {props.soket}
        </div>
    )
}

const MBoards = (props) => {

    let mboardsData = [
        { id: 1, vendor: 'ASUS', model: 'ROG STRIX B360-F GAMING' },
        { id: 2, vendor: 'ASUS', model: 'PRIME B365M-A' },
        { id: 3, vendor: 'ASUS', model: 'PRIME B360M-K' },
        { id: 4, vendor: 'ASUS', model: 'TUF B450-PRO GAMING' },
        { id: 5, vendor: 'ASUS', model: 'TUF B450M-PRO GAMING' },
        { id: 6, vendor: 'GIGABYTE', model: 'B450M DS3H' }
    ]

    let soketData = [
        { id: 1, soket: 'LGA 1700' },
        { id: 2, soket: 'LGA 1200' },
        { id: 3, soket: 'Socket R4 (LGA 2066)' },
        { id: 4, soket: 'Socket H4 (LGA 1151)' },
    ]

    return (
        <div className={s.mboards}>
            <div className={s.mboard_items}>
                <div><h4>Материнские платы</h4></div>
                <MBoardItem vendor={mboardsData[0].vendor} model={mboardsData[0].model} id={mboardsData[0].id} />
                <MBoardItem vendor={mboardsData[1].vendor} model={mboardsData[1].model} id={mboardsData[1].id} />
                <MBoardItem vendor={mboardsData[2].vendor} model={mboardsData[2].model} id={mboardsData[2].id} />
                <MBoardItem vendor={mboardsData[3].vendor} model={mboardsData[3].model} id={mboardsData[3].id} />
                <MBoardItem vendor={mboardsData[4].vendor} model={mboardsData[4].model} id={mboardsData[4].id} />
                <MBoardItem vendor={mboardsData[5].vendor} model={mboardsData[5].model} id={mboardsData[5].id} />
            </div>
            <div className={s.mb_adds}>
                <div className={s.item}>
                    <h4>Разъемы:</h4>
                </div>
                <MBoardSoket soket={soketData[0].soket} />
                <MBoardSoket soket={soketData[1].soket} />
                <MBoardSoket soket={soketData[2].soket} />
                <MBoardSoket soket={soketData[3].soket} />
            </div>
        </div>
    )
}

export default MBoards;