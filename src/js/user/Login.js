import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'
import {Link} from "react-router-dom";
import {Redirect} from "react-router";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            validName: false,
            validPassword: false
        };
        this.sharedObj = props.sharedObj;
    }

    handleLogin = () => {
        if(this.state.username!='' && this.state.password!=''){
        this.sharedObj.apiHelper.login(this.state.username,this.state.password,(res) => {
            localStorage.setItem('user_id',res.id)
                if (this.state.username == res.username && this.state.password == res.password) {
                    this.setState({validName: true, validPassword: true});
                }
                else alert('si lud ti')
                })
        }
            else alert('odjebi')
    };

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    }

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    }

    render() {

        if(this.state.validName && this.state.validPassword){
            return <Redirect to='/home'/>
        }

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png' alt=''/></div>
                    <div className='bs-email-container'>
                        <div className='bs-email-text'><span className='text15-white'>Username</span></div>
                        <input className='bs-email-box' type='username' value={this.state.username} onChange={this.handleChangeUsername}/>
                    </div>
                    <div className='bs-password-container'>
                        <div className='bs-password-text'><span className='text15-white'>Password</span></div>
                        <input className='bs-password-box' type='password' value={this.state.password} onChange={this.handleChangePassword}/>
                        <Link to={`/forgot-password`}><div className='bs-text-under-password'><span
                            className='text11-white'>I forgot my password. </span></div></Link>
                    </div>
                    <div className='bs-create-account-box' onClick={() => this.handleLogin()}><span className='text18-white'>Sign in</span></div>
                    <Link to={`/register`}><div className='bs-i-already-have-an-account-box'><span className='text14-white'>I don't have an account.</span>
                    </div></Link>
                </div>
            </div>
        )
    }
}


export default Login;
