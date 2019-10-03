import React from 'react';

function BB_Select(props) {

    let inputCssClass = "bs-email-box";
    if (props.error) {
        inputCssClass = "bs-email-box bs-email-box-error";
    }

    return <select className='bs-email-box'>
        {props.options.map(option=> <option value={option.value}>{option.label}</option> )}
    </select>
}


export default BB_Select;
