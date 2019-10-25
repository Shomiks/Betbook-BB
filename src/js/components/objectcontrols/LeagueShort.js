import {Link} from "react-router-dom";
import '../../../style/betbook/league_short.scss';
import React from "react";

function LeagueShort(props){
    return <>
    <Link to={`/league/${props.id}`} key={props.id + '_'}>
        <div className='league-field'>
            <div className='logo-container'>
                <img className='logo' src={'./assets/images/Logos/' + props.logo}/>
            </div>
            <div className='leagues-info'>
                <div className='dataname-info'><span className='text18-white'>{props.name}</span></div>
            </div>
        </div>
    </Link>
        </>
}

export default LeagueShort