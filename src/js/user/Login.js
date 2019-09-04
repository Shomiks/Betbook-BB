import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            validName: false,
            validPassword: false,
        }
        this.sharedObj = props.sharedObj;
    }

    handleLogin = () => {
        this.sharedObj.apiHelper.login('somi','somi',(res) => {
            if(res){
                this.setState({validName:true,validPassword:true})
            }
        })
    }

    render() {///12/35

        if(this.state.validName && this.state.validPassword){
            return <Redirect to='/home'/>
        }

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'/></div>
                    <div className='bs-email-container'>
                        <div className='bs-email-text'><span className='text15-white'>Email</span></div>
                        <input className='bs-email-box' type='email'/>
                    </div>
                    <div className='bs-password-container'>
                        <div className='bs-password-text'><span className='text15-white'>Password</span></div>
                        <input className='bs-password-box' type='password'/>
                        <Link to={`/forgot-password`}><div className='bs-text-under-password'><span
                            className='text11-white'>I forgot my password. </span></div></Link>
                    </div>
                    <Link to={this.state.validName ? `/home` : `/login`}><div className='bs-create-account-box' onClick={() => this.handleLogin()}><span className='text18-white'>Sign in</span></div></Link>
                    <Link to={`/register`}><div className='bs-i-already-have-an-account-box'><span className='text14-white'>I don't have an account.</span>
                    </div></Link>
                </div>
            </div>
        )
    }
}


export default Login;
