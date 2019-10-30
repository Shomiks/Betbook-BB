import React from 'react';
import '../../../style/betbook/today_fixtures.scss'
import LeagueShort from "./LeagueShort";
import FixtureShortFixtures from "./FixtureShortFixtures";

function LeagueHome(props) {

    console.log(JSON.stringify(props));

    //props.fixture.sort();

    // function favouriteLeague() {
    //     return <div className={props.isChecked}
    //                 onClick={props.isChecked == 'star_checked' ? removeFavouriteLeague : addFavouriteLeague}>
    //         <svg className={props.isChecked} viewBox="0 0 27 26" xmlns="http://www.w3.org/2000/svg" height='20px'
    //              stroke='white' width='20px' fill='none'>
    //             <path d="M19.2763 15.8151L26.5625 9.73236L17.985 9.12409C17.6776 9.09367 17.4009 8.91119 17.2779 8.63747L13.2812 0L9.28458 8.63747C9.1616
    //          8.91119 8.88491 9.09367 8.57747 9.12409L0 9.73236L7.28624 15.8151C7.53219 16.028 7.65516 16.3625 7.56293 16.6667L5.19567 25L12.8508 20.1034C13.1275
    //           19.9209 13.4965 19.9209 13.7731 20.1034L21.4283 25L19.0611 16.6363C18.9073 16.3625 19.0303 16.028 19.2763 15.8151Z"/>
    //         </svg>
    //     </div>
    // }
    //
    // function addFavouriteLeague() {
    //     window.apiHelper.user.favourite_team_leagues(window.apiHelper.userInfo.id, props.id, () => {
    //     });
    //     props.onStarClick();
    // }
    //
    // function removeFavouriteLeague() {
    //     window.apiHelper.favourites.getFavouriteByLeagueId(props.id, (res) => {
    //         window.apiHelper.favourites.delete(res['id']);
    //     });
    //     props.onStarClick();
    // }

    function renderTime(fixture) {
        const date = fixture.date;
        const time = date.split(' ', 2)[1];
        return time.split(':', 3)[0] + ':' + time.split(':')[1];
    }

    function renderResult(fixture) {
        if (fixture.finished) return fixture.result.status;
        else return fixture.result.elapsed;
    }

    return (<div className='favourite-league'>
       <LeagueShort {...props}/>
        {props.fixture.map(fixture => {
            if (!fixture.result || fixture.result.processed == 0) return (
                <FixtureShortFixtures {...fixture}/>
                )
        })}
    </div>)
}

export default LeagueHome;