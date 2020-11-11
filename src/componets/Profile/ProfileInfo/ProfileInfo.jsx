import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.info}>
            Справочник: Тест Пользователей !!!! Временно !!!
            <dir>
                <img src={props.profile.photos.large} alt='Test' width="50" />
            </dir>
            <ProfileStatus status={'Статус - как есть'}/>
        </div>
    )
}

export default ProfileInfo;