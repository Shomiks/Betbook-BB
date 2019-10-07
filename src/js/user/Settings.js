import React from 'react';
import {Link} from "react-router-dom";
import '../../../src/style/betbook/user/settings.scss'
import FullContainer from "../components/containers/FullContainer";
import Loader from "../components/other/Loader";

class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            logout:false,
            loaded:false
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        window.apiHelper.user.getUser(window.apiHelper.userInfo.id, () => {
            this.setState({loaded: true})
        });
    };

    handleLogout = () => {
        localStorage.clear();
        window.apiHelper.userInfo = null;
        this.setState({logout: true})
    };

    renderSettingsBox = (placeholder, value, property) => {
        return <div className='settings-box'>
            <div className='settings-text'>
                <div className='up-text'><span className='text11-grey'>{placeholder}</span></div>
                <div className='down-text'><span className='text17-white'>{!property ? window.apiHelper.userInfo[value] : window.apiHelper.userInfo[value][property]}</span></div>
            </div>
        </div>
    };

    render() {

        if(this.state.loaded) return (<FullContainer footerProps={{activeItem: 'profile'}} headerProps={{title: 'Settings'}}>
                <div className='betbook-context'>
                 <div className='main-container'>
                    <Link to={`/edit`}> <div className='personal-info'><span className='text11-grey'>Personal info</span>
                        <span className='edit'> Edit</span></div>
                    </Link>

                     {this.renderSettingsBox('Username', 'username')}
                     {this.renderSettingsBox('Name * (optional)', 'full_name')}
                     {this.renderSettingsBox('Favourite national selection', 'country', 'name')}
                     {this.renderSettingsBox('Favourite team', 'team', 'name')}

                    <Link to={`/login`}> <div className='settings-box' onClick={()=> this.handleLogout()}>
                        <div className='settings-text'><span className='text17-red'>Logout</span></div>
                        </div></Link>
                    </div>
                </div>
            </FullContainer>
        );
        else return <Loader/>
    }
}

export default Settings;
