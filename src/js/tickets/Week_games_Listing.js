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
            loaded: false,
            game:null
        };
        this.sharedObj = props.sharedObj;
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
        if ((window.location.hash.includes('game'))) {
            this.setState({game:window.location.hash.split('/')[2]});
            this.getGameWonStatistics();

        } else {
            if (window.location.hash.split('/')[3] != null) {
                this.getAllFixturesFinished();
            } else {
                this.getAllFixtures();
            }
        }
    }

    getAllFixtures(){
        this.sharedObj.apiHelper.leagues.getByID(this.leagudId,localStorage.getItem('user_id'),(res) =>{
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:res,loaded:true})});
    }

    getAllFixturesFinished(){
        let finished = 0;
        if(window.location.hash.split('/')[1] == 'finished') finished = 1;
        this.sharedObj.apiHelper.leagues.getByIDFinished(this.leagudId,localStorage.getItem('user_id'),finished,(res) =>{

            let data = {
                fixtures: [],
                userBids: [],
                league: res.league
            };

            if(res.fixtures)
            res.fixtures.forEach(fixture => {
                res.userBids.forEach(userbid => {
                    if(fixture.id == userbid.fixture_id){
                        data.fixtures.push(fixture);
                        data.userBids.push(userbid)
                    }
                })
            });
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:data,loaded:true})});
    }

    getGameWonStatistics(){
        this.sharedObj.apiHelper.statistics.gameStatistics(window.location.hash.split('/')[2],localStorage.getItem('user_id'),(res)=> {
            let data = {
                fixtures: []
            };
            res.forEach(fixture => {
                fixture['ticket'] = fixture['ticket']['0'];
                data.fixtures.push(fixture)
            });
            this.setState({realData: data, loaded:true})
        })
    }

    renderGames = () => {

        if(this.state.game){
            if(this.state.game == 1) this.sharedObj.headerInstance.setTitle('Match Outcome Bids');
            else if(this.state.game == 2) this.sharedObj.headerInstance.setTitle('Total Goals Bids');
            else if(this.state.game == 3) this.sharedObj.headerInstance.setTitle('Both Teams To Score Bids');
            else if(this.state.game == 4) this.sharedObj.headerInstance.setTitle('Half Time/Full Time Bids');

            return <>{this.state.realData.fixtures ? this.state.realData.fixtures.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                <MatchShort match={fixture}/></Link>) : null}</>
        }

        else if(this.state.realData.fixtures) {
            this.sharedObj.headerInstance.setTitle(this.state.realData.league.name);
            return <>
                {this.state.realData.fixtures.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                    <MatchShort match={fixture}/></Link>)}
            </>
        }

        else {
            this.sharedObj.headerInstance.setTitle(this.state.realData.league.name);
        }
    };

    render() {

        console.log(this.state.realData);

        if(this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    {this.renderGames()}
                </div>
            </div>
        );

        else {
            return <Loader/>
        }
    }
}

export default Week_games_Listing;
