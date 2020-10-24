import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './VendorInfo.module.css';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.info}>
            Справочник: Тест Пользователей !!!! Временно !!!
            <dir>
                <img src={props.profile.photos.large} alt='Test'/>
            </dir>
        </div>
    )
}

export default ProfileInfo;