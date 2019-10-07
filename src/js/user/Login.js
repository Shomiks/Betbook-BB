import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'
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
            validationUsername: true,
            validationPassword: true,
            loggedIn: false
        };
    }

    handleLogin = () => {
        let validationUsername = null;
        let validationPassword = null;
        if (this.state.username != '' && this.state.password != '') {
            window.apiHelper.login(this.state.username, this.state.password, 1, (res) => {
                if (res) {
                    localStorage.setItem('user_id', res.id);
                    this.setState({loggedIn: true});
                } else {
                   validationPassword = 'Invalid password.';
                }
            })
        }
        else {
            if (this.state.username == '') validationUsername = 'Please enter username.';
            if (this.state.password == '') validationPassword = 'Please enter password.';
            this.setState({validationUsername, validationPassword});
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
            window.location.reload();
        }

        return (<MainContainer>
                <BB_Logo/>
                <BottomContainer>
                    <BB_TextField type='username' value={this.state.username} onChange={this.handleChangeUsername}
                                  label='Username' error={this.state.validationUsername == 'Please enter username.'} helperText={this.state.validationUsername}/>
                    <BB_TextField type='password' value={this.state.password} onChange={this.handleChangePassword}
                                  label='Password' error={this.state.validationPassword == 'Please enter password.' || this.state.validationPassword == 'Invalid password.'} helperText={this.state.validationPassword}/>
                    <BB_ButtonLink location='forgot-password' size='small' type='normal' text='I forgot my password.'/>
                    <BB_Button label='Sign in' onClick={this.handleLogin}/>
                    <BB_ButtonLink location='register' size='medium' type='outlined' text='I dont have an account.'/>
                </BottomContainer>
                </MainContainer>
        )
    }
}

export default Login;