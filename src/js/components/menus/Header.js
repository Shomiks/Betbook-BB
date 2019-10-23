import React from 'react';
import '../../../style/components/menus/header.scss'
import PropTypes from "prop-types";
import BB_ButtonLink from "../controls/BB_ButtonLink";
import leftArrowSVG from '../../../style/betbook/assets/images/Arrow.svg';

function Header(props) {

    let leftIcon = null;

    if(props.showBack == true || props.showBack == undefined) {
        leftIcon = <div>Test</div>
    } else if (props.leftIcon != undefined) {
        leftIcon = <div className='header_left_icon' onClick={props.leftIconOnClick}><img src={props.leftIcon}/></div>
    }

    let subtitle = null;
    if (props.subtitle != undefined)
        subtitle = <div><span className='text11-white'>{props.subtitle}</span></div>

    let rightIcon = null;
    if (props.rightIcon != undefined)
        rightIcon = <div className='header_right_icon' onClick={props.rightIconOnClick}><img src={props.rightIcon}/></div>

    return (
        <div className='header'>
            {leftIcon}
            <div>
                <div className='header_title'><span className='text20-white'>{props.title}</span></div>
                {subtitle}
            </div>
            {rightIcon}
        </div>);


}


// class Header extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             title: props.title,
//             competition: props.competition,
//             itemRight: props.itemRight ? props.itemRight : null,
//             itemLeft: props.itemLeft ? props.itemLeft : null
//         }
//     }
//
//     renderHeaderItems = () => {
//
//         if (!this.state.itemLeft) return (<>
//             <div className='chevron_header' onClick={() => window.history.back()}/>
//             <div className='sport'>
//                 <div className='text_align'><span className='text20-white'>{this.state.title}</span></div>
//             </div>
//             <div>{this.props.rightIcon}</div>
//         </>);
//
//         else {
//             return (<>
//                 <Link to={'/settings'}>
//                     <div className='settings'/>
//                 </Link>
//                 <div className='bb_h_text_box'>
//                     <div className='bb_h_title'><span className='text18-white'>{this.props.title}</span></div>
//                     <div className='bb_h_subtitle'><span className='text12-white'>{this.props.subtitle}</span></div>
//                 </div>
//                 <div onClick={this.props.rightIconOnClick}>
//                     <img src={this.props.rightIcon}/>
//                 </div>
//             </>)
//         }
//     };
//
//     render() {
//         return <div className='rectangle_header'>
//             <div className='header-container'>
//                 {this.renderHeaderItems()}
//             </div>
//         </div>
//     }
// }


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

};


export default Header;
