import React from 'react';
import {storiesOf} from '@storybook/react';
import {withSmartKnobs} from 'storybook-addon-smart-knobs'
import {withKnobs, text, boolean, number} from '@storybook/addon-knobs';
import {MemoryRouter} from 'react-router';
import BidFieldsShort from "../js/components/objectcontrols/BidFieldsShort";
import LeagueShort from "../js/components/objectcontrols/LeagueShort";
import DateResultFixtureShort from "../js/components/objectcontrols/DateResultFixtureShort";
import FixtureShortBids from "../js/components/objectcontrols/FixtureShortBids";
import FixtureShortFixtures from "../js/components/objectcontrols/FixtureShortFixtures";
import ProfileGames from "../js/components/objectcontrols/ProfileGames";
import ProfileShort from "../js/components/objectcontrols/ProfileShort";

const stories = storiesOf('object controls', module);

stories
    .addDecorator(withSmartKnobs)
    .addDecorator(withKnobs)
    .addDecorator(story => (
        <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
    ));

const data = {
    "id": "59600",
    "mozzart_code": null,
    "date": "2019-10-23 18:00:00",
    "league_id": "1654",
    "team_home_id": "7125",
    "team_away_id": "7131",
    "game1_1": "1.37",
    "game1_x": "4.4",
    "game1_2": "8",
    "game2_1": "3.05",
    "game2_2": "1.76",
    "game2_3": "1.22",
    "game2_2ht": "2.85",
    "game2_2ft": "1.3",
    "game2_3ft": "1.95",
    "game2_4ft": "3.4",
    "game3_gg": "2.3",
    "game3_gg3p": "2.7",
    "game4_11": "2",
    "game4_1x": "22",
    "game4_12": "70",
    "game4_x1": "3.9",
    "game4_xx": "6",
    "game4_x2": "16",
    "game4_21": "28",
    "game4_2x": "22",
    "game4_22": "15",
    "api_fixture_id": "0",
    "finished": "0",
    "updated": "2019-10-22 09:02:15",
    "league": {
        "id": "1654",
        "country_id": "270",
        "name": "Ligue 1",
        "logo": "99.png",
        "mozzart_name": null,
        "livescore_name": null,
        "api_league_id": "893",
        "is_current": "1",
        "season": "2019",
        "season_start": "2019-08-15",
        "season_end": "2019-10-23",
        "fixtures_count": "3",
        "source": "api",
        "updated": "2019-10-22 09:02:16"
    },
    "result": null,
    "ticket": null,
    "team_home": {
        "id": "7125",
        "name": "MC Alger",
        "logo": "906.png",
        "country_id": "270",
        "mozzart_name": null,
        "livescore_name": null,
        "api_team_id": "906",
        "new_name": null,
        "source": "api",
        "updated": "2019-09-18 05:45:14"
    },
    "team_away": {
        "id": "7131",
        "name": "Hussein Dey",
        "logo": "913.png",
        "country_id": "270",
        "mozzart_name": "hussein",
        "livescore_name": null,
        "api_team_id": "913",
        "new_name": null,
        "source": "api",
        "updated": "2019-09-18 05:45:14"
    }
};

stories
    .add('Bid Field Short', () => <BidFieldsShort realData={data}/>);

const fixture = [{
    "id": "59466",
    "mozzart_code": null,
    "date": "2019-10-24 16:30:00",
    "league_id": "1296",
    "team_home_id": "6963",
    "team_away_id": "6995",
    "game1_1": "1.25",
    "game1_x": "5.2",
    "game1_2": "11",
    "game2_1": "3.5",
    "game2_2": "1.96",
    "game2_3": "1.33",
    "game2_2ht": "2.5",
    "game2_2ft": "1.25",
    "game2_3ft": "1.75",
    "game2_4ft": "2.8",
    "game3_gg": "2.5",
    "game3_gg3p": "2.85",
    "game4_11": "1.75",
    "game4_1x": "25",
    "game4_12": "70",
    "game4_x1": "3.7",
    "game4_xx": "7",
    "game4_x2": "22",
    "game4_21": "25",
    "game4_2x": "25",
    "game4_22": "20",
    "api_fixture_id": "0",
    "finished": "0",
    "updated": "2019-10-14 10:31:51",
    "team_home": {
        "id": "6963",
        "name": "Levski Sofia",
        "logo": "646.png",
        "country_id": "269",
        "mozzart_name": null,
        "livescore_name": null,
        "api_team_id": "646",
        "new_name": null,
        "source": "api",
        "updated": "2019-09-18 05:45:14"
    },
    "team_away": {
        "id": "6995",
        "name": "Dunav Ruse",
        "logo": "683.png",
        "country_id": "269",
        "mozzart_name": null,
        "livescore_name": null,
        "api_team_id": "683",
        "new_name": null,
        "source": "api",
        "updated": "2019-09-18 05:45:14"
    }
}];

stories
    .add('League Short', () => <LeagueShort fixture={fixture}/>);

stories
    .add('Date Result Fixture Short', () => <DateResultFixtureShort fixture={fixture[0]}/>);

stories
    .add('Fixture Short Bids', () => <FixtureShortBids fixture={fixture[0]}/>);

const fixturesWithTickets = {
    "id": "59262",
    "mozzart_code": null,
    "date": "2019-10-24 18:55:00",
    "league_id": "1279",
    "team_home_id": "6898",
    "team_away_id": "7695",
    "game1_1": "2.15",
    "game1_x": "3.25",
    "game1_2": "3.6",
    "game2_1": "2.95",
    "game2_2": "1.69",
    "game2_3": "1.22",
    "game2_2ht": "3.05",
    "game2_2ft": "1.35",
    "game2_3ft": "2.05",
    "game2_4ft": "3.8",
    "game3_gg": "1.92",
    "game3_gg3p": "2.55",
    "game4_11": "3.5",
    "game4_1x": "15",
    "game4_12": "40",
    "game4_x1": "5",
    "game4_xx": "5",
    "game4_x2": "9",
    "game4_21": "28",
    "game4_2x": "15",
    "game4_22": "5.6",
    "api_fixture_id": "0",
    "finished": "0",
    "updated": "2019-10-08 13:06:50",
    "league": {
        "id": "1279",
        "country_id": "249",
        "name": "Europa League",
        "logo": "137.png",
        "mozzart_name": "Qualification Europa League",
        "livescore_name": null,
        "api_league_id": "514",
        "is_current": "1",
        "season": "2019",
        "season_start": "2019-06-27",
        "season_end": "2019-12-12",
        "fixtures_count": "24",
        "source": "api",
        "updated": "2019-09-18 05:42:53"
    },
    "result": null,
    "ticket": {
        "id": "196",
        "user_id": "2",
        "fixture_id": "59262",
        "game1_odd": "2.15",
        "game2_odd": "1.69",
        "game3_odd": "0",
        "game4_odd": "0",
        "final_score": "0",
        "game1_tip": "1",
        "game2_tip": "2",
        "game3_tip": null,
        "game4_tip": null,
        "bid_score": "3.84",
        "league_id": "1279",
        "calculated": "0"
    },
    "team_home": {
        "id": "6898",
        "name": "Qarabag",
        "logo": "556.png",
        "country_id": "369",
        "mozzart_name": null,
        "livescore_name": null,
        "api_team_id": "556",
        "new_name": null,
        "source": "api",
        "updated": "2019-09-18 05:45:14"
    },
    "team_away": {
        "id": "7695",
        "name": "Apoel Nicosia",
        "logo": "2247.png",
        "country_id": "312",
        "mozzart_name": "apoel nicosia",
        "livescore_name": null,
        "api_team_id": "2247",
        "new_name": null,
        "source": "api",
        "updated": "2019-09-18 05:45:14"
    }
};

stories
    .add('Fixture Short Fixture', () => <FixtureShortFixtures {...fixturesWithTickets}/>);

const profileGames = {
    "Game": 1,
    "statistics": {
        "country": "Nigeria",
        "full_name": "Milos Djurkovic",
        "user_id": "2",
        "numOfBets": "28",
        "game1_total": "21",
        "game1_total_win": "10",
        "game1_sum": "28.080000042915344",
        "game2_total": "26",
        "game2_total_win": "11",
        "game2_sum": "26.580000042915344",
        "game3_total": "9",
        "game3_total_win": "7",
        "game3_sum": "13.74999988079071",
        "game4_total": "18",
        "game4_total_win": "9",
        "game4_sum": "44.700000047683716"
    },
    "statisticsCalculated": {
        "game1_avg": "2.81",
        "game1_success": "47.6%",
        "game2_avg": "2.42",
        "game2_success": "42.3%",
        "game3_avg": "1.96",
        "game3_success": "77.8%",
        "game4_avg": "4.97",
        "game4_success": "50.0%"
    },
    "calculated": false,
    "loaded": true,
    "userid": "2",
    "userFullName": "Milos Djurkovic",
    "country": null,
    "userCountry": "Nigeria"
};

stories
    .add('Profile Games', () => <ProfileGames {...profileGames}/>);

const profileShort = {
    "username": "duca",
    "id": "1",
    "country": {
        "id": "299",
        "name": "Serbia",
        "code": "RS",
        "flag": "rs.svg",
        "leagues_count": "0",
        "fixtures_count": "0",
        "updated": "2019-10-14 10:31:52"
    }
};

stories
    .add('Profile Short', () => <ProfileShort user={profileShort}/>);