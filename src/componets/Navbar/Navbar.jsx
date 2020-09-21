import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <h3>Справочники:</h3>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href="/Record">Производители</a>
            </div>
            <div className={s.item}>
                <a href="/MBoards">Материнская плата</a>
            </div>
            <div className={s.item}>
                <a href="/Rams">Оперативная память</a>
            </div>
            <div className={s.item}>
                <a href="/Hdds">Жесткий диск</a>
            </div>
            <div className={s.item}>
                <a href="/Cpus">Процессор</a>
            </div>
        </nav>
    )
}

export default Navbar;