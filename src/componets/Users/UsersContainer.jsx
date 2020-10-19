import React from 'react';
import { connect } from 'react-redux';
import { activUserAC, unactivUserAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC }
    from './../../bll/usersReducer';
import Users from './Users';
import Axios from 'axios';

class UsersContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);

            })
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        Axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
        })
    }

    render() {


        return <Users totalUsersCount={this.props.totalUsersCount}
            pageSize={this.props.pageSize}
            currentPage={this.props.currentPage}
            users={this.props.users}
            onPageChanged={this.onPageChanged}
            followed={this.props.followed}
            unfollowed={this.props.unfollowed}
        />

    }
}


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


export default connect(mapsStateToProps, mapsDispatchToProps)(UsersContainer);

