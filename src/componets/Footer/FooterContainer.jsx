import React from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import {  logout } from '../../bll/authReducer';

class FooterContainer extends React.Component {
    componentDidMount() {
        // this.props.setAuthUser();
    }

    render() {
        return (
            <Footer {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

export default connect(mapStateToProps, { logout })(FooterContainer);