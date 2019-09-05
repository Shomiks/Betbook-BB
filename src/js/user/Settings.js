import React from 'react';

class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
        this.sharedObj = props.sharedObj
    }

    componentDidMount() {
        this.sharedObj.headerInstance.setTitle('Settings')
    }

    render() {///11/35

        return (<div className='betbook-screen'>
                <div className='main-container'>

                </div>
            </div>
        )
    }
}
export default Settings;
