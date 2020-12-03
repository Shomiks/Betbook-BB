import {Link} from "react-router-dom";
import React from "react";
import '../../../style/components/objectcontrols/profilegames.scss';
import PropTypes from 'prop-types';

function ProfileGames(props) {

    console.log(props)

    return  <><Link to={props.statistics && props.statistics.game1_total != 0 ? `/game/` + props.Game + '/' + props.userid : null}>
        <div className='pt_box'>
            <div className='pt_left-box'>
                <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                <div className='pt_down-number'><span
                    className='text26-white'>{props.statistics && props.statistics['game' + props.Game + '_total'] != 0 ? props.statistics['game' + props.Game + '_total'] : '-'}</span>
                </div>
            </div>
            <div className='pt_central-box'>
                <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                <div className='pt_down-number'><span
                    className='text26-white'>{props.statisticsCalculated['game' + props.Game + '_avg']}</span>
                </div>
            </div>
            <div className='pt_right-box'>
                <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                <div className='pt_down-number'><span
                    className='text26-white'>{props.statisticsCalculated['game' + props.Game + '_success']}</span>
                </div>
            </div>
        </div>
    </Link>
        </>
}

ProfileGames.propTypes = {
    Game: PropTypes.number,
    statistics: PropTypes.object,
    statisticsCalculated: PropTypes.object
};

export default ProfileGames;