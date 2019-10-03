import React from 'react';

function BB_TextField(props) {

    let inputCssClass = "bs-email-box";
    if(props.error){
        inputCssClass = "bs-email-box bs-email-box-error";
    }

    return <div className='bs-email-container'>
            <div className='bs-email-text'><span className='text15-white'>{props.label}</span></div>
            <input className={inputCssClass} type='username' value={props.value} onChange={props.onChange}/>
        </div>
}

export default BB_TextField;
