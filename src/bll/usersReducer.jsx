const ACTIV_USER = 'ACTIV-USER';
const UNACTIV_USER = 'UNACTIV-USER';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
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
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case ACTIV_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, activUser: true }
                    }
                    return u;
                })
                // users: state.users.map(callbackfn: u => {
                //     if (u.id === action.userId)  {

                //     }
                //     return u;
                // })
            };
        case UNACTIV_USER:
            return {
                ...state,
                users: state.users.map((u) => {
                    if (u.id === action.userId) {
                        return { ...u, activUser: false }
                    }
                    return u;
                })
            };
        case SET_USERS:
            return { ...state, users: [...state.users, ...action.users] };
        default:
            return state;
    }
}

export const activUserAC = (userId) => ({ type: ACTIV_USER , userId})
export const unactivUserAC = (userId) => ({ type: UNACTIV_USER, userId })
export const setUsersAC = (users) => ({ type: SET_USERS, users })

export default usersReducer;