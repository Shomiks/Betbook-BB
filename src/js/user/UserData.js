import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import Loader from "../components/other/Loader";

class UserData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            username: '',
            password: '',
            email: '',
            validUsername: true,
            validPassword: true,
            validEmail: true,
            login:false
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {

    }

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    };

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };

    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    handleRegisterStepOne = () => {
        if (this.state.username != '' && this.state.password != '') {
            this.setState({validUsername: true, validPassword: true});
            if (!this.validateEmail(this.state.email)) {
                alert('invalid email!');
                this.setState({validEmail: false})
            } else {
                this.sharedObj.apiHelper.user.validateRegister(this.state.username, this.state.email, (result) => {
                    this.setState({validEmail:false});
                    if (result == 'empty_user') {
                        alert('empty username!');
                    } else if (result == 'empty_email') {
                        alert('empty email!');
                    } else if (result == 'empty_user_email') {
                        alert('empty username and email!');
                    } else if (result[0] == false && result[1] != false) {
                        alert('email already taken!');
                    } else if (result[0] != false && result[1] == false) {
                        this.setState({validEmail: true,validUsername:false});
                        alert('username already taken!');
                    } else if (result[0] && result[1]) {
                        this.setState({validEmail: false,validUsername:false});
                        alert('email and username already taken!');
                    } else if (!result[0] && !result[1]){
                        this.setState({favourites: true,validEmail:true});
                    }
                    else alert ('bad');
                })

            }
        } else {
            if(this.state.email == ''){
                this.setState({validEmail:false});
            }
            if(this.state.username == '' && this.state.password != ''){
                alert('Empty username!');
                this.setState({validUsername: false});
            }
            if(this.state.username != '' && this.state.password == ''){
                alert('Empty password!');
                this.setState({validPassword: false,validEmail:false});
            }
            if(this.state.username == '' && this.state.password == ''){
                alert('Empty username and password!');
                this.setState({validUsername:false, validPassword:false});
            }
        }
    };

    render() {

        if (this.state.loaded) {
            if (this.state.login) {
                window.location.reload();
            }

            else return (<div className='betbook-screen-login'>
                    <div className='main-container'>
                        <div className='betbook-logo-box'><img src='./assets/images/betbook---logo.png' alt=''/></div>

                        <div className='register-container'>

                            <div className='bs-user-container'>
                                <div className='bs-username-text'>{<span className='text15-white'>Your name</span>}</div>
                                <input
                                    className={this.state.validUsername ? 'bs-username-box' : 'bs-username-box bs-username-box-error'}
                                    type='text' value={this.state.username} onChange={this.handleChangeUsername}/>
                            </div>

                            <div className='bs-email-container'>
                                <div className='bs-email-text'>{<span className='text15-white'>Email</span>}</div>
                                {<><input
                                        className={this.state.validEmail ? 'bs-email-box' : 'bs-email-box bs-email-box-error'}
                                        value={this.state.email} onChange={this.handleChangeEmail} type='email'/></>
                                }</div>

                            <div className='bs-password-container'>
                                <div className='bs-password-text'>{<span className='text15-white'>Password</span>}</div>
                                {<><input
                                        className={this.state.validPassword ? 'bs-password-box' : 'bs-password-box bs-password-box-error'}
                                        value={this.state.password} onChange={this.handleChangePassword} type='password' /></>}
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else return <Loader/>
    }
}
export default UserData;
