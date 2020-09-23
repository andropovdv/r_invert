import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';

const MyVendor = (props) => {

    let vendorElements = props.vendors.map((v) => {
        
        return (
            <Vendor name={v.name} fullName={v.fullName} />
        )
    });

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
                    {vendorElements}
                </div>
            </div>
        </div>
    )
}

export default MyVendor;