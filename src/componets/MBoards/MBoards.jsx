import React from 'react';
import s from './MBoards.module.css';

const MBoards = (props) => {
    return (
        <div className={s.mboards}>
            <div className={s.mboard_items}>
                <div><h4>Материнские платы</h4></div>
                <div className={s.item + ' ' + s.active}>
                    ASUS ROG STRIX B360-F GAMING
                </div>
                <div className={s.item}>
                    ASUS PRIME H310M-R R2.0
                </div>
                <div className={s.item}>
                    ASUS PRIME B365M-A
                </div>
                <div className={s.item}>
                    ASUS PRIME B360M-K
                </div>
                <div className={s.item}>
                    ASUS TUF B450-PRO GAMING
                </div>
                <div className={s.item}>
                    ASUS TUF B450M-PRO GAMING
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