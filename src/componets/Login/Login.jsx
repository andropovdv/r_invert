import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { InputArea } from '../Common/FormsControls/FormsControls';
import { maxLengthCreator, required } from '../../Utils/Validarors/validators';

const maxLength10 = maxLengthCreator(10);


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={"login"} name={"login"} component={InputArea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} component={InputArea} validate={[required, maxLength10]}/>
            </div>
            <div>
                <Field component={InputArea} name={"rememberMe"} type={"checkbox"} /> remember me
                </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({ form: 'login' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}


export default Login;