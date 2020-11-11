import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
// import { setUserProfile } from '../../bll/ProfileReducer';
import { withRouter, Redirect } from 'react-router-dom';
import { getProfile } from '../../bll/ProfileReducer';


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getProfile(userId);
    }

    render() {
        if (!this.props.isAuth) return <Redirect to={'/login'}/>
        return (
            <Profile {...this.props} profile={this.props.profile} />

        )
    }
}

let mapsStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapsStateToProps, {getProfile })(WithUrlDataContainerComponent);