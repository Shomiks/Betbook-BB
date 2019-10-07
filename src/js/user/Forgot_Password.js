import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'
import BB_Logo from "../components/other/BB_Logo";
import MainContainer from "../components/containers/MainContainer";
import BottomContainer from "../components/containers/BottomContainer";
import BB_TextField from "../components/controls/BB_TextField";
import BB_Button from "../components/controls/BB_Button";
import BB_ButtonLink from "../components/controls/BB_ButtonLink";
import './../../style/components/controls/bb_button_link.scss'

class Forgot_Password extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1,
            email: '',
            validEmail: false
        }
    }

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


    render() {

        return <MainContainer>
            <BB_Logo/>
            {this.state.step == 2 ?
                <>
                    <BottomContainer>
                        <BB_TextField label='Email' value={this.state.username} onChange={this.handleChangeEmail}
                                      type='username'/>
                        <BB_ButtonLink location='forgot-password' size='bb_bl_size_small' type='normal' text='Dont worry, it happens :)'/>
                        <BB_Button label='Send me new password'/>
                    </BottomContainer>
                </>
                :
                <>
                    <BottomContainer>
                            <div className='sent_email_box'><span className='text17-white'>We sent you an email, please check and try to sign in again.</span>
                            </div>
                        <BB_ButtonLink location='login' size='bb_bl_size_medium' type='bb_bl_outlined' text='Sign In'/>
                    </BottomContainer>
                </>
            }
        </MainContainer>


    }
}


export default Forgot_Password;
