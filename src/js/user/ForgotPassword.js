import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {///26/35

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'></img></div>
                    <div className='bs-email-container-forgot-password'>
                        <div className='bs-email-text'><span className='text15-white'>Email</span></div>
                        <input className='bs-email-box' type='email'></input>
                        <div className='bs-text-under-password'><span className='text11-white'>Don't worry, it happens :) </span>
                        </div>
                    </div>
                    <div className='bs-create-account-box'><span className='text18-white'>Send me new password</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default ForgotPassword;
