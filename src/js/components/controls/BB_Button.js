import React from 'react';
import {Link, Redirect} from "react-router-dom";

function BB_Button(props) {

    let inputCssClass = "bs-email-box";
    if (props.error) {
        inputCssClass = "bs-email-box bs-email-box-error";
    }

    return <div className='bs-create-account-box' onClick={props.onClick}>
        <div className='bs-email-text'><span className='text18-white'>{props.label}</span></div>
    </div>
}

export default BB_Button;