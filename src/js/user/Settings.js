import React from 'react';
import {Link} from "react-router-dom";

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
                    <Link to={`/login`}><button onClick={() => localStorage.removeItem('user_id')} style={{margin: 100, fontSize: 24}}>LOGOUT</button></Link>
                </div>
            </div>
        )
    }
}
export default Settings;
