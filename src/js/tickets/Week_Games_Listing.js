import React from 'react';
import MatchShort from '../components/Match_Short';
import {Link} from "react-router-dom";
import '../../style/betbook/week-games.scss';
import Loader from "../components/Loader";

class Week_Games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: [],
            loaded: false,
            game:null,
        };
        this.sharedObj = props.sharedObj;
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
                this.getAllFixtures();
    }

    getAllFixtures(){
        this.sharedObj.apiHelper.leagues.getByID(this.leagudId,window.apiHelper.userInfo.id,(res) =>{
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:res,loaded:true})});
    }

    renderGames = () => {
            this.sharedObj.headerInstance.setTitle(this.state.realData.league.name);
            return <>
                {this.state.realData.fixtures.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                    <MatchShort match={fixture}/></Link>)}
            </>
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

export default Week_Games_Listing;
