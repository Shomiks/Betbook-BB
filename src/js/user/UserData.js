import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import Loader from "../components/other/Loader";
import BB_ButtonLink from "../components/controls/BB_ButtonLink";
import {Link} from "react-router-dom";
import BB_TextField from "../components/controls/BB_TextField";

class UserData extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:true,
            username: '',
            password: '',
            email: '',
            validUsername: true,
            validPassword: true,
            validEmail: true,
            step1:false
        };
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
                window.apiHelper.user.validateRegister(this.state.username, this.state.email, (result) => {
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
            this.setState({step1:true});
        }
    };

    render() {

        if (this.state.loaded) {
            return (<>
                            <BB_TextField label = 'Username' value={this.state.username} onChange={this.handleChangeUsername} error={this.state.validUsername==false}/>
                            <BB_TextField label = 'Email' value={this.state.email} onChange={this.handleChangeEmail} error={this.state.validEmail==false}/>
                            <BB_TextField label = 'Password' value={this.state.password} onChange={this.handleChangePassword} error={this.state.validPassword==false}/>
                            <div className='bs-text-under-password'><span className='text11-white'>By proceeding further I agree with general terms & conditions. </span></div>

                        <div className='bs-create-account-box' onClick={this.handleRegisterStepOne}>
                            <span className='text18-white'>Continue</span></div>
                        <Link to={`/login`}>
                            <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span></div>
                        </Link>
                        </>
            )
        } else return <Loader/>
    }
}
export default UserData;
