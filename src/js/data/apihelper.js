import React from 'react'

const timeoutInterval = 0;

class APIHelper extends React.Component {
    constructor(props) {
        super(props);
    }

    login = (username, password,login, callBack) => {
        fetch(`http://192.168.8.113/index.php/api/user/?login=` + login + `&username=` + username + '&password=' + password)
            .then(res => res.json())
            .then(res => {
                callBack(res);
            })
    };

    register = {
        register : (username, password, email, country_id, team_id, callBack) => {
            let data = {
                username: username,
                email: email,
                password: password,
                country_id: country_id,
                team_id: team_id
            };
            fetch(`http://192.168.8.113/index.php/api/user/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => callBack(res))
        },
        validateRegister: (username, email, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/user/?username=` + username + `&email=` + email)
                .then(res => res.json())
                .then(res => {
                      callBack(res);
                })
        }
    };

    settings = {
        getUserCountryAndClubByID: (id,callBack) => {
            fetch(`http://192.168.8.113/index.php/api/user/?id=` + id)
                .then(res => res.json())
                .then(res => {
                    callBack(res);
                })
        },
        updateCountryAndTeam: (user_id, country_id, team_id) =>{
           let data = {
                country_id: country_id,
                team_id: team_id
            };
            fetch(`http://192.168.8.113/index.php/api/user/` + user_id,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        }
    };

    teams = {
        getByCountryId : (country_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/team/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => {
                    callBack(res);
                })
        }
    };

    countries = {
        getAll: (callBack) => {
            fetch(`http://192.168.8.113/index.php/api/country`)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        }
    };

    leagues = {
        getAll: (country_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/country/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        },
        getByID: (league_id,user_id, callBack) => {
            console.log(league_id,user_id)
            fetch(`http://192.168.8.113/index.php/api/league/?league_id=` + league_id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    const userBidsIndex = {};
                    if(res.userBids && res.userBids.length){
                        res.userBids.forEach(ub => {
                            userBidsIndex[ub.fixture_id] = ub;
                        })
                    }
                    if(res.fixtures && res.fixtures.length){
                        res.fixtures.forEach(fixture => {
                            if(userBidsIndex[fixture.id]){
                                fixture.ticket = userBidsIndex[fixture.id];
                            }
                            else{
                                fixture.ticket = null;
                            }
                        })
                    }
                    callBack(res)
                })
        },
        getByIDFinished: (league_id,user_id,finished, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/league/?league_id=` + league_id + '&user_id=' + user_id + '&finished=' + finished)
                .then(res => res.json())
                .then(res => {

                    const userBidsIndex = {};

                    if (res.userBids && res.userBids.length) {
                        res.userBids.forEach(ub => {
                            userBidsIndex[ub.fixture_id] = ub;
                        })
                    }

                    if (res.fixtures && res.fixtures.length) {
                        res.fixtures.forEach(fixture => {
                            if (userBidsIndex[fixture.id]) {
                                fixture.ticket = userBidsIndex[fixture.id];
                            } else {
                                fixture.ticket = null;
                            }
                        })
                    }
                    callBack(res)
                })
        }
    };

    fixture = {
        getByID: (id,user_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/fixture/?id=` + id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    let result = res;
                    console.log(result)
                    callBack(result)
                })
        }
    };

    home = (user_id,callBack) => {
        fetch(`http://192.168.8.113/index.php/api/user_favourite_league/?user_id=` + user_id)
            .then(res => res.json())
            .then(res => {
                let leagues = Object.values(res);
                callBack(leagues)
            })
    };

    bids = {
        updateFixtureBids : (id,data) => {
            fetch(`http://192.168.8.113/index.php/api/user_fixture_bid/` + id, {
                method: 'PUT',
                body: JSON.stringify(data.updated.ticket),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        createFixtureBids: (data,callBack) => {
            fetch(`http://192.168.8.113/index.php/api/user_fixture_bid/`, {
                method: 'POST',
                body: JSON.stringify(data.ticket),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => callBack(res))
        },
        deleteFixtureBid: (id) => {
            fetch(`http://192.168.8.113/index.php/api/user_fixture_bid/` + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
         }
    };

    favourites = {
        update: (user_id,league_id) => {
            let data = {
                user_id: user_id,
                league_id: league_id
            };
            fetch(`http://192.168.8.113/index.php/api/user_favourite_league/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        delete: (id) => {
            fetch(`http://192.168.8.113/index.php/api/user_favourite_league/` + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
                .then(res => res.json())
     }
    }
}

export default APIHelper