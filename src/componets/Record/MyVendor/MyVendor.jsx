import React from 'react';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';



const MyVendor = (props) => {
debugger;
    let vendorElements = props.vendors.map((v) => {
        return (
            <Vendor name={v.name} fullName={v.fullName} />
        )
    });

    let onAddVendor = () => {
        props.addVendor()
    }

    let onVendorNameChange = (e) => {
        let textName = e.target.value;
        props.changeName(textName)
    }

    let onVendorFullNameChange = (e) => {
        let textName = e.target.value;
        props.changeFullName(textName)
    }
    return (
        <div>
            <div className={s.main}>
                <div className={s.item}>
                    <label>Наименование:</label>
                    <input onChange={onVendorNameChange} value={props.newName} />
                </div>
                <div className={s.item}>
                    <label>Полное наименование: </label>
                    <input onChange={onVendorFullNameChange} value={props.newFullName} />
                </div>
                <div>
                    <button onClick={onAddVendor}>Добавить производителя</button>
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