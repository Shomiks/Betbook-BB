import React from 'react';
import Footer from "../menus/Footer";
import BB_Button from "../controls/BB_Button";

function FooterContainer(props) {

    return (<div className='betbook_screen'>
        {props.children}
        <Footer key='footerContainer' {...props.footerProps} />
    </div>);
}


export default FooterContainer;