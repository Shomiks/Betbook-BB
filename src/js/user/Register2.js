import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import UserData from "./UserData";
import FavouriteTeam from "./FavouriteTeam";
import BB_Logo from "../components/other/BB_Logo";
import MainContainer from "../components/containers/MainContainer";
import BottomContainer from "../components/containers/BottomContainer";
import BB_Button from "../components/controls/BB_Button";

class Register2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        };
    }

    render() {

            return (
                   <MainContainer>
                        <BB_Logo/>
                       <BottomContainer>
                            {this.state.step == 1 ? <UserData/> : <FavouriteTeam/>}
                       </BottomContainer>
                   </MainContainer>
            )
    }
}
export default Register2;
