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

    let addVendor = () => {
        props.dispatch({ type: 'ADD-VENDOR' });

    }

    let onVendorNameChange = () => {
        let textName = newVendorName.current.value;
        props.dispatch({ type: 'TYPING-VENDOR-NAME', newText: textName });
    }

    let onVendorFullNameChange = () => {
        let textName = newVendorFullName.current.value
        const action = { type: 'TYPING-VENDOR-FULLNAME', newText: textName };
        props.dispatch(action);
    }
    return (
        <div>
            <div className={s.main}>
                <div className={s.item}>
                    <label>Наименование:</label>
                    <input onChange={onVendorNameChange} ref={newVendorName} value={props.newName} />
                </div>
                <div className={s.item}>
                    <label>Полное наименование: </label>
                    <input onChange={onVendorFullNameChange} ref={newVendorFullName} value={props.newFullName} />
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