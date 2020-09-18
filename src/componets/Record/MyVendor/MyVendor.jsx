import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';

const MyVendor = () => {
    return (
        <div className={s.content}>
            <div>
                <h4>Данные:</h4>
                <div>
                    <textarea></textarea>
                    <button>Добавить производителя</button>
                </div>
                <div>
                    <i>Новые данные:</i>
                </div>
                <div className={s.dates}>
                    <Vendor />
                    <Vendor />
                    <Vendor />
                    <Vendor />
                </div>
            </div>
        </div>
    )
}

export default MyVendor;