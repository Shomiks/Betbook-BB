import React from 'react';
import '../../../style/components/menus/footer.scss';
import {Link} from "react-router-dom";
import FooterContainer from "../containers/FooterContainer";
import PropTypes from "prop-types";

function Footer(props) {


    return (
        <div className='rectangle_footer'>
            <div
                className={props.activeItem == 'timeline' ? 'ft_home-field active-timeline' : 'ft_home-field'}>
                <Link to={`/home`}>
                    <div className='timeline'>
                            <span>{props.activeItem == 'timeline' ?
                                <div className='center-text'><span className='text10-white'>Home</span>
                                </div> : ''}</span></div>
                </Link>
            </div>
            <div
                className={props.activeItem == 'ball' ? 'ft_countries-field active' : 'ft_countries-field'}>
                <Link to={`/countries`}>
                    <div className='ball'>
                            <span>{props.activeItem == 'ball' ?
                                <div className='center-text'><span className='text10-white'>Sport</span>
                                </div> : ''}</span></div>
                </Link>
            </div>
            <div className={props.activeItem == 'star' ? 'ft_star-field active' : 'ft_star-field'}>
                <Link to={`/favourite_leagues`}>
                    <div className='star'>
                            <span>{props.activeItem == 'star' ?
                                <div className='center-text'><span className='text10-white'>Favorites</span>
                                </div> : ''}</span></div>
                </Link>
            </div>
            <div
                className={props.activeItem == 'profile' ? 'ft_profile-field active-profile' : 'ft_profile-field'}>
                <Link to={`/profile`}>
                    <div className='profile'>
                            <span>{props.activeItem == 'profile' ?
                                <div className='center-text'><span className='text10-white'>Profile</span>
                                </div> : ''}</span></div>
                </Link>
            </div>
        </div>
    )
}


Footer.propTypes = {
    activeItem: PropTypes.oneOf(['timeline', 'ball', 'star', 'profile'])
};


export default Footer;
