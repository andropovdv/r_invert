import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div>
                <h3>Справочники:</h3>
            </div>
            <div className={`${s.item} ${s.active}`}>
                <a href=" #top " >Производители</a>
            </div>
            <div className={s.item}>
                <a href="#top">Материнская плата</a>
            </div>
            <div className={s.item}>
                <a href="#top">Оперативная память</a>
            </div>
            <div className={s.item}>
                <a href="#top">Жесткий диск</a>
            </div>
            <div className={s.item}>
                <a href="#top">Процессор</a>
            </div>
        </nav>
    )
}

export default Navbar;