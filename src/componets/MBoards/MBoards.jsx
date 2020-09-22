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
    return (
        <div className={s.mboards}>
            <div className={s.mboard_items}>
                <div><h4>Материнские платы</h4></div>
                <MBoardItem vendor='ASUS' model='ROG STRIX B360-F GAMING' id='1' />
                <MBoardItem vendor='ASUS' model='PRIME B365M-A' id='2' />
                <MBoardItem vendor='ASUS' model='PRIME B360M-K' id='3' />
                <MBoardItem vendor='ASUS' model='ASUS TUF B450-PRO GAMING' id='4' />
                <MBoardItem vendor='ASUS' model='ASUS TUF B450M-PRO GAMING' id='5' />
                <MBoardItem vendor='GIGABYTE' model='B450M DS3H' id='6' />
            </div>
            <div className={s.mb_adds}>
                <div className={s.item}>
                    <h4>Разъемы:</h4>
                </div>
                <MBoardSoket soket='LGA 1700'/>
                <MBoardSoket soket='LGA 1200'/>
                <MBoardSoket soket='Socket R4 (LGA 2066)'/>
                <MBoardSoket soket='Socket H4 (LGA 1151)'/>
            </div>
        </div>
    )
}

export default MBoards;