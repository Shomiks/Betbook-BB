import BB_TextField from "./controls/BB_TextField";
import BB_ButtonLink from "./controls/BB_ButtonLink";
import React from "react";
function UserData(props) {
    return (<>
            <BB_TextField label='Username' value={this.state.username} onChange={this.handleChangeUsername}
                          error={this.state.validationUsername != null} type='username'
                          helperText={this.state.validationUsername}/>

            <BB_TextField label='Email' value={this.state.email} onChange={this.handleChangeEmail}
                          error={this.state.validationEmail != null} type='email'
                          helperText={this.state.validationEmail}/>

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

export default UserData;