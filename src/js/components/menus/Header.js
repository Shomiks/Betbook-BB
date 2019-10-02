import React from 'react';
import '../../../style/components/menus/header.scss'
import {Link} from "react-router-dom";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      competition: props.competition,
      currentItemRight: null
    }
  }

  renderHeaderItems = () => {
    return <>
      <div className='chevron_header' onClick={() =>window.history.back()}/>
      <div className='sport'>
        <div className='text_align'><span className='text20-white'>{this.state.title}</span></div>
      </div>
      <div className={this.state.currentItemRight}/>
      </>
  }

  setTitle = (title) => {
    this.setState({title:title})
  }

  setItemRight = (item) => {
    this.setState({currentItemRight: item})
  }

  render() {
    return <div className='rectangle_header'>
      <div className='header-container'>
        {this.renderHeaderItems()}
      </div>
    </div>
  }
}

export default Header;
