import React from 'react';
import '../../style/betbook/components/header.scss'

class Header extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      title: props.title,
      competition: props.competition
    }
  }

  setTitle = (title) => {
    this.setState({title:title})
  }

  render() {
    return <div className='rectangle_header'>
      <div className='header-container'>
      <div className='chevron_header'/>
      <div className='sport'>
        <div className='text_align'><span className='text17-white'>{this.state.title}</span></div>
      </div>
      <div className={this.state.competition ? 'calendar' : 'hide'}> <img src='./assets/images/calendar.png'/> </div>
      <div className={this.state.competition ? 'star' : 'hide'}> <img src='../../../public/assets/images/star_dark.PNG'/> </div>
        <div className='star'/>
      </div>
    </div>
  }
}

export default Header;
