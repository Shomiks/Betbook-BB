import React from 'react';
import '../../style/betbook/components/profileshort.scss';

class ProfileShort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.user
        };
        console.log(this.props.user)
    }

    render() {
        return (
            <div className='ps_screen'>
                <div className='ps_member-image'><img src='./assets/images/profile_pic-small.png'/></div>
                <div className='ps_member-name'>
                    <div className='ps_name'><span className='text17'>{this.props.user.username}</span></div>
                    <div className='ps_points'><span className='text12-gray'>{this.props.user.country.name}</span></div>
                </div>
            </div>
        )
    }
}

export default ProfileShort;