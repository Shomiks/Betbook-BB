import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import UserData from "./UserData";
import FavouriteTeam from "./FavouriteTeam";
import BB_Logo from "../components/other/BB_Logo";
import MainContainer from "../components/containers/MainContainer";

class Register2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            validated: false
        };
    }

    register = () => {
        window.location.hash = '/home';
        window.location.reload();
    };

    handleStep1UserDataOnComplete = () => {
        this.setState({step: 2});
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
                        <UserData onComplete={this.handleStep1UserDataOnComplete}/> :
                        <FavouriteTeam/>}
                </div>
            </MainContainer>
        )
    }
}

export default Register2;
