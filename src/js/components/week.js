import React from 'react';
import MatchShort from './match_short';
import '../../style/week.scss'
import '../../style/betbook/components/match_short.scss'

import {Route, HashRouter, Switch, Redirect, Link} from "react-router-dom";

class Weeks extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentData: props.data
        }
    }

    renderGames = () => {
        return <div>
            {this.state.currentData[1].data.map((match, i) => <Link to={`/match/${match.match.id}`}> <MatchShort
                match={match}/>
            </Link>)}
        </div>
    }

    render() {
        return (
            <div className='game-week'>
                <Link to={`/competition/${this.state.currentData[1].currentWeek}/week/${this.state.currentData[1].id}`}>
                    <div className='hs_league-week-header'>
                        <div className='hs_league-tittle'><span
                            className='text17'>{this.state.currentData[1].data[0].competition.name + " matchday " + this.state.currentData[1].data[0].competition.id}</span>
                        </div>
                        <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
                    </div>
                </Link>
                <div>
                    {this.renderGames()}
                </div>
            </div>

        );
    }

}


export default Weeks;
