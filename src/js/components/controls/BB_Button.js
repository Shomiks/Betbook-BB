import React from 'react';

function BB_Button(props) {

    return <div className='bs-create-account-box' onClick={props.onClick}>
        <div className='bs-email-text'><span className='text18-white'>{props.label}</span></div>
    </div>
}

export default BB_Button;