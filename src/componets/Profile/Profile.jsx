//TODO переименовость в vendor
import React from 'react';
// import MyVendor from './MyVendor/MyVendor';
import MyVendorContainer from '../Record/MyVendor/MyVendorContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
    return (
        <div className={s.content}>
            <ProfileInfo profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus} />
            <MyVendorContainer />
        </div>
    )
}

export default Profile;