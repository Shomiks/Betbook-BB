import React from 'react';
import {Link, Redirect} from "react-router-dom";
import '../../../style/components/controls/bb_button.scss'

function BB_Button(props) {

    return <div className='bb_button' onClick={props.onClick}>
        <div className='bs-email-text'><span className='text18-white'>{props.label}</span></div>
    </div>
}

export default BB_Button;