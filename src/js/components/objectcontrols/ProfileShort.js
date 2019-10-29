import React from 'react';
import '../../../style/components/objectcontrols/profileshort.scss';
import PropTypes from "prop-types";

function ProfileShort(props) {

    console.log(JSON.stringify(props.user));

    return (
        <div className='ps_screen'>
            <div className='ps_member-name'>
                <div className='ps_name'><span className='text17-white'>{props.user.username}</span></div>
                <div className='ps_points'><span className='text12-grey'>{props.user.country.name}</span></div>
            </div>
        </div>
    )
}

ProfileShort.propTypes = {
    user: PropTypes.object.isRequired
};

export default ProfileShort;