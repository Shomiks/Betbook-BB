import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'

class Forgot_Password extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    render() {

        return <div className='betbook-screen-login'>
            <div className='main-container'>
                <div className='betbook-logo-box'><img src='./assets/images/betbook---logo.png'></img></div>
                {this.state.step == 2 ?
                    <>
                        <div className='bs-email-container-forgot-password'>
                            <div className='bs-email-text'><span className='text15-white'>Email</span></div>
                            <input className='bs-email-box' type='email'></input>
                            <div className='bs-text-under-password'><span className='text11-white'>Don't worry, it happens :) </span>
                            </div>
                        </div>
                        <div className='bs-create-account-box'><span
                            className='text18-white'>Send me new password</span>
                        </div>
                    </>
                    :
                    <>
                        <div className='bs-email-container-forgot-password'>
                            <div className='sent-email-box'><span className='text17-white'>We sent you an email, please check and try to sign in again.</span></div>
                        </div>
                        <div className='bs-signin-box'><span
                            className='text15-white'>Sign in</span>
                        </div>
                    </>
                }
            </div>
        </div>

    }
}


export default Forgot_Password;
