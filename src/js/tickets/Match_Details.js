import React from 'react';
import '../../../src/style/betbook/matchdetails.scss';
import '../../../src/style/app.scss';
import Header from '../components/header';
import Footer from '../components/footer';

class Match_Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            competition: {
                id: 3,
                name: 'Prva Srpska Liga',
            },
            week: {
                id: 5,
                name: 'Kolo 3'
            },
            match: {
                id: 1,
                code: 1234,
                dateTime: "2019-08-13 15:00",
                playground: "Rajko Mitic",
                club_home: "Crvena Zvezda",
                home_logo: "https://ls.sportradar.com/ls/crest/big/5149.png",
                club_away: "Partizan",
                away_logo: "https://premierleague-static-files.s3.amazonaws.com/premierleague/badges/t216.png",
                game4_22: 1.5,
                game4_2x: 1.5,
                game4_21: 1.5,
                game4_x2: 1.5,
                game4_xx: 1.5,
                game4_x1: 1.5,
                game4_12: 1.5,
                game4_1x: 1.5,
                game4_11: 1.5,
                game3_gg3p: 1.5,
                game3_gg: 1.5,
                game2_4ft: 1.5,
                game2_3ft: 1.5,
                game2_2ft: 1.5,
                game2_2ht: 1.5,
                game2_3: 1.5,
                game2_2: 1.5,
                game2_1: 1.5,
                game1_2: 1.5,
                game1_x: 1.5,
                game1_1: 1.5,
                id_competition: 3,
                id_week: 7
            },
            results: {
                id: 5,
                match_id: 1,
                game1_1: false,
                game1_x: false,
                game1_2: true,
                game2_1: false,
                game2_2: false,
                game2_3: false,
                game2_2ht: true,
                game2_2ft: true,
                game2_3ft: true,
                game2_4ft: true,
                game3_gg: true,
                game3_gg3p: true,
                game4_22: false,
                game4_2x: false,
                game4_21: false,
                game4_x2: false,
                game4_xx: false,
                game4_x1: false,
                game4_12: true,
                game4_1x: false,
                game4_11: false,
                goals_home_ht: 2,
                goals_away_ht: 0,
                goals_home_ft: 2,
                goals_away_ft: 3,
                finished: false,
                current_min: 90,
            },
            ticket: {
                id: 16,
                user_id: 2,
                match_id: 1,
                game1_tip: "2",
                game2_tip: "2",
                game3_tip: "gg",
                game4_tip: "22",
                game1_odd: 1.5,
                game2_odd: 0,
                game3_odd: 1.5,
                game4_odd: 0,
                final_score: 3,
                bid_score: 6
            }
        };
    }
    renderGameTip = (label, game, tip, bidfield) => {
        let className = bidfield;
        if (this.state.results && this.state.results[game + '_' + tip]) {
            className += ' green';
        }
        if (this.state.ticket && this.state.ticket[game + '_tip'] == tip) {
            className += ' bided';
        }

        return <div className={className}>
            <div className='col-3_game-field'><span
                className='text12'>{label}</span></div>
            <div className='col-3_bid-field'><span
                className='text12'>{this.state.match[game + '_' + tip]}</span></div>
        </div>
    }

    render() {

        return (
            <div className='betbook_screen'>
                <div className='match-details-field'>
                    <div className='md_home-team-field'><img src={this.state.match.home_logo}/>
                        <div className='home-text-field'><span className='text18'>{this.state.match.club_home}</span>
                        </div>
                        <div className='place-field'><span className='text10'>1st place</span></div>
                    </div>
                    <div className='md_date-time-vs-field'>
                        <div className={this.state.results == null ? 'vs-datetime-field' : 'hidden'}><span
                            className='text18'>VS</span>
                        </div>
                        <div className={this.state.results != null ?
                            'vs-datetime-field-result' :
                            'hidden'}><span
                            className='text25'>{this.state.results != null ? this.state.results.goals_home : ""} : {this.state.results != null ? this.state.results.goals_away : ""}</span>
                        </div>
                        <div
                            className={(this.state.results != null && this.state.results.finished == false) ? 'minuteLive' : 'hidden'}><span
                            className={(this.state.results != null && this.state.results.finished == false) ? 'text18' : 'hidden'}>'{this.state.results.current_min}<br/><span
                            className='text18-red-field'>* LIVE *</span></span></div>
                        <div className='time-date-field'><span
                            className={(this.state.results != undefined && this.state.results.finished == true) ? 'text10' : 'hidden'}>{this.state.match.dateTime}</span>
                        </div>
                        <div className='location-field'><span className='text10'>{this.state.match.playground}</span>
                        </div>
                    </div>
                    <div className='md_away-team-field'>
                        <img src={this.state.match.away_logo}/>
                        <div className='home-text-field'><span
                            className='text18'>{this.state.match.club_away}</span></div>
                        <div className='place-field'><span
                            className='text10'>2nd place</span></div>
                    </div>
                </div>
                <div className='scrolable-bids-field'>
                    <div className='full-time-result-field'>
                        <div className='main-titlle-field'>
                            <div className='ft_text_position'><span className='text12'>Fulltime Result</span>
                            </div>
                        </div>
                        <div className='col-3-bid-field'>
                            {this.renderGameTip('1', 'game1', '1', 'bid-1-field')}
                            {this.renderGameTip('X', 'game1', 'x', 'bid-2-field')}
                            {this.renderGameTip('2', 'game1', '2', 'bid-1-field')}
                        </div>
                    </div>
                    <div className='match-goals-field'>
                        <div className='main-titlle-field'>
                            <div className='ft_text_position'><span className='text12'>Match Goals</span>
                            </div>
                        </div>
                        <div className='col-3-bid-field'>

                            {this.renderGameTip('0-1', 'game2', '1', 'bid-1-field')}
                            {this.renderGameTip('0-2', 'game2', '2', 'bid-2-field')}
                            {this.renderGameTip('0-3', 'game2', '3', 'bid-1-field')}
                        </div>
                        <div className='col-4-bid-field'>
                            {this.renderGameTip('2+HT', 'game2', '2ht', 'bid-1-field')}
                            {this.renderGameTip('2+FT', 'game2', '2ft', 'bid-2-field')}
                            {this.renderGameTip('3+FT', 'game2', '3ft', 'bid-3-field')}
                            {this.renderGameTip('4+FT', 'game2', '4ft', 'bid-1-field')}
                        </div>
                    </div>
                    <div className='both-teams-goals-field'>
                        <div className='main-titlle-field'>
                            <div className='ft_text_position'><span className='text12'>Both Team Goals</span>
                            </div>
                        </div>
                        <div className='col-2-bid-field'>
                            {this.renderGameTip('GG', 'game3', 'gg', 'bid-2-field')}
                            {this.renderGameTip('GG3+', 'game3', 'gg3p', 'bid-2-field')}
                        </div>
                    </div>
                    <div className='ht-ft-result-field'>
                        <div className='main-titlle-field'>
                            <div className='ft_text_position'><span className='text12'>Half / Full Time Result</span>
                            </div>
                        </div>
                        <div className='col-3-bid-field'>
                            {this.renderGameTip('1-1', 'game4', '11', 'bid-1-field')}
                            {this.renderGameTip('1-X', 'game4', '1x', 'bid-2-field')}
                            {this.renderGameTip('1-2', 'game4', '12', 'bid-1-field')}
                        </div>
                        <div className='col-3-bid-field'>
                            {this.renderGameTip('X-1', 'game4', 'x1', 'bid-1-field')}
                            {this.renderGameTip('X-X', 'game4', 'xx', 'bid-2-field')}
                            {this.renderGameTip('X-2', 'game4', 'x2', 'bid-1-field')}
                        </div>
                        <div className='col-3-bid-field'>
                            {this.renderGameTip('2-1', 'game4', '21', 'bid-1-field')}
                            {this.renderGameTip('2-X', 'game4', '2x', 'bid-2-field')}
                            {this.renderGameTip('2-2', 'game4', '22', 'bid-1-field')}
                        </div>
                    </div>
                </div>
                <div className='bet-slip-field-blue'>
                    <div className='bet-text-field'><span className='text14'>BIDS</span></div>
                    <div className='white-circle'>
                        <div className='number-played-games-field'/>
                    </div>
                </div>
            </div>
        )
    }

}

export default Match_Details;
