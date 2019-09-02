import React from 'react';
import '../../style/betbook/components/footer.scss';
import {Link} from "react-router-dom";

 class Footer extends React.Component {
   constructor(props) {
     super(props);
     this.sharedObj = props.sharedObj;
   }

   render() {


     return (

         <div className='rectangle_footer'>
             <Link to={`/home`}> <div className='timeline'/></Link>
             <Link to={`/countries`}><div className='ball'/></Link>
           <div className='star'/>
             <Link to={`/profile`}><div className='profile'></div></Link>
         </div>
     )
   }
 }

Footer.defaultProps = {
  title: 'Meni',
};

export default Footer;
