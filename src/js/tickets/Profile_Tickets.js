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
                    <div className='pt_header-left-arrow-field'><img src='./assets/images/flag.png'></img></div>
                    <div className='pt_header-central-field'>
                        <div className='pt_image-field'><img src='./assets/images/profile_picture.png'></img></div>
                        <div className='pt_member-name'><span className='text20'>Me, Myself, & I</span></div>
                        <div className='pt_member-since'><span className='text12'>Member since Nobember 2018.</span></div>
                        <div className='pt_tickets'><span className='text14-tickets'>tickets</span></div>
                    </div>
                    <div className='pt_header-right-settings-field'><img src='./assets/images/settings.png'></img></div>
                </div>
                <div className='pt_homescreen'></div>
            </div>
        );
    }
}

export default Profile_Tickets;
