import React from 'react';
import '../../../style/betbook/today_fixtures.scss';
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
            this.matchBids(res);
            this.sortLeagues(Object.values(res.leagues));
        })
    };

    sortFavs = (favs) => {
        favs.sort(function (a, b) {
            if (a.name.toLowerCase() < b.name.toLowerCase()) return 1;
            if (a.name.toLowerCase() > b.name.toLowerCase()) return -1;
            return 0;
        });
    };

    sortNonFavs = (leagues) => {
        leagues.sort(function (a, b) {
            if (a.name && a.name.toLowerCase() > b.name.toLowerCase()) return 1;
            if (a.name && a.name.toLowerCase() < b.name.toLowerCase()) return -1;
            return 0;
        });
    };

    matchBids = (res) => {
        let bids = Object.values(res.bids);
        let leagues = Object.values(res.leagues);
        bids.forEach(bid => {
            if(bid.fixture){
                leagues.forEach(league => {
                    league.fixture.forEach(fixture => {
                        if(bid.fixture.id == fixture.id){

                        }
                    })
                })
            }
        })
    };

    sortLeagues = (res) => {
        let fav_leagues = [];
        let nonfav_leagues = [];
        res.forEach(league => {
            if (league.user_favourite_league) {
                let exists = false;
                league.user_favourite_league.forEach(fav => {
                    if (fav.user_id == window.apiHelper.userInfo.id) {
                        league.user_favourite_league = fav;
                        fav_leagues.push(league);
                        exists = true;
                    }
                });
                if (exists == false) {
                    league.user_favourite_league = null;
                    nonfav_leagues.push(league);
                }
            } else nonfav_leagues.push(league);
        });
        this.sortFavs(fav_leagues);
        this.sortNonFavs(nonfav_leagues);
        let realData = fav_leagues.concat(nonfav_leagues);
        this.setState({loaded: true, realData})
    };

    onStarClick = (league, i, user_favourite_league) => {
        const realData = [...this.state.realData];
        if (league.user_favourite_league) {
            realData[i].user_favourite_league = null;
        } else {
            realData[i].user_favourite_league = {
                id: user_favourite_league,
                league_id: league.id,
                user_id: window.apiHelper.userInfo.id
            };
        }
        this.setState({realData})
    };



    render() {

        console.log(this.state.realData)

        if (this.state.loaded) return (
            <FooterContainer footerProps={{activeItem: 'timeline'}}>
                <div className='betbook-logo'/>
                <div className='main-content today_fixtures'>
                    <>
                        <div className='welcome-text'>All fixtures</div>
                        {this.state.realData.map((league, i) => {
                            return (<LeagueShort isChecked={league.user_favourite_league ? 'star star_checked' : 'star'}
                                                 onStarClick={(user_favourite_league) => this.onStarClick(league, i, user_favourite_league)} {...league}
                                                 key={league.id}/>)
                        })}</>
                </div>
            </FooterContainer>
        );
        else return <Loader/>
    }
}

export default TodayFixtures;
