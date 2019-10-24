import React from 'react';
import '../../../style/components/controls/bb_button.scss'
import '../../../style/app.scss'
import PropTypes from "prop-types";


function BB_Button(props) {
    return <div className='bb_button' onClick={props.onClick}>
        <span className='text18-white'>{props.label}</span>
    </div>
}

BB_Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func
};


BB_Button.defaultProps = {
    label: 'test'
};

export default BB_Button;