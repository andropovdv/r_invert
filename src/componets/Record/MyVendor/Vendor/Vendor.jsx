import React from 'react';
// import s from './Vendor.module.css';

// const Vendor = (props) => {
//     return (
//         <div>
//             <div className={s.item}>
//                 {props.name}, {props.fullName}
//             </div>
//         </div>
//     )
// }

const Vendor = (props) => {
    return (
        <tr>
            <td>{props.name}</td>
            <td>{props.fullName}</td>
            <td><button>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default Vendor;