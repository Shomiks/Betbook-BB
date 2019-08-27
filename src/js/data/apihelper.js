import data from './data';
import React from 'react'
import dataCompetitions from "./dataCompetitions";
import hsData from "./hsData";

const timeoutInterval = 0;

class APIHelper extends React.Component {
    constructor(props) {
        super(props);
    }

    login = (username, password, callBack) => {
        setTimeout(() => {
            callBack({success: true});
        }, timeoutInterval);
    }

    register = (username, password, email, callBack) => {
        setTimeout(() => {
            callBack({success: true});
        }, timeoutInterval);
    }

    settings = {
        getSettings: (callBack) => {
            setTimeout(() => {
                callBack({firstname: 'teeeeest'});
            }, timeoutInterval);
        },
        setSettings: (username, email, callBack) => {
            setTimeout(() => {
                callBack({success: true});
            }, timeoutInterval);
        }
    }

    countries = {
        getAll: (callBack) => {
            fetch(`http://192.168.8.113/index.php/api/country`)
                .then(res => res.json())
                .then(res => {
                    let countries = Object.values(res);
                    callBack(countries)
                })
        }
    }

    leagues = {
        getAll: (country_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/league/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => {
                    let leagues = Object.values(res);
                    console.log('lige')
                    console.log(leagues)
                    callBack(leagues)
                })
        },
        getByID: (league_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/round/?league_id=` + league_id)
                .then(res => res.json())
                .then(res => {
                    let league = Object.values(res)
                    console.log('mecevi')
                    console.log(league)
                    callBack(league)
                })
        }
    }

    rounds = {
        getCurrentByLeagueID: (league_id,callBack) => {
            fetch(`http://192.168.8.113/index.php/api/rounds/?league_id=` + league_id)
                .then(res => res.json())
                .then(res => {
                    let rounds = Object.values(res);
                    console.log('runde')
                    console.log(rounds)
                    callBack(rounds)
                })
        },
        getByID: (round_id,callBack) => {
            fetch(`http://192.168.8.113/index.php/api/rounds/?id=` + round_id)
                .then(res => res.json())
                .then(res => {
                    let data = Object.values(res);
                    callBack(data)
                })
        }
    }

    fixture = {
        getByID: (id, callBack) => {
            setTimeout(() => {
                callBack(data[2]);
            }, timeoutInterval);
        }
    }

    home = (callBack) => {

    }

}

export default APIHelper