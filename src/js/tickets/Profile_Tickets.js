import React from 'react';
import '../../../src/style/betbook/profile-tickets.scss';
import {Link} from "react-router-dom";
import Loader from "../components/other/Loader";


class Profile_Tickets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            statistics: null,
            statisticsCalculated: null,
            calculated: false,
            loaded: false,
            userid: props.match.params.userid ? props.match.params.userid : window.apiHelper.userInfo.id
        };

        this.sharedObj = props.sharedObj
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.sharedObj.footerInstance.setActive('profile');
        }, 1);

        this.sharedObj.apiHelper.statistics.profileStats(this.state.userid, (res) => {
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

        if (!res.numOfBets) {
            statistics = {
                game1_total: 0,
                game2_total: 0,
                game3_total: 0,
                game4_total: 0
            };
            statistics['country'] = res['country'];
            statistics['full_name'] = res['full_name'];
            statistics['username'] = res['username'];
        } else {
            this.calculateAvgAndSuccess(res, statisticsCalculated);
        }

        statisticsCalculated = this.checkBets(res, statisticsCalculated);
        this.setState({statistics, statisticsCalculated, loaded: true})
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
        if (!res.numOfBets || res.game1_total == 0 || res.game1_total_win == 0) {
            statisticsCalculated.game1_avg = '-';
            statisticsCalculated.game1_success = '-';
        }
        if (!res.numOfBets || res.game2_total == 0 || res.game2_total_win == 0) {
            statisticsCalculated.game2_avg = '-';
            statisticsCalculated.game2_success = '-';
        }
        if (!res.numOfBets || res.game3_total == 0 || res.game3_total_win == 0) {
            statisticsCalculated.game3_avg = '-';
            statisticsCalculated.game3_success = '-';
        }
        if (!res.numOfBets || res.game4_total == 0 || res.game4_total_win == 0) {
            statisticsCalculated.game4_avg = '-';
            statisticsCalculated.game4_success = '-';
        }
        return statisticsCalculated;
    };

    seeBets = () => {
        if (this.state.statistics && this.state.statistics.game1_total > 0) return <div className='pt_yellow-bet-box'>
            <span className='text11-white'>See bets>></span>
        </div>;
        else return null
    };

    render() {

        if (this.state.loaded) return (
            <div className='betbook_context'>
                <div className='pt_header-field'>
                    <div className='pt_header-central-field'>
                        <div className='first-row'>
                            <Link to={`/settings`}>
                                <div className='settings'/>
                            </Link>
                            <div className='pt_member-name'><span
                                className='text18-white'>{this.state.statistics.full_name ? this.state.statistics.full_name : window.apiHelper.userInfo.username}</span></div>
                            <Link to={`/search`}>
                                <div className='search'/>
                            </Link>
                        </div>
                        <div className='pt_country'><span
                            className='text11-white'>{this.state.statistics.country}</span></div>
                    </div>
                </div>
                <div className='scrolable-bids-field'>
                    <div className='full-time-statistics-field'>
                        <div className='main-title-field'>
                            {this.seeBets()}
                            <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span>
                                <div className='game-underline'/>
                            </div>
                        </div>
                        <Link to={this.state.statistics && this.state.statistics.game1_total != 0 ? `/game/1/` + this.state.userid : null}>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statistics && this.state.statistics.game1_total != 0 ? this.state.statistics.game1_total : '-'}</span>
                                    </div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game1_avg}</span>
                                    </div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game1_success}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='match-goals-statistics-field'>
                        <div className='main-title-field'>
                            {this.seeBets()}
                            <div className='ft_text_position'><span className='text12-grey'>Over/Under</span>
                                <div className='game-underline'/>
                            </div>

                        </div>
                        <Link to={this.state.statistics && this.state.statistics.game2_total != 0 ? `/game/2/` + this.state.userid : null}>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statistics && this.state.statistics.game2_total != 0 ? this.state.statistics.game2_total : '-'}</span>
                                    </div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game2_avg}</span>
                                    </div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game2_success}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='both-team-goal-statistics-field'>
                        <div className='main-title-field'>
                            {this.seeBets()}
                            <div className='ft_text_position'><span className='text12-grey'>Both Teams To Score</span>
                                <div className='game-underline'/>
                            </div>

                        </div>
                        <Link to={this.state.statistics && this.state.statistics.game3_total != 0 ? `/game/3/` + this.state.userid : null}>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statistics && this.state.statistics.game3_total != 0 ? this.state.statistics.game3_total : '-'}</span>
                                    </div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game3_avg}</span>
                                    </div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game3_success}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className='ht-ft-statistics-field'>
                        <div className='main-title-field'>
                            {this.seeBets()}
                            <div className='ft_text_position'><span className='text12-grey'>Half Time/Full Time</span>
                                <div className='game-underline'/>
                            </div>

                        </div>
                        <Link to={this.state.statistics && this.state.statistics.game4_total != 0 ? `/game/4/` + this.state.userid : null}>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statistics && this.state.statistics.game4_total != 0 ? this.state.statistics.game4_total : '-'}</span>
                                    </div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game4_avg}</span>
                                    </div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span
                                        className='text26-white'>{this.state.statisticsCalculated.game4_success}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        );
        else {
            return <Loader/>
        }
    }
}

export default Profile_Tickets;
