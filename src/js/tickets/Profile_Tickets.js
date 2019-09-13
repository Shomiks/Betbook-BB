import React from 'react';
import '../../../src/style/betbook/profile-tickets.scss';
import {Link} from "react-router-dom";
import Loader from "../components/loader";


class Profile_Tickets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            statistics: null,
            statisticsCalculated:null,
            calculated:false,
            loaded:false
        };
        this.sharedObj = props.sharedObj
    }

    componentDidMount = () => {
        setTimeout(() => {
            this.sharedObj.footerInstance.setActive('profile');
        },1);

        this.sharedObj.apiHelper.statistics.profileStats(localStorage.getItem('user_id'),(res) => {
            this.setState({statistics:res[0]});
            this.setState({statisticsCalculated:this.calculateStatistics(res[0])}, ()=>{
                this.setState({loaded:true})
            });
        });
    };

    calculateStatistics = (res) => {

        let statisticsCalculated = {
            game1_avg : 0,
            game1_success:0,
            game2_avg : 0,
            game2_success:0,
            game3_avg : 0,
            game3_success:0,
            game4_avg : 0,
            game4_success:0
    };

        if(!res){
            let statistics = {
            game1_total : 0,
           game2_total : 0,
           game3_total : 0,
            game4_total : 0
            };
            res = statistics;
            this.setState({statistics:res})
        }

        else {
            statisticsCalculated.game1_avg = (res.game1_sum / res.game1_total_win).toFixed(2);
            statisticsCalculated.game1_success = (res.game1_total_win / res.game1_total).toFixed(2) * 100 + '%';
            statisticsCalculated.game2_avg = (res.game2_sum / res.game2_total_win).toFixed(2);
            statisticsCalculated.game2_success = (res.game2_total_win / res.game2_total).toFixed(2) * 100 + '%';
            statisticsCalculated.game3_avg = (res.game3_sum / res.game3_total_win).toFixed(2);
            statisticsCalculated.game3_success = (res.game3_total_win / res.game3_total_win).toFixed(2) * 100 + '%';
            statisticsCalculated.game4_avg = (res.game4_sum / res.game4_total_win).toFixed(2);
            statisticsCalculated.game4_success = (res.game4_total_win / res.game4_total).toFixed(2) * 100 + '%';
        }

        if(res.game1_total == 0){
            statisticsCalculated.game1_avg = '-';
            statisticsCalculated.game1_success = '-';
        }
        if(res.game2_total == 0){
            statisticsCalculated.game2_avg = '-';
            statisticsCalculated.game2_success = '-';
        }
        if(res.game3_total == 0){
            statisticsCalculated.game3_avg = '-';
            statisticsCalculated.game3_success = '-';
        }
        if(res.game4_total == 0){
            statisticsCalculated.game4_avg = '-';
            statisticsCalculated.game4_success = '-';
        }

        return statisticsCalculated;
    };

    seeBets = (game) => {
       if(this.state.statistics.game1_total > 0) return <div className='pt_yellow-bet-box' ><Link to={`/game/` + game}><span className='text11-white'>See bets>></span></Link>
        </div>;
        else return null
    };

    render() {

       if(this.state.loaded) return (
            <div className='betbook_context'>
                    <div className='pt_header-field'>
                        <div className='pt_header-central-field'>
                            <div className='first-row'>
                                <Link to={`/settings`}><div className='settings'/></Link>
                            <div className='pt_member-name'><span className='text18-white'>Alexander Shultz</span></div>
                                <Link to={`/search`}><div className='search'/></Link>
                            </div>
                            <div className='pt_country'><span className='text11-white'>Germany</span></div>
                            <div className='pt_image-field'><img src='./assets/images/profile_picture.png' alt=''/></div>
                        </div>
                    </div>
                    <div className='scrolable-bids-field'>
                        <div className='full-time-statistics-field'>
                            <div className='main-titlle-field'>
                               {this.seeBets(1)}

                                <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statistics.game1_total != 0 ? this.state.statistics.game1_total : '-'}</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game1_avg}</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game1_success}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='match-goals-statistics-field'>
                            <div className='main-titlle-field'>
                              {this.seeBets(2)}
                                <div className='ft_text_position'><span className='text12-grey'>Over/Under</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statistics.game2_total != 0 ? this.state.statistics.game2_total : '-'}</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game2_avg}</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game2_success}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='both-team-goal-statistics-field'>
                            <div className='main-titlle-field'>
                               {this.seeBets(3)}
                                <div className='ft_text_position'><span className='text12-grey'>Both Teams To Score</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statistics.game3_total != 0 ? this.state.statistics.game3_total : '-'}</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game3_avg}</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game3_success}</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='ht-ft-statistics-field'>
                            <div className='main-titlle-field'>
                                {this.seeBets(4)}
                                <div className='ft_text_position'><span className='text12-grey'>Half Time/Full Time</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statistics.game4_total != 0 ? this.state.statistics.game4_total : '-'}</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game4_avg}</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>{this.state.statisticsCalculated.game4_success}</span></div>
                                </div>
                            </div>
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
