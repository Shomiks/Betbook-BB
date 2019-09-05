import React from 'react';

import {Link} from "react-router-dom";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            loaded:false
        };
        this.sharedObj = props.sharedObj
    }

    componentDidMount() {
        this.setState({loaded:true})
    }


    render() {///11/35

        if(this.state.loaded) this.sharedObj.headerInstance.setTitle('Search for users')
        return <div className='betbook-screen'>
                <div className='main-container'>

                </div>
            </div>

    }
}

export default Search;
