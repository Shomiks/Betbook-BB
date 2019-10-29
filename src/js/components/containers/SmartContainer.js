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

    let cssClassPadding = null;
    if (props.showHeader == true && props.showFooter != true) {
        cssClassPadding = 'container container_pad_top';
    } else if (props.showHeader != true && props.showFooter == true) {
        cssClassPadding = 'container container_pad_bottom';
    } else if (props.showHeader != true && props.showFooter != true) {
        cssClassPadding = 'container';
    } else cssClassPadding = 'container container_pad_top container_pad_bottom';


    return (<div className={cssClassPadding}>
        {header}
            <div className='child'>
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
