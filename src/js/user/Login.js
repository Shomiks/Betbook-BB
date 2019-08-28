import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/login.scss'

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      validName: true,
      validPassword: true,
    }
  }

  render() {

    return (<div className='betbook_screen-login'>
          <div className='login_layout'>
            <div className='login-text-field'> <span className='text17'>Member login</span> </div>
            <div className='step_input_container'>
              <div className='left-input-field'><span className='text17'> User name </span></div>
              <div className='right-input-field'><input className='step_input' type='text17'></input></div>
            </div>
            <div className='step_input_container'>
              <div className='left-input-field'><span className='text17'> Password </span></div>
              <div className='right-input-field'><input className='step_input' type='password'></input></div>
            </div>
            <button className='sign-up-button'> sign up </button>
            <button className='login-button'> login </button>
          </div>
        </div>
    )
  }
}



export default Login;
