import React from 'react';
import '../../../style/components/menus/header.scss'

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      competition: props.competition,
      itemRight: props.itemRight ? props.itemRight : 'chevron_header',
      itemLeft: props.itemLeft ? props.itemLeft : null
      }
    }

    itemClick = () => {
      if(this.state.itemLeft == 'chevron_header') return window.history.back()
    };

        renderHeaderItems = () => {
        return <>
        <div className={} onClick={() => this.itemClick}/>
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
        this.setState({itemRight: item})
      };

        render() {
          console.log(this.props)
        return <div className='rectangle_header'>
        <div className='header-container'>
        {this.renderHeaderItems()}
      </div>
    </div>
  }
}

export default Header;
