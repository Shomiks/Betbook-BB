import React from 'react';
import '../../../src/style/betbook/week-games.scss';
import MatchShort from '../components/match_short';
import {Link} from "react-router-dom";

class Week_games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            loaded: false
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.sharedObj.apiHelper.competitions.getByID(1, this.handleCompetitionLoaded);
    }

    handleCompetitionLoaded = (data) => {
        this.setState({data, loaded: true});
    }

    renderGames = () => {
        return <div>
            <div className='game-week'><span className='text14'>{'Matchday ' + this.state.data.currentWeek}</span></div>`
            {this.state.data.data.map((match, i) => <Link to={`/match/${match.match.id}`}> <MatchShort match={match}/>
            </Link>)}
        </div>
    }

    render() {

        console.log(this.state.data)
        if (this.state.loaded) {
            this.sharedObj.headerInstance.setTitle(this.state.data.name);
        }

        return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    {this.state.loaded ? this.renderGames() : <div>Loading ... </div>}
                </div>
            </div>
        );
    }
}

export default Week_games_Listing;
