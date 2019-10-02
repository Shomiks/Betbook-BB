import React from 'react';
import MatchShort from '../components/objectcontrols/Match_Short';
import {Link} from "react-router-dom";
import '../../style/betbook/week-games.scss';
import Loader from "../components/other/Loader";

class User_Game_Bids extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: [],
            loaded: false,
            game:props.match.params.gameid,
            user:props.match.params.userid


        };
        this.sharedObj = props.sharedObj;
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
        this.getGameWonStatistics();
    }

    getGameWonStatistics(){

        this.sharedObj.apiHelper.statistics.gameStatistics(this.state.game,this.state.user,(res)=> {
            this.sharedObj.footerInstance.setActive('profile');
            this.setState({realData: this.destructObject(res), loaded:true});
        })
    }

    destructObject = (res) => {
        let data = [];
        res.forEach(old => {
            if(old.fixture){
            let {fixture, ...ticket} = old;
            old['fixture']['ticket'] = ticket;
            data.push(old['fixture']);}
        });
        return data;
    };

    renderGames = () => {

            if(this.state.game == 1) this.sharedObj.headerInstance.setTitle('Match Outcome Bids');
            else if(this.state.game == 2) this.sharedObj.headerInstance.setTitle('Total Goals Bids');
            else if(this.state.game == 3) this.sharedObj.headerInstance.setTitle('Both Teams To Score Bids');
            else if(this.state.game == 4) this.sharedObj.headerInstance.setTitle('Half Time/Full Time Bids');

            return <>{this.state.realData.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                <MatchShort match={fixture}/></Link>)}</>
    };

    render() {

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

export default User_Game_Bids;
