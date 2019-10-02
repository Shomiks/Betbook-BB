import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'
import {Link, Redirect} from "react-router-dom";
import BB_TextField from "../components/controls/BB_TextField";
import MainContainer from "../components/containers/MainContainer";
import BB_Logo from "../components/other/BB_Logo";
import BottomContainer from "../components/containers/BottomContainer";

class Login extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            validName: true,
            validPassword: true,
            loggedIn: false
        };
        this.sharedObj = props.sharedObj;
    }

    handleLogin = () => {
        if (this.state.username != '' && this.state.password != '') {
            this.sharedObj.apiHelper.login(this.state.username, this.state.password, 1, (res) => {
                localStorage.setItem('user_id', res.id);
                if (res) {
                    this.setState({loggedIn: true});
                } else {
                    alert('wrong username/password!');
                    this.setState({validName: false, validPassword: false});
                }
            })
        } else {
            alert('username and password cannot be empty!');
            this.setState({validName: false, validPassword: false});
        }
    };

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    };

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };

    render() {

        if(this.state.loggedIn){
            window.location.hash = '/home';
            window.location.reload();
        }

        return (<MainContainer>
                <BB_Logo/>
                    <BottomContainer>
                        <BB_TextField type='username' value={this.state.username} onChange={this.handleChangeUsername}
                                      label='Username' error={this.state.validPassword == false}/>
                        <BB_TextField type='username' value={this.state.password} onChange={this.handleChangePassword}
                                      label='Password' error={this.state.validPassword == false}/>
                        <Link to={`/forgot-password`}>
                            <div className='bs-text-under-password'><span className='text11-white'>I forgot my password. </span>
                            </div>
                        </Link>
                        <div className='bs-create-account-box' onClick={this.handleLogin}><span
                            className='text18-white'>Sign in</span></div>
                        <Link to={`/register`}>
                            <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I don't have an account.</span>
                            </div>
                        </Link>
                    </BottomContainer>
                </MainContainer>
        )
    }
}

export default Login;
