import React from 'react';

import style from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && style.selectedPage}
                        onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
                })}
            </div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto}
                            src={u.photos.small != null ? u.photos.small : userPhoto} alt='test' />
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => { props.unfollowed(u.id) }}>UnActiv</button>
                            : <button onClick={() => { props.followed(u.id) }}>Activ</button>}
                    </div>
                </span>

                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
            </div>)
            }
        </div>
    )
}

export default Users;
