import React from 'react';
import '../../../src/style/betbook/user/register.scss'

class AppHome extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {///7/35

        return (<div className='betbook-screen-login'>
                <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'></img></div>
                <div className='main-container'>
                    <div className='bs-create-account-box'><span className='text18-white'>Create Account</span></div>
                    <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span>
                    </div>
                </div>
            </div>
        )
    }
}


export default AppHome;
