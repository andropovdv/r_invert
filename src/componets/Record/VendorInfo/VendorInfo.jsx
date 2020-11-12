import React from 'react';
import s from './VendorInfo.module.css';

const VendorInfo = (props) => {
    return (
       <>
            <div className={s.info}>
                Справочник: Производители 
                
            </div>
            <div className={s.comment}>
            (перенеси логику активирования/деактивироания в LocalState)
            </div>
       </>
    )
}

export default VendorInfo;