import React from 'react';
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Weeks from '../../../src/js/components/week.js'
import Header from '../components/header';
import Week_games_Listing from "./Week_games_Listing";

import data from '../data'
import hsData from "../hsData";
import dataCompetitions from "../dataCompetitions";

import {
    BrowserRouter as Router,
    Route,
    Link, HashRouter
} from 'react-router-dom';
import MatchShort from "../components/match_short";

const Nav = () => (
    <Link to={{
        hash: '3',
        state: {fromHome: true}
    }}/>
)


class Home_screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previousData: hsData,
            data: hsData,
            currentData: null
        }
    }

    changeData = (data) => {
        this.setState({data})
    }

    handleWeekClick = (currentData) => {
        this.setState({currentData: currentData})
    }

    render() {

        if (this.state.currentData) {

            return <Week_games_Listing data={this.state.currentData[0]}/>
        }

        if (this.state.data) return (

            <div className='betbook_screen'>
                <Header title='Home screen'/>
                <div className='main-content'>
                    <div className='active-bids-field'><span className='text14'>Active bids</span>
                        {this.state.data.map((gameweek) => <div className='week-games'>
                                <Weeks data={this.state.data} onChangeData={this.changeData}/>
                                <div>
                                    <div className='hs_league-week-header'>
                                        <div className='hs_league-tittle' onClick={() => {
                                            this.handleWeekClick(this.state.data)
                                        }}><span
                                            className='text17'>{gameweek.name + " matchday " + (gameweek.currentWeek)}</span>
                                        </div>
                                        <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        )

        return <div className='betbook_screen'>
            <Header title='Home screen'/>
        </div>

    }
}

export default Home_screen;
