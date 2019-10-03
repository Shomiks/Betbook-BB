import React from 'react';

function BB_TextField(props) {

    let inputCssClass = "bs-input-text";
    if(props.error){
        inputCssClass = "bs-input-text bs-input-text-error";
    }


    return <div className='bs-input-container'>
            <div className='bs-email-text'><span className='text15-white'>{props.label}</span></div>
            <input className={inputCssClass} type='username' value={props.value} onChange={props.onChange}/>
        </div>
}


export default BB_TextField;
