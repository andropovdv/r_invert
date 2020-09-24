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
        props.addVendor();
 
    }

    let onVendorNameChange = () => {
        let textName = newVendorName.current.value;
        props.changeNewVendor(textName);
    }

    let onVendorFullNameChange = () => {
        let textName = newVendorFullName.current.value
        props.changeNewFullVendors(textName);
    }
    return (
        <div>
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
        </div>
    )
}

export default MyVendor;