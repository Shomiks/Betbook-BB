import React from "react";
import PropTypes from "prop-types";
import './../../../../src/style/components/objectcontrols/dateresultfixtureshort.scss';

function DateResultFixtureShort(props) {

    return (<div className='ms-teams-field'>
        <div className='ms_homeField'>
            <img className='logo' src={props.fixture.team_home.logo ? './assets/images/Teams/'+props.fixture.team_home.logo : './assets/images/alternative-logo.png'} />
            <div className='ms_hometeam-text'><span className='text11-white'>{props.fixture.team_home.name}</span></div>
        </div>

        <div className='ms_resultField'>
            <span className={props.fixture.result && props.fixture.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{props.fixture.result ? props.fixture.result.ft_home_goals : ''}</span>
            <div className='ms_date'><span className='text11-white'> {!props.result ? props.renderDate : ':'} </span></div>
            <span className={props.fixture.result && props.fixture.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{props.fixture.result ? props.fixture.result.ft_away_goals : ''}</span>
        </div>
        <div className='ms_awayField'>
            <div className='ms_awayteam-text'><span className='text11-white'>{props.fixture.team_away.name}</span></div>
            <img className='logo' src={props.fixture.team_away.logo ? './assets/images/Teams/'+props.fixture.team_away.logo : './assets/images/alternative-logo.png'}/>
        </div>
    </div>)
}

DateResultFixtureShort.propTypes = {
  fixture: PropTypes.object
};

export default DateResultFixtureShort;