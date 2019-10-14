import React from 'react';
import '../../../style/components/objectcontrols/match_short.scss';
import '../../../style/betbook/home_screen.scss';
import {Link} from "react-router-dom";

class LeagueShort extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            remove:[],
            is_checked: props.user_favourite_league ? 'star_checked' : 'star'
        };
    }

    favouriteLeague = () => {
       return  <div className={this.state.is_checked} onClick={this.state.is_checked == 'star_checked' ? this.removeFavouriteLeague : this.addFavouriteLeague}>
           <svg className={this.state.is_checked} viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg" height='20px' stroke='white' width='20px' fill='none'>
            <path d="M19.2763 15.8151L26.5625 9.73236L17.985 9.12409C17.6776 9.09367 17.4009 8.91119 17.2779 8.63747L13.2812 0L9.28458 8.63747C9.1616
             8.91119 8.88491 9.09367 8.57747 9.12409L0 9.73236L7.28624 15.8151C7.53219 16.028 7.65516 16.3625 7.56293 16.6667L5.19567 25L12.8508 20.1034C13.1275
              19.9209 13.4965 19.9209 13.7731 20.1034L21.4283 25L19.0611 16.6363C18.9073 16.3625 19.0303 16.028 19.2763 15.8151Z"/>
        </svg></div>
    };

    addFavouriteLeague = () => {
       window.apiHelper.user.favourite_team_leagues(window.apiHelper.userInfo.id, this.props.id,()=>{});
        this.setState({is_checked: 'star_checked'})
    };

    removeFavouriteLeague = () => {
        window.apiHelper.favourites.getFavouriteByLeagueId(this.props.id, (res) => {
            window.apiHelper.favourites.delete(res['id'],() => {
            });
        });
        this.setState({is_checked: 'star'})
    };

    renderDate = (fixture) => {
        const date = fixture.date;
        const time = date.split(' ',2)[1];
        return time.split(':',3)[0] + ':' + time.split(':')[1];
    };

    render () {
        return <div className='favourite-league'>
            <div className='league'><Link to={`/league/${this.props.id}`}>
                <div className='league_name'>{this.props.name}</div>
            </Link>{this.favouriteLeague()}</div>
            {this.props.fixture.map(fixture => {
                return (<Link to={`/fixture/${fixture.id}`}>
                    <div className='fixture_box'>
                        <div className='fixture'>
                            <div className='team_home'>{fixture.team_home.name + ' ' + (fixture.result ? fixture.result.ft_home_goals : '')}</div>
                            <div className='team_away'>{fixture.team_away.name + ' ' + (fixture.result ? fixture.result.ft_away_goals : '')}</div>
                        </div>
                    <div className='time' key={fixture.id}>{this.renderDate(fixture)}</div>
                    </div>
                </Link>)
            })}
        </div>
    }

}

export default LeagueShort;
