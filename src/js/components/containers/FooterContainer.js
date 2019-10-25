import React from 'react';
import Footer from "../menus/Footer";
import BB_Button from "../controls/BB_Button";
import './../../../style/components/containers/footer_container.scss';

function FooterContainer(props) {

    return (<div className='footer_container'>
        <div className='footer_container_child'>
        {props.children}
        </div>
        <Footer key='footerContainer' {...props.footerProps} />
    </div>);
}


export default FooterContainer;