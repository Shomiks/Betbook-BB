import React from 'react';
import Footer from "../menus/Footer";
import Header from "../menus/Header";

function FullContainer(props) {

    return (<div className='betbook_screen' >
        <Header {...props.headerProps} />
        {props.children}
        <Footer key='footerContainer' {...props.footerProps} />
    </div>);
}

export default FullContainer;