import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';

const MyVendor = () => {
    return (
        <div>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Добавить производителя</button>
                </div>
                <div>
                    <i>Производители:</i>
                </div>
                <div className={s.dates}>
                    <Vendor name='Asus' fullName='AsusTek Computer Inc.' />
                    <Vendor name='Acer' fullName='Acer' />
                </div>
            </div>
        </div>
    )
}

export default MyVendor;