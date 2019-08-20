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

  setCompetition = (competition) => {
    this.setState({competition})
  }

  render() {
    return <div className='rectangle_header'>
      <div className='chevron_header'/>
      <div className='sport'>
        <div className='text_align'><span
            className='text17'>{this.state.title}</span></div>
      </div>
      <div className={this.state.competition ? 'calendar' : 'hide'}> <img src='./assets/images/calendar.png'/> </div>
    </div>
  }
}

export default Header;
