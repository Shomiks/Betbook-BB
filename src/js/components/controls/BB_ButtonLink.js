import React from 'react';
import {Link} from "react-router-dom";
import '../../../style/components/controls/bb_button_link.scss'
import PropTypes from 'prop-types';

function BB_ButtonLink(props) {

    var mainCssClass = "";
    if (props.type == "normal") {
        mainCssClass = 'bb_bl_normal';
    } else if (props.type == "outlined") {
        mainCssClass = 'bb_bl_outlined';
    }

    var sizeCssClass = "";
    if (props.size == "small") {
        sizeCssClass = 'bb_bl_size_small';
    } else if (props.size == "medium") {
        sizeCssClass = 'bb_bl_size_medium';
    }

    return <Link to={props.location}><div className={mainCssClass} onClick={props.handleLogin}>
        <div className={'bb_bl_input-text'}><span className={sizeCssClass}>{props.text}</span></div>
    </div></Link>
}

BB_ButtonLink.propTypes = {
    location: PropTypes.string,
    type: PropTypes.oneOf(['outlined','normal']),
    size: PropTypes.oneOf(['small','medium']),
    text: PropTypes.string
};

BB_ButtonLink.defaultProps = {
}

export default BB_ButtonLink;