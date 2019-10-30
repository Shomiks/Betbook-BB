import React from 'react';
import '../../../style/components/objectcontrols/fixtureshortfixture.scss';
import PropTypes from "prop-types";

function FixtureShortFixtures(props){

    console.log(JSON.stringify(props));

    function handleStateField (tip) {
        let game = "game" + tip;

        if(!props.ticket || !props.ticket[game + '_tip']) return ' unbided';
        else{
            if(props.result){
                if(props.result.is_finished == 0) return ' bided';
                else{
                    if(props.result[game + '_' + props.ticket[game + '_tip']] == 1) return ' green';
                    else return ' red';
                }
            }
            else return ' bided';
        }
    }

    function renderDate () {
        let Datefields = props.date.split(' ')[0].split('-');
        let Timefields = props.date.split(' ')[1].split(':');
        let year = Datefields[0].substring(2,Datefields[0].length);

        return( Datefields[2] + '/' + Datefields[1] + '/' + year + ' ' + Timefields[0] + ':' +  Timefields[1]);
    }

    function parseTipGame2Row1 () {
        if(props.ticket.game2_tip == '2' || props.ticket.game2_tip == '1' || props.ticket.game2_tip == '3') return '0-';
    }

    function parseTipGame2Row2 () {
        if(props.ticket.game2_tip == '2ht') return '2+HT';
        if(props.ticket.game2_tip == '2ft') return '2+FT';
        if(props.ticket.game2_tip == '3ft') return '3+FT';
        if(props.ticket.game2_tip == '4ft') return '4+FT';
    }

    function parseTipGame4 () {
        let tip = props.ticket.game4_tip.toUpperCase();
        tip.split('');
        return tip[0] + '-' + tip[1];
    }

    function handleBidField () {

        return <div className={props ? 'ms-central-field' : 'ms-central-field yellow'}>
            <div className='ms-teams-field'>
                <div className='ms_homeField'>
                    <img className='logo' src={props.team_home.logo ? './assets/images/Teams/'+props.team_home.logo : './assets/images/alternative-logo.png'} />
                    <div className='ms_hometeam-text'><span className='text11-white'>{props.team_home.name}</span></div>
                </div>

                <div className='ms_resultField'>
                    <span className={props.result && props.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{props.result ? props.result.ft_home_goals : ''}</span>
                    <div className='ms_date'><span className='text11-white'> {!props.result ? renderDate() : ':'} </span></div>
                    <span className={props.result && props.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{props.result ? props.result.ft_away_goals : ''}</span>
                </div>
                <div className='ms_awayField'>
                    <div className='ms_awayteam-text'><span className='text11-white'>{props.team_away.name}</span></div>
                    <img className='logo' src={props.team_away.logo ? './assets/images/Teams/'+props.team_away.logo : './assets/images/alternative-logo.png'}/>
                </div>
            </div>
            <div className='ms-under-teams-field'>
                {!props.ticket ? (!props.result ? <div className='ms_not-bided-yellow'><span className='text11-white'>Make a bid</span></div> : <div/>)
                    : (
                        <div className='ms_bid-field'>
                            <div className={'ms_bid-box' + handleStateField(1)}>
                                <div className='ms_game-field'><span className='text11-grey'>{props.ticket.game1_tip ? props.ticket.game1_tip.toUpperCase() : ''}</span></div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.ticket.game1_odd}</span></div>
                            </div>
                            <div className={'ms_bid-box' + handleStateField(2)}>
                                <div className='ms_game-field'><span className='text11-grey'>{parseTipGame2Row1() == '0-' ? (parseTipGame2Row1() + props.ticket.game2_tip) : parseTipGame2Row2()}</span></div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.ticket.game2_odd}</span></div>
                            </div>
                            <div className={'ms_bid-box' + handleStateField(3)}>
                                <div className='ms_game-field'><span className='text11-grey'>{props.ticket.game3_tip == 'gg' ? 'GG' : 'GG3+'}</span></div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.ticket.game3_odd}</span></div>
                            </div>
                            <div className={'ms_bid-box' + handleStateField(4)}>
                                <div className='ms_game-field'><span className='text11-grey'>{props.ticket.game4_tip ? parseTipGame4() : ''}</span></div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.ticket.game4_odd}</span></div>
                            </div>
                        </div>)}
            </div>
        </div>
    }

    return <>{handleBidField()}</>

}

FixtureShortFixtures.propTypes = {
    ticket: PropTypes.object,
    team_home: PropTypes.object,
    team_away: PropTypes.object,
    result: PropTypes.object,
    date: PropTypes.string
};

export default FixtureShortFixtures;
