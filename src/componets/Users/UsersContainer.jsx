import { connect } from 'react-redux';
import Users from './Users';
import { activUserAC, unactivUserAC, setUsersAC } from './../../bll/usersReducer';

let mapsStateToProps = (state) => {
    return {
        users: state.userPage.users
    }
}

let mapsDispatchToProps = (dispatch) => {
    return {
        followed: (userId) => {
            dispatch(activUserAC(userId))
        },
        unfollowed: (userId) => {
            dispatch(unactivUserAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }

    }
}

const UsersContainer = connect(mapsStateToProps, mapsDispatchToProps)(Users)

export default UsersContainer;

