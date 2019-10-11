import React from 'react';
import '../../../style/components/controls/bb_button.scss'

function BB_Button(props) {

    return <div className='bb_button' onClick={props.onClick}>
        <span className='text18-white'>{props.label}</span>
    </div>
}

export default BB_Button;