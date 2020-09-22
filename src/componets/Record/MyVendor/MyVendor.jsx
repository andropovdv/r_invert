import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';

const MyVendor = () => {

    let vendorData = [
        { id: 1, name: 'Asus', fullName: 'AsusTek Computer Inc.' },
        { id: 2, name: 'Acer', fullName: 'Acer' }
    ]

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
                    <Vendor name={vendorData[0].name} fullName={vendorData[0].fullName} />
                    <Vendor name={vendorData[1].name} fullName={vendorData[1].fullName} />
                </div>
            </div>
        </div>
    )
}

export default MyVendor;