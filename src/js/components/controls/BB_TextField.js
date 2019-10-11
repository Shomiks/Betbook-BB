import React from 'react';
import '../../../style/components/controls/bb_textfield.scss';
import PropTypes from 'prop-types';

function BB_TextField(props) {

    let inputCssClass = "bb_tf-input-text";
    if(props.error){
        inputCssClass = "bb_tf-input-text bb_tf-input-text-error";
    }

    return <div className='bb_tf_container'>
            <div className='bb_tf-text'><span className='text15-white'>{props.label}</span></div>
            <input className={inputCssClass} type={props.type} value={props.value} onChange={props.onChange}/>
            <span className='bb_tf_helper_text_red'>{props.helperText}</span>
        </div>
}

BB_TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.bool,
    helperText: PropTypes.string
};

BB_TextField.defaultProps = {
    type: 'text'
}

export default BB_TextField;