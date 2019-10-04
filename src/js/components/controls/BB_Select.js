import React from 'react';

function BB_Select(props) {

    let inputCssClass = "bs-email-box";
    let clubsCssClass = 'bs-email-container';

    if (props.error){
        clubsCssClass += ' disabled';
    }

    return <div className={clubsCssClass}>
        <div className='bs-email-text'>{<span className='text15-white'>{props.text}</span>}</div>
    <select className={inputCssClass} onChange={props.onChange} defaultValue={props.defaultValue}>
        {props.options.map(option=> <option value={option.value} key={option.key} defaultValue={props.defaultValue}>{option.label}</option>)}
    </select>
        </div>
}


export default BB_Select;
