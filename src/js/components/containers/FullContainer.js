import React from 'react';
import Footer from "../menus/Footer";
import Header from "../menus/Header";
import './../../../style/components/containers/full_container.scss';

function FullContainer(props) {

    return (<div className='full_container'>
       <Header {...props.headerProps} />
       <div className='full_container_child'>
        {props.children}
       </div>
        <Footer key='footerContainer' {...props.footerProps} />
    </div>);
}

export default FullContainer;