import React from 'react';

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
        };
        this.sharedObj = props.sharedObj
    }

    componentDidMount() {
        setTimeout(() => {
            this.sharedObj.headerInstance.setTitle('Search for users')
        },1)
    }

    render() {

        return <div className='betbook-screen'>
                <div className='main-container'/>
            </div>
    }
}

export default Search;
