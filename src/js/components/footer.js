import React from 'react';
import '../../style/betbook/components/footer.scss';
import {Link} from "react-router-dom";

 class Footer extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
         currentState: false,
         currentActive: null
     };
       this.sharedObj = props.sharedObj;
   }

     setActive = (active) => {
         this.setState({currentActive:active})
     };

     render() {

  return (

         <div className='rectangle_footer'>
             <div className={this.state.currentActive == 'timeline' ? 'ft_home-field active-timeline' : 'ft_home-field'}>
                 <Link to={`/home`}> <div className='timeline'>
                     <span>{this.state.currentActive == 'timeline' ? 'Home' : ''}</span></div></Link>
             </div>
             <div className={this.state.currentActive == 'ball' ? 'ft_countries-field active' : 'ft_countries-field'}>
                 <Link to={`/countries`}> <div className='ball'>
                     <span>{this.state.currentActive == 'ball' ? 'Sport' : ''}</span></div></Link>
             </div>
             <div className={this.state.currentActive == 'star' ? 'ft_star-field active' : 'ft_star-field'}>
                 <Link to={`/country/246`}> <div className='star'>
                     <span>{this.state.currentActive == 'star' ? 'Favorites' : ''}</span></div></Link>
             </div>
             <div className={this.state.currentActive == 'profile' ? 'ft_profile-field active-profile' : 'ft_profile-field'}>
                 <Link to={`/profile`}> <div className='profile'>
                     <span>{this.state.currentActive == 'profile' ? 'Profile' : ''}</span></div></Link>
             </div>
         </div>
     )
   }
 }

export default Footer;
