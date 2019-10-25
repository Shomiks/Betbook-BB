import React from 'react';
import '../../../style/components/menus/header.scss'
import PropTypes from "prop-types";
import BB_ButtonLink from "../controls/BB_ButtonLink";
import leftArrowSVG from '../../../style/betbook/assets/images/Arrow.svg';
import searchSVG from '../../../style/betbook/assets/images/search---final.svg';

function Header(props) {

    let leftIcon = null;

    if (props.showBack == true) {
        leftIcon = <div className='header_left_icon'><img src={leftArrowSVG}></img></div>
    } else if (props.leftIcon != undefined) {
        leftIcon = <div className='header_left_icon' onClick={props.leftIconOnClick}><img src={props.leftIcon}/></div>
    } else {
        leftIcon = null;
    }

    let titleClassName = null;
    let subtitle = null;
    if (props.subtitle != undefined) {
        subtitle = <div className='header_subtitle'><span className='text11-white'>{props.subtitle}</span></div>
        titleClassName = 'header_title header_with_subtitle';
    } else {
        subtitle = null;
        titleClassName = 'header_title';
    }

    let rightIcon = null;
    if (props.rightIcon != undefined)
        rightIcon =
            <div className='header_right_icon' onClick={props.rightIconOnClick}><img src={props.rightIcon}/></div>
    else
        rightIcon = null;

    return (
        <div className='header'>
            {leftIcon}
            <div>
                <div className={titleClassName}><span className='text20-white'>{props.title}</span></div>
                {subtitle}
            </div>
            {rightIcon}
        </div>);


}


Header.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    leftIcon: PropTypes.object,
    rightIcon: PropTypes.object,
    leftIconOnClick: PropTypes.func,
    rightIconOnClick: PropTypes.func,
    showBack: PropTypes.bool,
};

Header.defaultProps = {
    title: 'Header title',
};


export default Header;
