import React from 'react';
import style from './users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            {
                id: 1, photoUrl: 'https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg',
                activUser: false, fullName: 'Дмитрий', status: 'in work',
                location: { city: 'N.Novgorod', country: 'Russia' }
            },
            {
                id: 2, photoUrl: 'https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg',
                activUser: true, fullName: 'Саша', status: 'in work',
                location: { city: 'Gorodez', country: 'Russia' }
            },
            {
                id: 3, photoUrl: 'https://i03.fotocdn.net/s119/11a097ff366bfb24/user_l/2713047325.jpg',
                activUser: false, fullName: 'Таня', status: 'in work',
                location: { city: 'Moscow', country: 'Russia' }
            }
        ]
        )
    }


    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
                            <img className={style.userPhoto} src={u.photoUrl} />
                        </div>
                        <div>
                            {u.activUser
                                ? <button onClick={() => { props.unactivUser(u.id) }}>UnActiv</button>
                                : <button onClick={() => { props.activUser(u.id) }}>Activ</button>}
                        </div>
                    </span>

                    <span>
                        <span>
                            <div>{u.fullName}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>)
}

export default Users;