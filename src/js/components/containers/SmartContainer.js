import React from 'react';
import Footer from "../menus/Footer";
import Header from "../menus/Header";
import './../../../style/components/containers/smart_container.scss';
import PropTypes from "prop-types";

function SmartContainer(props) {

    let header;
    if (props.showHeader == true) {
        header = <Header {...props.headerProps} />;
    } else {
        header = null;
    }

    let footer;
    if (props.showFooter == true) {
        footer = <Footer {...props.footerProps} />
    } else {
        footer = null;
    }


    return (<div className='full_container'>
        {header}
        <div className='full_container_child'>
            {props.children}
        </div>
        {footer}
    </div>);
}

SmartContainer.propTypes = {
    showHeader: PropTypes.bool,
    showFooter: PropTypes.bool,
};


export default SmartContainer;
