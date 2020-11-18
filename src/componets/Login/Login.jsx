import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputArea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Utils/Validarors/validators';
import { connect } from 'react-redux';
import { login } from '../../bll/authReducer';
import { Redirect } from 'react-router-dom';
import s from './../Common/FormsControls/FormsControl.module.css'

const maxLength10 = maxLengthCreator(40);


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"email"} component={InputArea}
                    validate={[required, maxLength10]} />
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={InputArea}
                    validate={[required, maxLength10]} type={"password"} />
            </div>
            <div>
                <Field component={InputArea} name={"rememberMe"} type={"checkbox"} /> remember me
            </div>
            { props.error && <div className={s.formSsummaryError}>
                {props.error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={"/Record"} />
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, { login })(Login);