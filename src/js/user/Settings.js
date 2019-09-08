import React from 'react';
import {Link} from "react-router-dom";

class Settings extends React.Component {

    constructor(props) {
        super(props);

        this.state = {};
        this.sharedObj = props.sharedObj
    }

    componentDidMount() {
        setTimeout(() => {
            this.sharedObj.headerInstance.setTitle('Settings')
        },1)

    }

    render() {

        return (<div className='betbook-screen'>
                <div className='main-container'>
                    <Link to={`/login`}><button onClick={() => localStorage.removeItem('user_id')} style={{margin: 100, fontSize: 24}}>LOGOUT</button></Link>
                </div>
            </div>
        )
    }
}
export default Settings;
