import React from 'react';
import '../../../style/components/controls/bb_select.scss'
import PropTypes from "prop-types";
import BB_TextField from "./BB_TextField";

function BB_Select(props) {

    let inputCssClass = "bb_sl-input-text";
    let clubsCssClass = 'bb_sl_container';

    return <div className={clubsCssClass}>
        <div className='bb_sl-text'>{<span className='text15-white'>{props.text}</span>}</div>
    <select className={inputCssClass} onChange={props.onChange} defaultValue={props.defaultValue}>
        {props.options.map(option=> <option value={option.value} key={option.key} defaultValue={props.defaultValue}>{option.label}</option>)}
    </select>
        </div>
}

BB_Select.propTypes = {
    text: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    key: PropTypes.string,
};

BB_Select.defaultProps = {
    type: 'text'
};

export default BB_Select;
