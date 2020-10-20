import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './VendorInfo.module.css';

const VendorInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.info}>
            Справочник: Тест Пользователей !!!! Временно !!!
            <dir>
                <img src={props.profile.photos.large} />
            </dir>
        </div>
    )
}

export default VendorInfo;