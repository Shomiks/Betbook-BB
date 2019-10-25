import React from 'react';
import '../../../style/betbook/today_fixtures.scss';
import Loader from "../../components/other/Loader";
import FooterContainer from "../../components/containers/FooterContainer";
import LeagueShort from "../../components/objectcontrols/LeagueShort";
import FullContainer from "../../components/containers/FullContainer";
import searchSVG from '../../../style/betbook/assets/images/search---final.svg';
import calendarSVG from '../../../style/betbook/assets/images/ball.svg';

class TodayFixtures extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false,
            calendarVisible: false
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
            if (bid.fixture) {
                leagues.forEach(league => {
                    league.fixture.forEach(fixture => {
                        if (bid.fixture.id == fixture.id) {

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

    onTodayClick = () => {
        let today = new Date().toISOString().slice(0, 10);
        console.log(today);
    };

    render() {

        console.log(this.state.realData)
        let parentBox = null;
        let popupBox = null;
        let calendarEl = null;
        if (this.state.calendarVisible) {
            calendarEl = <div className='tf_calendar_box'></div>
            popupBox = <div className='tf_popup_box' onClick={this.onTodayClick}>Yesterday <br/> Today <br/> Tomorrow</div>;
            parentBox = <div className='tf_parent_calendar'>{calendarEl}{popupBox}</div>
        }

        if (this.state.loaded) return (
            <FullContainer footerProps={{activeItem: 'timeline'}} headerProps={{
                title: 'All Fixtures', rightIcon: calendarSVG, rightIconOnClick: () => {
                    this.setState({calendarVisible: true})
                }
            }}>
                {parentBox}
                <div className='main-content today_fixtures'>
                    <>
                        {this.state.realData.map((league, i) => {
                            return (<LeagueShort isChecked={league.user_favourite_league ? 'star star_checked' : 'star'}
                                                 onStarClick={(user_favourite_league) => this.onStarClick(league, i, user_favourite_league)} {...league}
                                                 key={league.id}/>)
                        })}</>
                </div>

            </FullContainer>
        );
        else return <Loader/>
    }
}

export default TodayFixtures;
