import React from "react";
import {storiesOf} from "@storybook/react";
import {withSmartKnobs} from "storybook-addon-smart-knobs";
import {withKnobs, text, boolean, number} from "@storybook/addon-knobs";
import {MemoryRouter} from "react-router";
import TodayFixtures from "../js/screens/home/TodayFixtures";

const stories = storiesOf('home', module);

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
    .add('Today Fixtures', () => <TodayFixtures realData={data}/>);