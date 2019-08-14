import React from 'react';
import '../../../src/style/betbook/week-games.scss';
import '../../../src/style/app.scss';
import MatchShort from '../components/match_short';

class Week_games_Listing extends React.Component {

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
                finished: true,
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
        }
    }


    render() {

        return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                    <div className='match-field'><MatchShort /></div>
                </div>
            </div>
        );
    }
}

export default Week_games_Listing;
