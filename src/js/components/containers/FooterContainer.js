import React from 'react';
import Footer from "../menus/Footer";

function FooterContainer(props) {

    return (<div className='betbook_screen'>
        {props.children}
        <Footer key='footerContainer' {...props.footerProps} />
    </div>);
}

export default FooterContainer;