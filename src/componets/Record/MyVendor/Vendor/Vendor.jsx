import React from 'react';
import s from './Vendor.module.css';

const Vendor = () => {
    return (
        <div className={s.content}>
            <div className={s.item}>
                <img src='https://e7.pngegg.com/pngimages/650/118/png-clipart-intel-core-celeron-centrino-pentium-intel-blue-text.png' alt='test' />
                data 1
                <div>
                    <a href='#top'>Сайт</a>
                </div>
            </div>
        </div>
    )
}

export default Vendor;