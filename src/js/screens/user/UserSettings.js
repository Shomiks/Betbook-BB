import React from 'react';
import {Link} from "react-router-dom";
import '../../../style/betbook/user/settings.scss'
import Loader from "../../components/other/Loader";
import SmartContainer from "../../components/containers/SmartContainer";

class UserSettings extends React.Component {
        constructor(props) {
        super(props);

        this.state = {
            loaded:false
        };
    }

    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        window.apiHelper.user.getUser(window.apiHelper.userInfo.id, (res) => {
            this.setState({loaded: true})
        });
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

        if(this.state.loaded) return (<SmartContainer showHeader={true} showFooter={true} footerProps={{activeItem: 'profile'}} headerProps={{title: 'Settings'}}>

                 <div className='main-container'>
                    <Link to={`/edit`}> <div className='personal-info'><span className='text11-grey'>Personal info</span>
                        <span className='edit'> Edit</span></div>
                    </Link>

                     {this.renderSettingsBox('Username', 'username')}
                     {this.renderSettingsBox('Name * (optional)', 'full_name')}
                     {this.renderSettingsBox('Favourite national selection', 'country', 'name')}
                     {this.renderSettingsBox('Favourite team', 'team', 'name')}

                     <div className='settings-box' onClick={window.apiHelper.user.logout}>
                        <div className='settings-text'><span className='text17-red'>Logout</span></div>
                        </div>
                    </div>

            </SmartContainer>
        );
        else return <Loader/>
    }
}

export default UserSettings;
