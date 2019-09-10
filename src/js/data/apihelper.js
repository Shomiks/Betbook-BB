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
            console.log(data)
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
        getSettings: (callBack) => {
            setTimeout(() => {
                callBack({firstname: 'teeeeest'});
            }, timeoutInterval);
        },
        setSettings: (username, email, callBack) => {
            setTimeout(() => {
                callBack({success: true});
            }, timeoutInterval);
        },
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
            fetch(`http://192.168.8.113/index.php/api/round/?league_id=` + league_id + '?user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    if(res['1']) {
                        if(res['1'].matches) {
                            let matches = Object.values(res['1'].matches);
                            matches.map(match => {
                                let user_ticket = null;
                               if(match.ticket) {
                                   Object.values(match.ticket).map(ticket => {
                                       if (ticket.user_id == user_id) user_ticket = ticket;
                                   });
                                     match.ticket = user_ticket;
                               }
                            });
                            res['1'].matches = matches;
                            callBack(res['1'])
                        }
                        else callBack(res['1'])
                    }
                    else {
                        if(res)
                        if(res['0'].matches) {
                            let matches = Object.values(res['0'].matches);
                            matches.map(match => {
                                let user_ticket = null;
                                if(match.ticket) {
                                    Object.values(match.ticket).map(ticket => {
                                        if (ticket.user_id == user_id) user_ticket = ticket;
                                    });
                                    match.ticket = user_ticket;
                                }
                            });
                            res['0'].matches = matches;
                            callBack(res['0'])
                        }
                        else callBack(res['0'])
                    }

                })
        }
    };

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
    };

    fixture = {
        getByID: (id,user_id, callBack) => {
            fetch(`http://192.168.8.113/index.php/api/fixture/?id=` + id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    let user_ticket = null;
                    if(res.ticket) Object.values(res.ticket).map(ticket => {
                        if(ticket.user_id == user_id) user_ticket = ticket;
                    });
                    if(user_ticket != null)  res.ticket = user_ticket;
                    callBack(res)
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