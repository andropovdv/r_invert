import React from 'react';

import style from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'
import { NavLink } from 'react-router-dom';
import Axios from 'axios';

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
                        <NavLink to={'/Profile/' + u.id}>
                            <img className={style.userPhoto}
                                src={u.photos.small != null ? u.photos.small : userPhoto} alt='test' />
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                Axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "4ba3a673-2ea1-4e6a-a408-4afb1dedd59a"
                                    }
                                })
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.unfollowed(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })
                            }}>UnActiv</button>
                            : <button disabled={props.followingIsProgress.some(id => id === u.id)} onClick={() => {
                                props.toggleFollowingProgress(true, u.id)
                                Axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "4ba3a673-2ea1-4e6a-a408-4afb1dedd59a"
                                    }
                                })
                                    .then(responce => {
                                        if (responce.data.resultCode === 0) {
                                            props.followed(u.id)
                                        }
                                        props.toggleFollowingProgress(false, u.id)
                                    })

                            }}>Activ</button>}
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
