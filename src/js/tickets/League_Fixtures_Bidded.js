import React from 'react';
import MatchShort from '../components/objectcontrols/Match_Short';
import {Link} from "react-router-dom";
import '../../style/betbook/week-games.scss';
import Loader from "../components/other/Loader";
import FullContainer from "../components/containers/FullContainer";

class League_Fixtures_Bidded extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: [],
            loaded: false
        };
        this.leagudId = props.match.params.leagueid;
    }

    componentDidMount() {
                this.getAllFixturesBided();
            }

    getAllFixturesBided(){
        window.apiHelper.leagues.getByIDBided(this.leagudId,window.apiHelper.userInfo.id,1,(res) =>{
            let data = {
                fixtures: [],
                userBids: [],
                league: res.league
            };
            if(res.fixtures)
                res.fixtures.forEach(fixture => {
                    if(res.userBids)
                        res.userBids.forEach(userbid => {
                            if(fixture.id == userbid.fixture_id){
                                data.fixtures.push(fixture);
                                data.userBids.push(userbid)
                            }
                        })
                });
            this.setState({realData:data,loaded:true})});
    }

    renderGames = () => {
            return <>
                {this.state.realData.fixtures.map((fixture) => <Link to={`/fixture/${fixture.id}`} key={fixture.id}>
                    <MatchShort match={fixture}/></Link>)}
            </>
    };

    render() {

        if(this.state.loaded) return (
           <FullContainer  footerProps={{activeItem: 'ball'}} headerProps={{title: this.state.realData.league.name}}>
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

export default League_Fixtures_Bidded;
