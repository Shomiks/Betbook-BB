import React from 'react';
import '../../../src/style/betbook/user/login.scss'
import {Link} from "react-router-dom";

class Login extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:null,
      loaded:false
    }
    this.sharedObj = props.sharedObj;
  }

  componentDidMount() {
    this.sharedObj.apiHelper.login("somi","somisomisomi",this.handleLoginLoaded);
    }

  handleLoginLoaded = (data) => {
    this.setState({data, loaded: true});
  }

  render() {

    if(this.state.loaded) return <div className='betbook_screen-login'>
          <div className='login_layout'>
            <div className='login-text-field'> <span className='text17'>Member login</span></div>
            <div className='step_input_container'>
              <div className='left-input-field'><span className='text17'> User name </span></div>
              <div className='right-input-field'><input className='step_input' type='text17'/></div>
            </div>
            <div className='step_input_container'>
              <div className='left-input-field'><span className='text17'> Password </span></div>
              <div className='right-input-field'><input className='step_input' type='password'/></div>
            </div>
            <Link to={`/home`}><button className='login-button' > login</button></Link>
            <Link to={`/home`}><button className='sign-up-button' disabled={this.state.data.success}> sign up </button></Link>
          </div>
          <div className='image-field'><img src='./assets/images/betbook-logo.png'/></div>
        </div>

    else return <div> Loading ...</div>
  }
}



export default Login;
