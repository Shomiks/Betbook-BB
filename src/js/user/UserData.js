import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import BB_ButtonLink from "../components/controls/BB_ButtonLink";
import BB_TextField from "../components/controls/BB_TextField";

class UserData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: '',
            email: '',
            validationUsername: null,
            validationPassword: null,
            validationEmail: null,
        };
    }

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    };

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };

    handleChangeEmail = (e) => {
        this.setState({email: e.target.value}, () => {
            if (this.validateEmail(this.state.email)) {
                this.setState({validEmail: true});
            }
        });
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    handleRegisterStepOne = () => {
        let validationUsername = null;
        let validationPassword = null;
        let validationEmail = null;

        if (this.state.username.length == 0) {
            validationUsername = "Please enter username.";
        }
        else if (this.state.username.length < 4 ) {
            validationUsername = "Username must be longer then 4 characters.";
        }

        if (this.state.email.length == 0) {
            validationEmail = "Please enter email.";
        }
        else if (this.validateEmail(this.state.email) == false) {
            validationEmail = "Invalid email format.";
        }

        if (this.state.password.length == 0) {
            validationPassword = "Please enter password.";
        }

        if(validationUsername == null && validationPassword == null && validationEmail == null){
            window.apiHelper.user.validateRegister(this.state.username, this.state.email, (result) => {

                if(result.email == "exists"){
                    validationEmail = "Email already exists."
                }
                if(result.username == "exists"){
                    validationUsername = "Username already exists."
                }

                this.setState({validationEmail, validationUsername});
                if(validationEmail == null && validationUsername == null){
                    this.props.onComplete(this.state.username, this.state.email, this.state.password);
                }
            })
        }
        this.setState({validationEmail, validationPassword, validationUsername});
    };

    render() {
        return (<>
                <BB_TextField label='Username' value={this.state.username} onChange={this.handleChangeUsername}
                              error={this.state.validationUsername != null} type='username'
                              helperText={this.state.validationUsername}/>

                <BB_TextField label='Email' value={this.state.email} onChange={this.handleChangeEmail}
                              error={this.state.validationEmail != null} type='email' helperText={this.state.validationEmail}/>

                <BB_TextField label='Password' value={this.state.password} onChange={this.handleChangePassword}
                              error={this.state.validationPassword != null} type='password'
                              helperText={this.state.validationPassword}/>
                <BB_ButtonLink location='forgot-password' size='small' type='normal'
                               text='By proceeding further I agree with general terms & conditions.'/>
                <div className='bs-create-account-box' onClick={this.handleRegisterStepOne}>
                    <span className='text18-white'>Continue</span></div>
                <BB_ButtonLink location='login' size='medium' type='outlined' text='I already have an account.'/>
            </>
        )
    }
}

export default UserData;
