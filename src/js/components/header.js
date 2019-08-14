import React from 'react';

// import '../../../src/style/app.scss'
import '../../style/betbook/components/header.scss'

function Header(props) {
  return <div className='rectangle_header'>
    <div className='chevron_header'/>
    <div className='sport'>
      <div className='text_align'><span
          className='text17'>{props.title}</span></div>
    </div>
    <div className={props.competition ? 'calendar' : 'hide'}> <img src='./assets/images/calendar.png'/> </div>
  </div>
}

Header.defaultProps = {
  title: '',
};

export default Header;
