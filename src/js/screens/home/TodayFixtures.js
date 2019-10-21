import React from 'react'
import '../../../style/betbook/today_fixtures.scss'
import Loader from "../../components/other/Loader";
import FooterContainer from "../../components/containers/FooterContainer";
import LeagueShort from "../../components/objectcontrols/LeagueShort";

class TodayFixtures extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false,
        };
    }

    componentDidMount = () => {
        this.getAllFixtures();
    };

    getAllFixtures = () => {
        window.apiHelper.leagues.getAll((res) => {
            this.sortFavourites(Object.values(res));
        })
    };

    sortFavs = (favs) => {
        favs.sort(function (a,b) {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
        });
    };

    sortLeagues = (leagues) => {
        leagues.sort(function (a,b) {
            if(a.name > b.name) return 1;
            if(a.name < b.name) return -1;
            return 0;
        });
    };

    sortFavourites = (res) => {
        let fav_leagues = [];
        let leagues = [];
        res.forEach(league => {
            if(league.user_favourite_league) {
                let exists=false;
                league.user_favourite_league.forEach(fav => {
                    if (fav.user_id == window.apiHelper.userInfo.id) {
                        fav_leagues.push(league);
                        exists = true;
                    }
                });
                if(exists == false) {
                    league.user_favourite_league = null;
                    leagues.push(league);
                }
            }
            else leagues.push(league);
        });
        this.sortFavs(fav_leagues);
        this.sortLeagues(leagues);
        let realData = fav_leagues.concat(leagues);
        this.setState({loaded: true, realData})
    };

    onChange = (league, i, user_favourite_league) => {
        const realData = [...this.state.realData];
        if (league.user_favourite_league) {
            realData[i].user_favourite_league = null;
        } else {
            const fav_league = {
                id: user_favourite_league,
                league_id: league.id,
                user_id: window.apiHelper.userInfo.id
            };
            realData[i].user_favourite_league = fav_league;
        }
        this.setState({realData})
    };

    render() {
        if (this.state.loaded) return (
            <FooterContainer footerProps={{activeItem: 'timeline'}}>
                <div className='betbook-logo'/>
                <div className='main-content'>
                    <>
                        <div className='welcome-text'>All fixtures</div>
                        {this.state.realData.map((league, i) => {
                            return (<LeagueShort isChecked={league.user_favourite_league ? 'star_checked' : 'star'}
                                                 onChange={(user_favourite_league) => this.onChange(league, i, user_favourite_league)} {...league}
                                                 key={league.id}/>)
                        })}</>
                </div>
            </FooterContainer>
        );
        else return <Loader/>
    }
}

export default TodayFixtures;
