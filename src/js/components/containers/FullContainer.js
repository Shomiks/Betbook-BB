import React from 'react';
import Footer from "../menus/Footer";
import Header from "../menus/Header";

function FullContainer(props) {

    if(!props.headerType) return (<div className='betbook_screen'>
       <Header {...props.headerProps}/>
        {props.children}
        <Footer key='footerContainer' {...props.footerProps} />
    </div>);
    else return <div className='betbook_screen'>

    </div>
}

export default FullContainer;