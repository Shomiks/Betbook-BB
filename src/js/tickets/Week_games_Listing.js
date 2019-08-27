import React from 'react';
import '../../../src/style/betbook/week-games.scss';
import '../../../src/style/app.scss';
import MatchShort from '../components/match_short';
import Match_Details from "./Match_Details";

import data from '../data'

class Week_games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: data,
            currentMatch: null
        }
    }

    handleMatchClick = (currentMatch)=> {
        // console.log(currentMatch);
        this.setState({currentMatch});
    }

    render() {
        if(this.state.currentMatch){
            return <Match_Details match={this.state.currentMatch} />
        }

        return (
            <div>
                    {
                        this.state.data.map((match)=> <div onClick={()=>{this.handleMatchClick(match)}} className='match-field'><MatchShort match={match}  /></div>)
                    }

            </div>
        );
    }
}

export default Week_games_Listing;
