import React from 'react';
import MatchShort from '../components/match_short';
import {Link} from "react-router-dom";
import '../../style/betbook/week-games.scss';
import Loader from "../components/loader";

class Week_games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: [],
            loaded: false
        };
        this.sharedObj = props.sharedObj;
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
        if(window.location.hash.split('/')[3] != null){
            this.getAllFixturesFinished();
        }
        else {
            this.getAllFixtures();
        }
    }

    getAllFixtures(){
        this.sharedObj.apiHelper.leagues.getByID(this.leagudId,localStorage.getItem('user_id'),(res) =>{
            this.sharedObj.headerInstance.setItemRight('calendar');
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:res,loaded:true})});
    }

    getAllFixturesFinished(){
        this.sharedObj.apiHelper.leagues.getByIDFinished(this.leagudId,localStorage.getItem('user_id'),1,(res) =>{
            this.sharedObj.headerInstance.setItemRight('calendar');
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:res,loaded:true})});
    }

    renderGames = () => {
        this.sharedObj.headerInstance.setTitle(this.state.realData.league.name);
        if(this.state.realData.fixtures)
            return <>
            <div className='game-week'><span className='text11-grey'>Matchweek {this.state.realData.league.round ? (parseInt(this.state.realData.league.round.order) + 1) : 'unknown'}</span></div>
            {this.state.realData.fixtures.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}> <MatchShort  match={fixture}/></Link>)}
                </>
    };

    render() {

        console.log(this.state.realData)
        if(this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    {this.state.loaded ? this.renderGames() : <div>Loading ... </div>}
                </div>
            </div>
        );

        else {
            return <Loader/>
        }
    }
}

export default Week_games_Listing;
