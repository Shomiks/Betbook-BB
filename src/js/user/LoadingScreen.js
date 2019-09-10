import React from 'react';
import '../../../src/style/betbook/user/loading-screen.scss'

class LoadingScreen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        }
    }

    render() {///26/35

        return (
            <div className='betbook-screen-loading'>
                <div className='betbook-logo-box'><img src='./assets/images/betbook---logo.png'></img></div>
            </div>
        )
    }
}



export default LoadingScreen;
