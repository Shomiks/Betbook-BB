import React from 'react';
import MatchShort from '../components/match_short';
import {Link} from "react-router-dom";

class Week_games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: {},
            loaded: false
        };
        this.sharedObj = props.sharedObj;
        this.hashLeague  = window.location.hash.split('/',3).pop();
        this.hashRound  = window.location.hash.split('/',5).pop();
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData() {
        this.fetchLeague(`http://localhost/index.php/api/league/` + this.hashLeague);
    }

    fetchLeague(input) {
        fetch(input)
            .then(res => res.json())
            .then(res => {
                this.fetchCompetitionRound(`http://localhost/index.php/api/fixture/?round=` + this.hashRound,res);
            })
    }

    fetchCompetitionRound(input,league) {
        fetch(input)
            .then(res => res.json())
            .then(res => {
                league.data = Object.values(res);
                this.setState({data:league});
                this.setState({loaded:true})
            })
    }

    renderGames = () => {
        console.log(this.state.data)
        this.sharedObj.headerInstance.setTitle(this.state.data.Competition);
        return <div>
            <div className='game-week'><span className='text14'>{'Matchday ' + this.hashRound}</span></div>
            {this.state.data.data.map((fixture) => <Link to={`/fixture/${fixture.id}`}> <MatchShort match={fixture}/></Link>)}
        </div>
    }

    render() {

        console.log(this.hashRound)
        console.log(this.state.data)
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
