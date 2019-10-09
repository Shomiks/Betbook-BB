import React from "react";

function DateResultFixtureShort(props) {

    return (<div className='ms-teams-field'>
        <div className='ms_homeField'>
            <img className='logo' src={props.match.team_home.logo ? './assets/images/Teams/'+props.match.team_home.logo : './assets/images/alternative-logo.png'} />
            <div className='ms_hometeam-text'><span className='text11-white'>{props.match.team_home.name}</span></div>
        </div>

        <div className='ms_resultField'>
            <span className={props.match.result && props.match.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{props.match.result ? props.match.result.ft_home_goals : ''}</span>
            <div className='ms_date'><span className='text11-white'> {!props.match.result ? props.renderDate : ':'} </span></div>
            <span className={props.match.result && props.match.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{props.match.result ? props.match.result.ft_away_goals : ''}</span>
        </div>
        <div className='ms_awayField'>
            <div className='ms_awayteam-text'><span className='text11-white'>{props.match.team_away.name}</span></div>
            <img className='logo' src={props.match.team_away.logo ? './assets/images/Teams/'+props.match.team_away.logo : './assets/images/alternative-logo.png'}/>
        </div>
    </div>)
}

export default DateResultFixtureShort;