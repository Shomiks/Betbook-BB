import React from 'react';
import '../../style/betbook/components/footer.scss';

// import '../../..src/style/betbook/components/footer.scss'

const hashChange = (hash) =>{
  if(hash == 'home') window.location.hash = '#3'
  else if(hash == 'competitions') window.location.hash = '#2'
}
 class Footer extends React.Component {
   constructor(props) {
     super(props);
     this.sharedObj = props.sharedObj;
   }

   render() {


     return (

         <div className='rectangle_footer'>
           <div className='timeline'><img src='./assets/images/timeline.png'/></div>
           <div className='ball' onClick={() => hashChange('competitions')}><img src='./assets/images/ball_footer.png'/></div>
           <div className='star'><img src='./assets/images/star.png'/></div>
           <div className='profile'><img src='./assets/images/profile.png'/></div>
           <div className='podium'><img src='./assets/images/podium.png'/></div>
         </div>
     )
   }
 }

Footer.defaultProps = {
  title: 'Meni',
};

export default Footer;
