import React from 'react';
import '../../../src/style/betbook/profile-tickets.scss';
import '../../../src/style/app.scss';


class Profile_Tickets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }


    render() {


        return (
            <div className='betbook_screen'>
                <div className='pt_header-field'>
                    <div className='pt_header-central-field'>
                        <div className='pt_member-name'><span className='text18-white'>Alexander Shultz</span></div>
                        <div className='pt_country'><span className='text11-white'>Germany</span></div>
                        <div className='pt_image-field'><img src='./assets/images/profile_picture.png'></img></div>
                    </div>
                </div>
                <div className='pt_homescreen'></div>
            </div>
        );
    }
}

export default Profile_Tickets;
