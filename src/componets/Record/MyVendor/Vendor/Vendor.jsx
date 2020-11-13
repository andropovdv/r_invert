import React from 'react';
import s from './Vendor.module.css'


const Vendor = (props) => {
    return (
        <tr className={props.sVendor === props.id_vendor && s.selectedPage}
            onClick={() => { props.selectVendor(props.id_vendor, props.name, props.fullName) }}>
            <td>{props.name}</td>
            <td>{props.fullName}</td>
            <td><button disabled={props.sVendor === props.id_vendor ? false : true}
                className={s.greenBtn} onClick={() => { props.pressOnEditVendor() }}>Edit</button></td>
            <td><button disabled={props.sVendor === props.id_vendor ? false : true}
                className={s.redBtn}>Delete</button></td>
        </tr>
    )
}

export default Vendor;