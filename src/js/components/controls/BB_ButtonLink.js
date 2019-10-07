import React from 'react';
import {Link} from "react-router-dom";
import '../../../style/components/controls/bb_button_link.scss'
import PropTypes from 'prop-types';

function BB_ButtonLink(props) {
    return <Link to={props.location}><div className={'bb_button_link ' + props.type} onClick={props.handleLogin}>
        <div className={'bb_bl_input-text'}><span className={props.size}>{props.text}</span></div>
    </div></Link>
}

BB_ButtonLink.propTypes = {
    location: PropTypes.string,
    type: PropTypes.oneOf(['bb_bl_outlined','bb_bl_normal']),
    size: PropTypes.oneOf(['bb_bl_size_small','bb_bl_size_medium']),
    text: PropTypes.string
};

BB_ButtonLink.defaultProps = {
}

export default BB_ButtonLink;