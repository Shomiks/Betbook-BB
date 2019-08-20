import React from 'react';
import MatchShort from './match_short';
import Match_Details from "../tickets/Match_Details";
import Header from "./header";
import '../../style/week.scss'
import '../../style/betbook/components/match_short.scss'
import Week_games_Listing from "../tickets/Week_games_Listing";

import Listing from "./listing";
import {Route, HashRouter, Switch, Redirect} from "react-router-dom";
import Login from "../user/Login";
import Competition_Listing from "../tickets/Competition_Listing";

class Weeks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentData:props.data[1]
        }
    }

    handleMatchClick = (currentMatch)=> {
        this.setState({currentMatch:currentMatch});
    }

    handleWeekClick = (weekData) => {
        this.setState({weekData: weekData})
    }


    render() {

        console.log(this.state.currentData)

        if(this.state.currentMatch){
            return <Match_Details match={this.state.currentMatch} />
        }
        if(this.state.weekData){
        }

        return (
                    <div className='game-week'>
                        <div className='hs_league-week-header'>
                            <div className='hs_league-tittle' onClick={() =>{
                                this.handleWeekClick()
                            }}><span className='text17'>{this.state.currentData.data[0].competition.name + " matchday " + this.state.currentData.data[0].competition.id}</span>
                            </div>
                            <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
                        </div>
                        {
                            this.state.currentData.data.map((match) => <div onClick={()=>{this.handleMatchClick(match)}} className='match-field'><MatchShort match={match} key={match.match.id+'_'}  /></div>)
                        }
                    </div>

        );
    }

}


export default Weeks;
