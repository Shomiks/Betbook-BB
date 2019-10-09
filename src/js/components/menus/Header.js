import React from 'react';
import '../../../style/components/menus/header.scss'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      competition: props.competition,
      itemRight: props.itemRight ? props.itemRight : null,
      itemLeft: props.itemLeft ? props.itemLeft : 'chevron_header'
        }
        }

  clickLeft = () => {
    if(this.state.item == 'chevron_header') return () => window.history.back;
  }

        renderHeaderItems = () => {
        return <>
        <div className={this.state.itemLeft} onClick={() => this.clickLeft}/>
        <div className='sport'>
        <div className='text_align'><span className='text20-white'>{this.state.title}</span></div>
        </div>
        <div className={this.state.itemRight}/>
        </>
      };

        setTitle = (title) => {
        this.setState({title:title})
      };

        setItemRight = (item) => {
        this.setState({currentItemRight: item})
      };

        render() {
        return <div className='rectangle_header'>
        <div className='header-container'>
        {this.renderHeaderItems()}
      </div>
    </div>
  }
}

export default Header;
