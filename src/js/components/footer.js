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
           <div className='timeline'></div>
           <div className='ball' onClick={() => hashChange('competitions')}></div>
           <div className='star'></div>
           <div className='profile'></div>
         </div>
     )
   }
 }

Footer.defaultProps = {
  title: 'Meni',
};

export default Footer;
