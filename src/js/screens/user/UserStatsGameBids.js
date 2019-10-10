import React from 'react';
import FixtureShort from '../../components/objectcontrols/FixtureShort';
import {Link} from "react-router-dom";
import '../../../style/betbook/week-games.scss';
import Loader from "../../components/other/Loader";
import FullContainer from "../../components/containers/FullContainer";

class UserStatsGameBids extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: [],
            loaded: false,
            title:null,
            game:props.match.params.gameid,
            user:props.match.params.userid
        };
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
        this.getGameWonStatistics();
    }

    getTitle = () => {
        switch (this.state.game) {
            case '1': return 'Match Outcome Bids';
            case '2': return 'Total Goals';
            case '3': return 'Both Teams To Score Bids';
            case '4': return 'Half Time/Full Time Bids';
        }
    };

    getGameWonStatistics(){
            window.apiHelper.statistics.gameStatistics(this.state.game,this.state.user,(res)=> {
            this.setState({realData: res, loaded:true});
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
                    return <>{this.state.realData.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                <FixtureShort match={fixture}/></Link>)}</>
    };

    render() {

        if(this.state.loaded) return (
           <FullContainer footerProps={{activeItem: 'profile'}} headerProps={{title: this.getTitle()}}>
                <div className='main-content'>
                    {this.renderGames()}
                </div>
           </FullContainer>
        );
        else return <Loader/>

    }
}

export default UserStatsGameBids;
