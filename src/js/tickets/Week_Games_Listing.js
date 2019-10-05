import React from 'react';
import MatchShort from '../components/objectcontrols/Match_Short';
import {Link} from "react-router-dom";
import '../../style/betbook/week-games.scss';
import Loader from "../components/other/Loader";
import FullContainer from "../components/containers/FullContainer";

class Week_Games_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: [],
            loaded: false,
            game:null,
        };
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
                this.getAllFixtures();
    }

    getAllFixtures(){
        window.apiHelper.leagues.getByID(this.leagudId,window.apiHelper.userInfo.id,(res) =>{
            this.setState({realData:res,loaded:true})});
    }

    renderGames = () => {
            return <>
                {this.state.realData.fixtures.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                    <MatchShort match={fixture}/></Link>)}
            </>
    };

    render() {

        if(this.state.loaded) return (
            <FullContainer footerProps={{activeItem: 'ball'}} headerProps={{title: this.state.realData.league.name}}>
                <div className='main-content'>
                    {this.renderGames()}
                </div>
            </FullContainer>
        );
        else {
            return <Loader/>
        }
    }
}

export default Week_Games_Listing;
