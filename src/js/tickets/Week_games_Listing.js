import React from 'react';
import '../../../src/style/betbook/week-games.scss';
import '../../../src/style/app.scss';
import MatchShort from '../components/match_short';
import Match_Details from "./Match_Details";

import data from '../data'
import Header from "../components/header";

class Week_games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMatch: null
        }
    }

    handleMatchClick = (currentMatch)=> {
        this.setState({currentMatch:currentMatch});
    }

    render() {

        if(this.state.currentMatch){
            return <Match_Details match={this.state.currentMatch} />
        }

            return (
                <div className='betbook_screen'>
                    <Header title={this.props.data.name}/>

                    <div className='main-content'>
                        <div className='game-week'><span className='text14'>{'Matchday ' + this.props.data.currentWeek}</span>
                            {
                                this.props.data.data.map((match,i)=> <div onClick={()=>{this.handleMatchClick(match)}} className='match-field'><MatchShort match={match} key={match.match.id+'_'}  /></div>)
                            }
                        </div>
                    </div>
                </div>
            );
        }

}

export default Week_games_Listing;
