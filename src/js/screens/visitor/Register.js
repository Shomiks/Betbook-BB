import React from 'react';
import '../../../style/betbook/user/register.scss';
import '../../../style/app.scss';
import Register_Step1 from "./Register_Step1";
import Register_Step2 from "./Register_Step2";
import BB_Logo from "../../components/other/BB_Logo";
import MainContainer from "../../components/containers/MainContainer";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            validated: false,
            email: null,
            username: null,
            password: null
        };
    }

    register = () => {
        window.location.hash = '/home';
        window.location.reload();
    };

    handleStep1OnComplete = ( username, email, password ) => {
        this.setState({step: 2, email, username, password});
    };

    handleStep2OnComplete = () => {
        this.setState({validated:true});
    };

    render() {

        if (this.state.validated) {
            {
                this.register()
            }
        } else return (<MainContainer>
                <BB_Logo/>
                <div className='register-container'>
                    {this.state.step == 1 ?
                        <Register_Step1 onComplete={this.handleStep1OnComplete}/> :
                        <Register_Step2 onComplete={this.handleStep2OnComplete} username={this.state.username} password={this.state.password} email={this.state.email}/>}
                </div>
            </MainContainer>
        )
    }
}

export default Register;
