import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';

const MyVendor = (props) => {

    let vendorElements = props.vendors.map((v) => {

        return (
            <Vendor name={v.name} fullName={v.fullName} />
        )
    });

    let newVendorName = React.createRef();
    let newVendorFullName = React.createRef();

    let addMboard = () => {
        let textName = newVendorName.current.value;
        let textFullName = newVendorFullName.current.value;
        alert(textName);
    }

    return (
        <div>
            <div>
                <div>
                    <label>Наименование: </label>
                    <input ref={newVendorName} />
                </div>
                <div>
                    <label>Полное наименование: </label>
                    <input ref={newVendorFullName} />
                </div>
                <div>
                    <button onClick={addMboard}>Добавить производителя</button>
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