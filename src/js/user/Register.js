import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";


class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: null,
            password: null,
            email: null,
            country_id: null,
            team_id: null,
            registered: false
        }
        this.sharedObj = props.sharedObj
    }

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    }

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    }

    handleRegister = () => {
        if(this.state.username!=null && this.state.password!=null) {
            this.sharedObj.apiHelper.register(this.state.username, this.state.password, (res) => {
                this.setState({registered: true});
                localStorage.setItem('user_id',res)
            })
        }
        else alert ('odjebi')
    };

    render() {

            if(this.state.registered){
                return <Redirect to='/home'/>
            }

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'/></div>
                    <div className='bs-user-container'>
                        <div className='bs-username-text'><span className='text15-white'>Username</span></div>
                        <input className='bs-username-box' type='text' value={this.state.username} onChange={this.handleChangeUsername}/>
                    </div>
                    <div className='bs-email-container'>
                        <div className='bs-email-text'><span className='text15-white'>Email</span></div>
                        <input className='bs-email-box' type='email' />
                    </div>
                    <div className='bs-password-container'>
                        <div className='bs-password-text'><span className='text15-white'>Password</span></div>
                        <input className='bs-password-box' type='password' value={this.state.password} onChange={this.handleChangePassword}/>
                        <div className='bs-text-under-password'><span className='text11-white'>By procceding further I agree with general terms & conditions. </span>
                        </div>
                    </div>
                    <div className='bs-create-account-box' onClick={this.handleRegister}><span className='text18-white'>Continue</span></div>
                    <Link to={`/login`}><div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span>
                    </div></Link>
                </div>
            </div>
        )
    }
}


export default Register;
