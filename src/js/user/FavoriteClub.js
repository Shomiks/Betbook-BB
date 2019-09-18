import React from 'react';


import {Link} from "react-router-dom";


class FavoriteClub extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {

        return (<div className='betbook-screen-login'>
                <div className='main-container'>
                    <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png'/></div>
                    <div className='bs-email-container'>
                        <div className='bs-email-text'><span className='text15-white'>Select favorite national selection</span></div>
                        <input className='bs-email-box' type='email'/>
                    </div>
                    <div className='bs-password-container'>
                        <div className='bs-password-text'><span className='text15-white'>Select favorite club</span></div>
                        <input className='bs-password-box' type='text'/>
                        <div className='bs-text-under-password'><span className='text11-white'>By procceding further I agree with general terms & conditions. </span>
                        </div>
                    </div>
                    <Link to={`/home`}><div className='bs-create-account-box'><span className='text18-white'>Continue</span></div></Link>
                    <Link to={`/login`}><div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span>
                    </div></Link>
                </div>
            </div>
        )
    }
}


export default FavoriteClub;
