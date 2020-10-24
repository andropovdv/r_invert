import React from 'react';
import { connect } from 'react-redux';
import { activUserAC, unactivUserAC, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching }
    from './../../bll/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        })
    }

    onPageChanged = (pageNumber) => {
        this.props.toggleIsFetching(true);
        this.props.setCurrentPage(pageNumber)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items)
        })
    }

    render() {


        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                users={this.props.users}
                onPageChanged={this.onPageChanged}
                followed={this.props.followed}
                unfollowed={this.props.unfollowed}
            />
        </>

    }
}


let mapsStateToProps = (state) => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}



export default connect(mapsStateToProps, {
    followed: activUserAC,
    unfollowed: unactivUserAC,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleIsFetching

})(UsersContainer);

