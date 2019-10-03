import React from 'react';
import {Link} from "react-router-dom";
import './../../../style/components/controls/bb-button-link.scss'

function BB_ButtonLink(props) {

    return <Link to={props.location}><div className={'bb_button_link ' + props.type} onClick={props.handleLogin}>
        <div className={'bs-email-text'}><span className={props.size}>{props.text}</span></div>
    </div></Link>
}

export default BB_ButtonLink;