import React from 'react';
import '../../../../src/style/components/containers/main-container.scss'

function MainContainer(props) {
   return  <div className='bs-login'><div className='main-container'>
        {props.children}
    </div></div>
}

export default MainContainer;
