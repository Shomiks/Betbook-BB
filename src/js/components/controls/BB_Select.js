import React from 'react';
import '../../../style/components/controls/bb_select.scss'

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

export default BB_Select;
