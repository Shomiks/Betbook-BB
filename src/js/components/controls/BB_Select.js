import React from 'react';

function BB_Select(props) {

    let inputCssClass = "bs-email-box";
    let clubsCssClass = 'bs-email-container';

    if (props.error) {
        inputCssClass += " bs-email-box-error";
    }
    if (props.error){
        clubsCssClass += ' hidden';
    }

    return <div className={clubsCssClass}>
        <div className='bs-email-text'>{<span className='text15-white'>{props.text}</span>}</div>
    <select className={inputCssClass} onChange={props.onChange}>
        {props.options.map(option=> <option value={option.value} key={option.key} >{option.label}</option> )}
    </select>
    </div>
}


export default BB_Select;
