import React from 'react';
import Preloader from '../../Common/Preloader/Preloader';
import s from './ProfileInfo.module.css';
// import ProfileStatus from './ProfileStatus';
import ProfileStatusWithHooks from './ProfileStatusWithHooks';

const ProfileInfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div className={s.info}>
            Справочник: Тест Пользователей !!!! Временно !!!
            <div>
                <img src={props.profile.photos.large} alt='Test' width="50" /><br></br>
                <span><b>{props.profile.fullName}</b></span>
            </div>
            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} />
        </div>
    )
}

export default ProfileInfo;