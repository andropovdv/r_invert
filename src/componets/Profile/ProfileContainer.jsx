import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
// import { setUserProfile } from '../../bll/ProfileReducer';
import { withRouter } from 'react-router-dom';
import { getProfile } from '../../bll/ProfileReducer';
import { withAuthRedirect } from '../hoc/withAuthRedirect';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />

        )
    }
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let mapsStateToProps = (state) => ({
    profile: state.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapsStateToProps, { getProfile })(WithUrlDataContainerComponent);