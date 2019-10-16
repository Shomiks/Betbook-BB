import React from 'react';
import '../../../style/betbook/profile-tickets.scss';
import Loader from "../../components/other/Loader";
import FullContainer from "../../components/containers/FullContainer";
import ProfileGames from "../../components/objectcontrols/ProfileGames";

class UserProfile extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            statistics: null,
            statisticsCalculated: null,
            calculated: false,
            loaded: false,
            userid: props.match.params.userid ? props.match.params.userid : window.apiHelper.userInfo.id,
            userFullName: null,
            country: null
        };
    }

    componentDidMount = () => {
           window.apiHelper.statistics.profileStats(this.state.userid, (res) => {
               console.log(res)
            this.calculateStatistics(res[0]);
        });
    };

    calculateStatistics = (res) => {

        let statistics = res;
        let statisticsCalculated = {
            game1_avg: 0,
            game1_success: 0,
            game2_avg: 0,
            game2_success: 0,
            game3_avg: 0,
            game3_success: 0,
            game4_avg: 0,
            game4_success: 0
        };

        if (!res || !res.numOfBets) {
            statistics = {
                game1_total: 0,
                game2_total: 0,
                game3_total: 0,
                game4_total: 0
            };
            console.log(res)
            statistics['country'] = res['country'];
            statistics['full_name'] = res['full_name'];
            statistics['username'] = res['username'];
        } else this.calculateAvgAndSuccess(res, statisticsCalculated);

        statisticsCalculated = this.checkBets(res, statisticsCalculated);
        this.setState({statistics, statisticsCalculated, loaded: true, userFullName:statistics['full_name'], userCountry:statistics['country']})
    };

    calculateAvgAndSuccess = (res, statisticsCalculated) => {
        statisticsCalculated.game1_avg = (res.game1_sum / res.game1_total_win).toFixed(2);
        statisticsCalculated.game1_success = ((res.game1_total_win / res.game1_total) * 100).toFixed(1) + '%';
        statisticsCalculated.game2_avg = (res.game2_sum / res.game2_total_win).toFixed(2);
        statisticsCalculated.game2_success = ((res.game2_total_win / res.game2_total) * 100).toFixed(1) + '%';
        statisticsCalculated.game3_avg = (res.game3_sum / res.game3_total_win).toFixed(2);
        statisticsCalculated.game3_success = ((res.game3_total_win / res.game3_total) * 100).toFixed(1) + '%';
        statisticsCalculated.game4_avg = (res.game4_sum / res.game4_total_win).toFixed(2);
        statisticsCalculated.game4_success = ((res.game4_total_win / res.game4_total) * 100).toFixed(1) + '%';
        return statisticsCalculated;
    };

    checkBets = (res, statisticsCalculated) => {
        if (!res.game1_total_win || res.game1_total_win == 0) {
            statisticsCalculated.game1_avg = '-';
            statisticsCalculated.game1_success = '-';
        }
        if (!res.game2_total_win || res.game2_total_win == 0) {
            statisticsCalculated.game2_avg = '-';
            statisticsCalculated.game2_success = '-';
        }
        if (!res.game3_total_win || res.game3_total_win == 0) {
            statisticsCalculated.game3_avg = '-';
            statisticsCalculated.game3_success = '-';
        }
        if (!res.game4_total_win || res.game4_total_win == 0) {
            statisticsCalculated.game4_avg = '-';
            statisticsCalculated.game4_success = '-';
        }
        return statisticsCalculated;
    };

    seeBets = (gameNumber) => {
        let game = 'game' + gameNumber + '_total';
        if (this.state.statistics && this.state.statistics[game] > 0) return <div className='pt_yellow-bet-box'>
            <span className='text11-white'>See bets>></span>
        </div>;
        else return null
    };

    renderFields = (fieldName, game) => {
        let gameName = null;
        if(game == 1) gameName = 'Match Outcome';
        else if (game == 2) gameName = 'Total Goals';
        else if (game == 3) gameName = 'Both Teams Goals';
        else gameName = 'Halftime/Fulltime';
        return <div className={fieldName}>
            <div className='main-title-field'>
                {this.seeBets(game)}
                <div className='ft_text_position'><span className='text12-grey'>{gameName}</span>
                    <div className='game-underline'/>
                </div>
            </div>
            <ProfileGames Game={game} {...this.state}/>
        </div>
    };

    render() {

        if (this.state.loaded) return (
            <FullContainer  footerProps={{activeItem: 'profile'}} headerProps={{itemLeft:'settings', itemRight: 'search', title: this.state.statistics.full_name, subtitle: this.state.statistics.country}}>
                <div className='betbook_context'>
                <div className='scrolable-bids-field'>
                    {this.renderFields('full-time-statistics-field', 1)}
                    {this.renderFields('match-goals-statistics-field', 2)}
                    {this.renderFields('both-team-goal-statistics-field', 3)}
                    {this.renderFields('ht-ft-statistics-field', 4)}
                </div>
                </div>
            </FullContainer>
        );
        else {
            return <Loader/>
        }
    }
}

export default UserProfile;
