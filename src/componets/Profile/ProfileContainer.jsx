import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getProfile, getStatus, updateStatus } from '../../bll/ProfileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';
import { compose } from 'redux';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 11841;
        }
        this.props.getProfile(userId);
        this.props.getStatus(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}
                status={this.props.status}
                updateStatus={this.props.updateStatus} />

        )
    }
}

let mapsStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
});

export default compose(
    connect(mapsStateToProps, { getProfile, getStatus, updateStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer);

