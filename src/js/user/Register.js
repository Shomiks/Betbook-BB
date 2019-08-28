import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'


class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {///11/35

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'></img></div>
                    <div className='bs-user-container'>
                        <div className='bs-username-text'><span className='text15-white'>Username</span></div>
                        <input className='bs-username-box' type='text'></input>
                    </div>
                    <div className='bs-email-container'>
                        <div className='bs-email-text'><span className='text15-white'>Email</span></div>
                        <input className='bs-email-box' type='email'></input>
                    </div>
                    <div className='bs-password-container'>
                        <div className='bs-password-text'><span className='text15-white'>Password</span></div>
                        <input className='bs-password-box' type='password'></input>
                        <div className='bs-text-under-password'><span className='text11-white'>By procceding further I agree with general terms & conditions. </span>
                        </div>
                    </div>
                    <div className='bs-create-account-box'><span className='text18-white'>Create Account</span></div>
                    <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default Register;
