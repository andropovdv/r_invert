import { connect } from 'react-redux';
import Users from './Users';
import { activUserAC, unactivUserAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC }
    from './../../bll/usersReducer';

let mapsStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage
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
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        }

    }
}

const UsersContainer = connect(mapsStateToProps, mapsDispatchToProps)(Users)

export default UsersContainer;

