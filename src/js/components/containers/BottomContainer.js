import React from 'react';
import '../../../../src/style/components/containers/bottom-container.scss'

function BottomContainer(props) {

    return  <div className='bottom-container'>
        {props.children}
    </div>
}

export default BottomContainer;
