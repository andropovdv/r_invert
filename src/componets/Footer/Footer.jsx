import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Footer.module.css';

const Footer = (props) => {
    return (
        <header className={s.header}>
            <h1>Footer</h1>
            <div className={s.loginBlock}>
                { props.isAuth ? props.login
                : <NavLink to={'/login'}>Login</NavLink>}
                
            </div>
        </header>
    )
}

export default Footer;