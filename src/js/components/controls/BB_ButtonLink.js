import React from 'react';
import {Link, Redirect} from "react-router-dom";

function BB_ButtonLink(props) {

    let inputCssClass = "bb_button_link";
    if (props.type) {
        inputCssClass = "normal outlined";
    }

    return <div className={'bb_button_link ' + props.type} onClick={props.handleLogin}>
        <div className={'bs-email-text'}><span className={props.size}>{props.text}</span></div>
    </div>
}

export default BB_ButtonLink;