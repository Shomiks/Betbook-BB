class APIHelper {
    userInfo = null;
    apiUrl = 'http://192.168.8.113';

    constructor(){}

    login = (username, password,login, callBack) => {
        fetch(this.apiUrl + `/index.php/api/user/?login=` + login + `&username=` + username + '&password=' + password)
            .then(res => res.json())
            .then(res => {
                callBack(res);
            })
    };

    user = {
        getUser: (user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/?id=` + user_id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => {
                    if(res){
                        this.userInfo = res;
                    }
                    callBack(res)
                })
        },
        favourite_team_leagues: (user_id,league_id) => {
            let data = {
                user_id: user_id,
                league_id: league_id
            };
            fetch(this.apiUrl + `/index.php/api/user_favourite_league/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        register : (username, password, email, user_fullname, country_id, team_id, callBack) => {
            let data = {
                username: username,
                email: email,
                password: password,
                full_name: user_fullname,
                country_id: country_id,
                team_id: team_id
            };
            fetch(this.apiUrl + `/index.php/api/user/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                    console.log(res)
                });
        },
        validateRegister: (username, email, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/?username=` + username + `&email=` + email)
                .then(res => res.json())
                .then(res => {
                      callBack(res);
                })
        },
        getAllUsers : (callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/?get_all=1`)
                .then(res => res.json())
                .then(res => {
                    callBack(res);
                })
        }
    };

    settings = {
        updateInfo: (user_id, country_id, team_id, name,callBack) =>{
           let data = {
                country_id: country_id,
                team_id: team_id,
                full_name:name
            };
            fetch(this.apiUrl + `/index.php/api/user/` + user_id,{
                method: 'PUT',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
                .then(res => callBack())
        }
    };

    teams = {
        getByCountryId : (country_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/team/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => {
                    callBack(res);
                })
        }
    };

    countries = {
        getAll: (callBack) => {
            fetch(this.apiUrl + `/index.php/api/country/?select=1`)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        },
        getAllCurrent: (callBack) => {
                fetch(this.apiUrl + `/index.php/api/country`)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        }
    };

    leagues = {
        getAll: (country_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/country/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        },
        getByID: (league_id,user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/?league_id=` + league_id + '&user_id=' + user_id)
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
        getByIDBided: (league_id,user_id,finished, callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/?league_id=` + league_id + '&user_id=' + user_id + '&finished=' + finished)
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
                    console.log(res)
                    callBack(res)
                })
        }
    };

    fixture = {
        getByID: (id,user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/fixture/?id=` + id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    let result = res;
                    console.log(result)
                    callBack(result)
                })
        }
    };

    home = {
    get_favourites : (user_id,callBack) => {
        fetch(this.apiUrl + `/index.php/api/user_favourite_league/?user_id=` + user_id)
            .then(res => res.json())
            .then(res => {
                let leagues = Object.values(res);
                callBack(leagues)
            })
     }
    };

    bids = {
        updateFixtureBids : (id,data) => {
            fetch(this.apiUrl + `/index.php/api/user_fixture_bid/` + id, {
                method: 'PUT',
                body: JSON.stringify(data.updated.ticket),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        createFixtureBids: (data,callBack) => {
            console.log(data)
            fetch(this.apiUrl + `/index.php/api/user_fixture_bid/`, {
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
            fetch(this.apiUrl + `/index.php/api/user_fixture_bid/` + id, {
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
            fetch(this.apiUrl + `/index.php/api/user_favourite_league/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        delete: (id) => {
            fetch(this.apiUrl + `/index.php/api/user_favourite_league/` + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
        })
                .then(res => res.json())
     }
    };

    statistics = {
        profileStats : (user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user_statistic/?user_id=` + user_id)
                .then(res => res.json())
                .then(res => {
                    callBack(res)
                })
        },
        gameStatistics : (game, user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user_statistic/?user_id=` + user_id + '&game=' + game)
                .then(res => res.json())
                .then(res => {
                    callBack(Object.values(res))
                })
        }
    }
}

window.apiHelper = new APIHelper();
