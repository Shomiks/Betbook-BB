import React from 'react';

function MainContainer(props) {
   return  <div className='betbook-screen-login'><div className='main-container'>
        {props.children}
    </div></div>
}

export default MainContainer;
