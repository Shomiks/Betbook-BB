import React from 'react'

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
                    callBack(leagues)
                })
        },
        getByID: (league_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/league/` + league_id)
                .then(res => res.json())
                .then(res => {
                    if(res) {
                        if(res['0'].matches) {
                            let matches = Object.values(res['0'].matches);
                            res['0'].matches = matches;
                            callBack(res['0'])
                        }
                        else callBack(res['0'])
                    }
                })
        }
    }

    rounds = {
        getCurrentByLeagueID: (league_id,callBack) => {
            fetch(`http://192.168.8.113/index.php/api/round/?league_id=` + league_id)
                .then(res => res.json())
                .then(res => {
                    let rounds = Object.values(res);
                    callBack(rounds)
                })
        },
        getByID: (round_id,callBack) => {
            fetch(`http://192.168.8.113/index.php/api/round/?id=` + round_id)
                .then(res => res.json())
                .then(res => {
                    let data = Object.values(res);
                    callBack(data)
                })
        }
    }

    fixture = {
        getByID: (id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/fixture/?id=` + id)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        }
    }

    home = (user_id,callBack) => {
        fetch(`http://192.168.8.113/index.php/api/user_favourite_league/?user_id=` + user_id)
            .then(res => res.json())
            .then(res => {
                let leagues = Object.values(res);
                callBack(leagues)
            })
    }

    bids = {
        updateGameBid : (id,data,callBack) => {
            // console.log(id,data)
            fetch(`http://localhost/index.php/api/user_fixture_bid/` + id, {
                method: 'PUT',
                mode:'cors',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                // .then(res => console.log(res))
        }
    }
}

export default APIHelper