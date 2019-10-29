import React from 'react';
import '../../../style/app.scss'
import '../../../style/betbook/user/forgot_password.scss'
import BB_Logo from "../../../js/components/other/BB_Logo";
import MainContainer from "../../components/containers/MainContainer";
import BottomContainer from "../../components/containers/BottomContainer";
import BB_ButtonLink from "../../components/controls/BB_ButtonLink";
import BB_TextField from "../../components/controls/BB_TextField";
import BB_Button from "../../components/controls/BB_Button";
import './../../../style/betbook/user/forgot_password.scss'

class ForgotPassword extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            step: 1
        }
    }

    render() {

        return <MainContainer>
            <BB_Logo/>
            <BottomContainer>
                {this.state.step == 2 ?
                    <>
                        <BB_TextField label='Email' value={this.state.email} onChange={this.handleChangeEmail}
                                      error={this.state.validationEmail != null} type='email' helperText={this.state.validationEmail}/>
                        <div className='bb_fp_dont_worry_text'> <span className='text11-white'>Dont worry, it happens :)</span></div>
                        <BB_Button label='Send me new paasword' />
                    </>
                    :
                    <>
                        <div className='bb_fp_sent_email_text'><span className='text17-white'>We sent you an email, please check and try to sign in again.</span></div>
                        <BB_ButtonLink location='login' size='medium' type='outlined' text='Sigh In'/>
                    </>
                }
            </BottomContainer>
        </MainContainer>

    }
}


export default ForgotPassword;
