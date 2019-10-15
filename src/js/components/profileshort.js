import React from 'react';
import '../../style/betbook/components/profileshort.scss';

class ProfileShort extends React.Component {

    constructor(props) {
        super(props);

    }

    render() {
        return <div>
            <div className='ps_screen'>
                <div className='ps_number'><span className='text17'>1.</span></div>
                <div className='ps_member-image'><img src='./assets/images/profile_pic-small.png'></img></div>
                <div className='ps_member-name'>
                    <div className='ps_name'><span className='text17'>Marko Markovski</span></div>
                    <div className='ps_points'><span className='text12-gray'>Points / success rate / koef???</span>
                    </div>
                </div>
                <div className='ps_member-success'><span className='text25'>89%</span></div>
            </div>
        </div>
    }
}

export default ProfileShort;