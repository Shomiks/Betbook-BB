import React from 'react';
import '../../../style/components/containers/main_container.scss'

function MainContainer(props) {
   return  <div className='bs-login'><div className='main-container'>
        {props.children}
    </div></div>
}

export default MainContainer;
