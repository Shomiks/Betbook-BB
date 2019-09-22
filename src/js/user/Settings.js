import React from 'react';
import {Link} from "react-router-dom";
import '../../../src/style/betbook/user/settings.scss'

class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.sharedObj = props.sharedObj
    }

    componentDidMount() {
        setTimeout(() => {
            this.sharedObj.headerInstance.setTitle('Settings');
            this.sharedObj.footerInstance.setActive('profile');
        },1)
    }

    render() {

        return (<div className='betbook-screen'>
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
                            <div className='down-text'><span className='text17-white'>{window.apiHelper.userInfo['name']}</span></div>
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
                            <div className='down-text'><span className='text17-white'>{window.apiHelper.userInfo['club'].name}</span></div>
                        </div>
                    </div>
                    <Link to={`/login`}> <div className='settings-box'>
                        <div className='settings-text'>
                           <span className='text17-red' onClick={()=> localStorage.clear()}>Logout</span>
                        </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Settings;
