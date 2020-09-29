import React from 'react';
import { addVendorActionCreator, typingVendorFullNameActionCreator, 
    typingVendorNameActionCreator } from '../../../bll/vendorReducer';
import s from './MyVendor.module.css';
import Vendor from './Vendor/Vendor';



const MyVendor = (props) => {

    let vendorElements = props.vendors.map((v) => {
        return (
            <Vendor name={v.name} fullName={v.fullName} />
        )
    });

    let addVendor = () => {
        props.dispatch(addVendorActionCreator());
    }

    let onVendorNameChange = (e) => {
        let textName = e.target.value;
        props.dispatch(typingVendorNameActionCreator(textName));
    }

    let onVendorFullNameChange = (e) => {
        let textName = e.target.value;
        props.dispatch(typingVendorFullNameActionCreator(textName));
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
                    <button onClick={addVendor}>Добавить производителя</button>
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