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


        this.getAllFixtures();
    }

    getAllFixtures(){
        this.sharedObj.apiHelper.leagues.getByID(this.leagudId,localStorage.getItem('user_id'),(res) =>{
            this.sharedObj.headerInstance.setItemRight('calendar');
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:res,loaded:true})});
    }

    renderGames = () => {
        this.sharedObj.headerInstance.setTitle(this.state.realData.name);
        if(this.state.realData.matches)
            return <>
            <div className='game-week'><span className='text11-grey'>Matchweek {this.state.realData.order ? parseInt(this.state.realData.order) + 1 : 'unknown'}</span></div>
            {this.state.realData.matches.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}> <MatchShort  match={fixture}/></Link>)}
                </>
    };

    render() {

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
