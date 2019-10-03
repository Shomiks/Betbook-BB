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
            step: 2
        };
    }

    render() {

            return (
                   <MainContainer>
                        <BB_Logo/>
                        <div className='register-container'>
                            {this.state.step == 1 ? <UserData/> : <FavouriteTeam/>}
                        </div>
                   </MainContainer>
            )
    }
}
export default Register2;
