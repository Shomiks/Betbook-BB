import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            validName: true,
            validPassword: true,
        }
    }

    render() {///12/35

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'></img></div>
                    <div className='bs-email-container'>
                        <div className='bs-email-text'><span className='text15-white'>Email</span></div>
                        <input className='bs-email-box' type='email'></input>
                    </div>
                    <div className='bs-password-container'>
                        <div className='bs-password-text'><span className='text15-white'>Password</span></div>
                        <input className='bs-password-box' type='password'></input>
                        <div className='bs-text-under-password'><span
                            className='text11-white'>I forgot my password. </span></div>
                    </div>
                    <div className='bs-create-account-box'><span className='text18-white'>Sign in</span></div>
                    <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I don't have an account.</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Login;
