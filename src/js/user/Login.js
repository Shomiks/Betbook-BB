import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'
import {Link, Redirect} from "react-router-dom";
import BB_TextField from "../components/controls/BB_TextField";
import MainContainer from "../components/containers/MainContainer";
import BB_Logo from "../components/other/BB_Logo";
import BottomContainer from "../components/containers/BottomContainer";
import BB_ButtonLink from "../components/controls/BB_ButtonLink";
import BB_Button from "../components/controls/BB_Button";

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

        if (this.state.loggedIn) {
            return <Redirect to='/home'/>
        }

        return (<MainContainer>
                <BB_Logo/>
                <BottomContainer>
                    <BB_TextField type='username' value={this.state.username} onChange={this.handleChangeUsername}
                                  label='Username' error={this.state.validPassword == false}/>
                    <BB_TextField type='username' value={this.state.password} onChange={this.handleChangePassword}
                                  label='Password' error={this.state.validPassword == false}/>
                    <BB_ButtonLink location='forgot-password' size='small' type='normal' text='I forgot my password.' />
                    <BB_Button label='Sign in'/>
                    <BB_ButtonLink location='register' size='medium' type='outlined' text='I dont have an account.' />

                </BottomContainer>
                </MainContainer>
        )
    }
}

export default Login;