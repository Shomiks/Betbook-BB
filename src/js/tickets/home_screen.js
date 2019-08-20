import React from 'react';
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Weeks from '../../../src/js/components/week.js'
import Header from '../components/header';

import data from '../data/data'
import hsData from "../data/hsData";
import {Link} from "react-router-dom";

class Home_screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previousData: hsData,
            data: hsData,
            currentData: null
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        console.log('testttt');
        this.sharedObj.apiHelper.home(this.handleHomeLoaded);
    }

    handleHomeLoaded = (data) => {
        this.setState({data, loaded: true});
    }

    render() {
            return (
                <div className='betbook_screen'>
                    <Header title='Home screen'/>
                    <div className='main-content'>
                        <div className='active-bids-field'><span className='text14'>Active bids</span>
                            {this.state.data.map(() => <div className='week-games'>
                                    <Weeks data={this.state.data}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )
        }
}

export default Home_screen;
