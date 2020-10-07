import * as Axios from 'axios';
import React from 'react';
import style from './users.module.css'
import userPhoto from '../../assets/images/user.jpg'

let Users = (props) => {

    if (props.users.length === 0) {
        Axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            debugger
            props.setUsers(response.data.items)
        })

        // props.setUsers([
        //     {
        //         id: 1, photoUrl: 'https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg',
        //         activUser: false, fullName: 'Дмитрий', status: 'in work',
        //         location: { city: 'N.Novgorod', country: 'Russia' }
        //     },
        //     {
        //         id: 2, photoUrl: 'https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg',
        //         activUser: true, fullName: 'Саша', status: 'in work',
        //         location: { city: 'Gorodez', country: 'Russia' }
        //     },
        //     {
        //         id: 3, photoUrl: 'https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg',
        //         activUser: false, fullName: 'Таня', status: 'in work',
        //         location: { city: 'Moscow', country: 'Russia' }
        //     }
        // ]
        // )
    }

    debugger
    return (
        <div>
            {props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <img className={style.userPhoto}
                            src={u.photos.small != null ? u.photos.small : userPhoto } alt='test' />
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
        </div>)
}

export default Users;