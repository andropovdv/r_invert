import React from 'react';
import { connect } from 'react-redux';
import { activUserAC, unactivUserAC, setCurrentPage, getUsers, follow, unfollow }
    from './../../bll/usersReducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
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
                followingIsProgress={this.props.followingIsProgress}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
        isFetching: state.userPage.isFetching,
        followingIsProgress: state.userPage.followingIsProgress
    }
}

export default compose(
    connect(mapsStateToProps, {
        followed: activUserAC,
        unfollowed: unactivUserAC,
        setCurrentPage,
        getUsers,
        follow,
        unfollow
    }),
    withAuthRedirect
)(UsersContainer);
