import React from 'react';
import Footer from './Footer';
import { connect } from 'react-redux';
import { setAuthUserData } from '../../bll/authReducer';
import { authMe } from '../../api/api';

class FooterContainer extends React.Component {
    componentDidMount() {
            authMe().then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data;
                    this.props.setAuthUserData(id, email, login);
                }
        })
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

export default connect(mapStateToProps, { setAuthUserData })(FooterContainer);