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
            ...props.data,
            currentMatch: null
        }
    }

    handleMatchClick = (currentMatch)=> {

        this.setState({currentMatch:currentMatch});
    }


    render() {

        // let dataKeys = Object.keys(this.state);
        // dataKeys.splice(-1,1)
        // console.log(dataKeys)

        if(this.state.currentMatch){
            return <Match_Details match={this.state.currentMatch} />
        }

        return (
            <div className='betbook_screen'>
                <div className='main-content padding-none'>

                    {
                        this.state['0'].data.map((match,i)=> <div onClick={()=>{this.handleMatchClick(match)}} className='match-field'><MatchShort match={match} key={match.match.id+'_'}  /></div>)
                    }
                </div>
            </div>
        );
    }
}

export default Week_games_Listing;
