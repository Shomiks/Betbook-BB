import React from 'react';
import {Link} from "react-router-dom";
import '../../../src/style/betbook/user/settings.scss'
import FullContainer from "../components/containers/FullContainer";

class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logout:false
        };
    }

    handleLogout = () => {
        localStorage.clear();
        window.apiHelper.userInfo = null;
        this.setState({logout: true})
    };

    render() {

        return (<FullContainer footerProps={{activeItem: 'profile'}} headerProps={{title: 'Settings'}}>
                <div className='betbook-context'>
                <div className='main-container'>
                    <Link to={`/edit`}> <div className='personal-info'><span className='text11-grey'>Personal info</span>
                        <span className='edit'> Edit</span></div>
                    </Link>

                    <div className='settings-box'>
                        <div className='settings-text'>
                            <div className='up-text'><span className='text11-grey'>Username</span></div>
                            <div className='down-text'><span className='text17-white'>{window.apiHelper.userInfo['username']}</span></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='settings-text'>
                            <div className='up-text'><span className='text11-grey'>Name * (optional)</span></div>
                            <div className='down-text'><span className='text17-white'>{window.apiHelper.userInfo['full_name']}</span></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='settings-text'>
                            <div className='up-text'><span className='text11-grey'>Favorite national selection</span>
                            </div>
                            <div className='down-text'><span className='text17-white'>{window.apiHelper.userInfo['country'].name}</span></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='settings-text'>
                            <div className='up-text'><span className='text11-grey'>Favorite club</span></div>
                            <div className='down-text'><span className='text17-white'>{window.apiHelper.userInfo['team'].name}</span></div>
                        </div>
                    </div>
                    <Link to={`/login`}> <div className='settings-box' onClick={()=> this.handleLogout()}>
                        <div className='settings-text'>
                           <span className='text17-red'>Logout</span>
                        </div>
                        </div>
                    </Link>
                </div>
                </div>
            </FullContainer>
        )
    }
}

export default Settings;
