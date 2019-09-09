import React from 'react';
import {Link} from "react-router-dom";
import '../../../src/style/betbook/user/settings.scss'

class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
        this.sharedObj = props.sharedObj
    }

    componentDidMount() {
        this.sharedObj.headerInstance.setTitle('Settings')
    }

    render() {///11/35

        return (<div className='betbook-screen'>
                <div className='main-container'>
                    <div className='personal-info'><span className='text11-grey'>Personal info</span></div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='up-text'><span className='text11-grey'>Username</span></div>
                            <div className='down-text'><span className='text17-white'>alex_shultz</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='edit-text'><span className='text11-grey'>Edit</span></div>
                            <div className='chevron-field'></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='up-text'><span className='text11-grey'>Name * (optional)</span></div>
                            <div className='down-text'><span className='text17-white'>Alexander Shultz</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='edit-text'><span className='text11-grey'>Edit</span></div>
                            <div className='chevron-field'></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='up-text'><span className='text11-grey'>Favorite national selection</span>
                            </div>
                            <div className='down-text'><span className='text17-white'>England</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='edit-text'><span className='text11-grey'>Edit</span></div>
                            <div className='chevron-field'></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='up-text'><span className='text11-grey'>Favorite club</span></div>
                            <div className='down-text'><span className='text17-white'>Chelsea</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='edit-text'><span className='text11-grey'>Edit</span></div>
                            <div className='chevron-field'></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='up-text'><span className='text11-grey'>Email</span></div>
                            <div className='down-text'><span className='text17-white'>alex1999@gmail.com</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='edit-text'><span className='text11-grey'>Edit</span></div>
                            <div className='chevron-field'></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='up-text'><span className='text11-grey'>Password</span></div>
                            <div className='down-text'><span className='text17-white'>*********</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='edit-text'><span className='text11-grey'>Edit</span></div>
                            <div className='chevron-field'></div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='down-text'><span className='text17-white'>Public profile</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='switch-box'>
                                <label className="switch">
                                    <input type="checkbox"></input>
                                        <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className='settings-box'>
                        <div className='left-box'>
                            <div className='down-text'><span className='text17-red'>Logout</span></div>
                        </div>
                        <div className='right-box'>
                            <div className='chevron-field-red'></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Settings;

//                    <Link to={`/login`}><button onClick={() => localStorage.removeItem('user_id')} style={{margin: 100, fontSize: 24}}>LOGOUT</button></Link>