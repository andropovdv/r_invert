import React from 'react';
import s from './MBoards.module.css';
import MBoardItem from './MboardItem/MboardItem';
import MBoardSoket from './MboardSoket/MboardSoket';

const MBoards = (props) => {

    let mboards = [
        { id: 1, vendor: 'ASUS', model: 'ROG STRIX B360-F GAMING' },
        { id: 2, vendor: 'ASUS', model: 'PRIME B365M-A' },
        { id: 3, vendor: 'ASUS', model: 'PRIME B360M-K' },
        { id: 4, vendor: 'ASUS', model: 'TUF B450-PRO GAMING' },
        { id: 5, vendor: 'ASUS', model: 'TUF B450M-PRO GAMING' },
        { id: 6, vendor: 'GIGABYTE', model: 'B450M DS3H' }
    ]

    let sokets = [
        { id: 1, soket: 'LGA 1700' },
        { id: 2, soket: 'LGA 1200' },
        { id: 3, soket: 'Socket R4 (LGA 2066)' },
        { id: 4, soket: 'Socket H4 (LGA 1151)' }
    ]

    // Если параметр один, скобки можно не ставить
    // Если функция только возвращает значение, return и фигурные скобки можно не ставить
    // let mboardsElements = mboardsData
    //     .map((mboard) => <MBoardItem vendor={mboard.vendor} model={mboard.model} id={mboard.id} />);
    let mboardsElements = mboards.map((m) => {
        return (
            <MBoardItem vendor={m.vendor} model={m.model} id={m.id} />
        )
    });

    let soketElements = sokets.map((s) => {
        return (
            <MBoardSoket soket={s.soket} />
        )
    })

    return (
        <div className={s.mboards}>
            <div className={s.mboard_items}>
                <div><h4>Материнские платы</h4></div>
                {mboardsElements}
            </div>
            <div className={s.mb_adds}>
                <div className={s.item}>
                    <h4>Разъемы:</h4>
                </div>
                {soketElements}
            </div>
        </div>
    )
}

export default MBoards;