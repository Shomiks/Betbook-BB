import React from 'react';
import '../../../style/components/containers/bottom_container.scss'

function BottomContainer(props) {

    return  <div className='bottom-container'>
        {props.children}
    </div>
}

export default BottomContainer;
