import React from 'react';
import MatchShort from '../components/objectcontrols/Match_Short';
import {Link} from "react-router-dom";
import '../../style/betbook/week-games.scss';
import Loader from "../components/other/Loader";

class League_Fixtures extends React.Component {

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
                this.getAllFixturesBided();
            }

    getAllFixturesBided(){
        let finished = 1;

        this.sharedObj.apiHelper.leagues.getByIDBided(this.leagudId,localStorage.getItem('user_id'),finished,(res) =>{
            let data = {
                fixtures: [],
                userBids: [],
                league: res.league
            };
            console.log(res)
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
            this.sharedObj.footerInstance.setActive('ball');
            this.setState({realData:data,loaded:true})});
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

export default League_Fixtures;
