import React from 'react';
import '../../style/betbook/components/footer.scss';
import {Link} from "react-router-dom";

 class Footer extends React.Component {
   constructor(props) {
     super(props);
     this.state = {
         timeline: false,
         ball: false,
         star: false,
         profile: false
     };
     this.sharedObj = props.sharedObj;
   }

     toggleClass(timeline) {
         const currentState = this.state.active;
         this.setState({ timeline: !currentState });
     };

   onClickAddActive = (className) => {
       return className + ' active'
   }

   render() {


     return (

         <div className='rectangle_footer'>
             <div className='ft_home-field'>
                 <Link to={`/home`}> <div className={this.state.active ? 'timeline active' : 'timeline'} onClick={() => this.toggleClass('timeline')}><span>{this.state.timeline ? 'Home' : ''}</span></div></Link>
             </div>
             <div className='ft_countries-field'><Link to={`/countries`}><div className='ball'/></Link>
             </div>
             <div className='ft_star-field'><div className='star'/>
             </div>
             <div className='ft_profile-field'><Link to={`/profile`}><div className='profile'/><span className='text10-white'>Profile</span></Link>
             </div>
         </div>
     )
   }
 }

Footer.defaultProps = {
  title: 'Meni',
};

export default Footer;
