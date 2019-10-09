import React from 'react';
import '../../../style/components/menus/header.scss'
import {Link} from "react-router-dom";

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      title: props.title,
      competition: props.competition,
      itemRight: props.itemRight ? props.itemRight : null,
      itemLeft: props.itemLeft ? props.itemLeft : null
      }
    }

        renderHeaderItems = () => {

        if(!this.state.itemLeft) return (<>
        <div className='chevron_header' onClick={() => window.history.back()}/>
        <div className='sport'>
        <div className='text_align'><span className='text20-white'>{this.state.title}</span></div>
        </div>
        <div className={this.state.itemRight}/>
        </>);

          else{
            return( <>
              <Link to={`/search`}><div className='search'/></Link>
              <Link to={'/settings'}><div className='settings'/></Link>
                <div className='bb_h_text_box'>
                <div className='bb_h_title'><span className='text18-white'>{this.props.tittle}</span></div>
                <div className='bb_h_subtitle'><span className='text12-white'>{this.props.subtittle}</span></div>
                </div>
              <Link to={'/search'}><div className='search'/></Link>
              </>)
        }
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
