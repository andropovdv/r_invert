//TODO переименовость в vendor
import React from 'react';
import s from './Record.module.css';
import RecordL from './RecordL';
import Axios from 'axios';
import { connect } from 'react-redux';
import { setUserProfile } from '../../bll/vendorLReducer';


class RecordLContainer extends React.Component {

    componentDidMount() {
        Axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <RecordL {...this.props} profile={this.props.profile} />

        )
    }
}

let mapsStateToProps = (state) => ({
    profile: state.vendorPage.profile
});

export default connect(mapsStateToProps, {setUserProfile})(RecordLContainer);