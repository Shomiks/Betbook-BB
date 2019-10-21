class APIHelper {

    apiUrl = 'http://192.168.1.2';
    userInfo = null;

    constructor(){}

    login = (username, password, callBack) => {
        fetch(this.apiUrl + `/index.php/api/user/login/?username=` + username + '&password=' + password)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    localStorage.setItem('user_id', res.id);
                    callBack(true);
                } else callBack(false)
            })
    };

    user = {
        getCurrentUserID: () => {
            return (this.userInfo != null ? this.userInfo.id : window.localStorage.getItem('user_id'));
        },
        logout: () => {
            window.localStorage.clear();
            window.location.reload();
        },
        isAuthenticated: () => {
            return (this.userInfo != null || window.localStorage.getItem('user_id') != null);
        },
        getCurrentUser: (callBack) => {
            if(this.userInfo) {
                setTimeout(() => {
                    callBack(this.userInfo)
                }, 100)
            }
            else if(this.user.isAuthenticated()) {
                this.user.getUser(this.user.getCurrentUserID(),(res) => {
                    if(res) {
                        this.userInfo = res;
                        callBack(this.userInfo);
                    }
                    else{
                        localStorage.clear();
                        callBack(false);
                    }
                });
            }
            else{
                setTimeout(() => {
                    callBack(false);
                }, 100)
            }
        },
        getUser: (user_id, callBack) => {
            console.log(this.apiUrl)
            fetch(this.apiUrl + `/index.php/api/user/returnUser/?id=` + user_id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => callBack(res))
        },
        favourite_team_leagues: (user_id, league_id, callBack) => {
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
                .then(res => callBack(res))
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
            this.userInfo = data;
            fetch(this.apiUrl + `/index.php/api/user/`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => {
                    localStorage.setItem('user_id',res[0]);
                    callBack(res);
                })
        },
        validateRegister: (username, email, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/checkEmail/?username=` + username + `&email=` + email)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getAllUsers : (callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/`)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        forgotPassword: (email, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/forgotPassword/?email =` + email)
                .then(res => res.json())
                .then(res => callBack(res))
        }
    };

    settings = {
        updateInfo: (user_id, country_id, team_id, name, callBack) =>{
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
                .then(() => callBack())
        }
    };

    teams = {
        getByCountryId : (country_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/team/getAllTeams/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => callBack(res))
        }
    };

    countries = {
        getAll: (callBack) => {
            fetch(this.apiUrl + `/index.php/api/country/getAllCountries`)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getAllCurrent: (callBack) => {
            fetch(this.apiUrl + `/index.php/api/country/getAllWhereFixturesExist`)
                .then(res => res.json())
                .then(res => callBack(res))
        }
    };

    leagues = {
        getAll: (callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/todayFixtures/?user_id=` + this.userInfo.id)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getByCountryId: (country_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/country/getById/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getByID: (league_id,user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/leagueFixtures/?league_id=` + league_id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    if(res.bids) {
                        res.fixtures.forEach((fixture) => res.bids.forEach((bid) => {
                            if (bid.fixture_id == fixture.id) {
                                fixture['ticket'] = bid;
                            }
                        }));
                    }
                    callBack(res);
                })
        },
        getByIDBidded: (league_id,user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/finishedBiddedLeagueFixtures/?league_id=` + league_id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => {
                    if(!res.bids) res.bids = [];
                    callBack(res)
                })
        }
    };

    fixture = {
        getByID: (id,user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/fixture/?id=` + id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => callBack(res))
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
        delete: (id) => {
            fetch(this.apiUrl + `/index.php/api/user_favourite_league/` + id, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => res.json())
        },
        getFavourites : (user_id,callBack) => {
            fetch(this.apiUrl + `/index.php/api/user_favourite_league/?user_id=` + user_id)
                .then(res => res.json())
                .then(res => {
                    let leagues = Object.values(res);
                    callBack(leagues)
                })
        },
        getFavouriteByLeagueId: (league_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user_favourite_league/favouriteLeague/?user_id=` + this.userInfo.id + `&league_id=` + league_id)
                .then(res => res.json())
                .then(res => callBack(res))
        }
    };

    statistics = {
        profileStats : (user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user_statistic/profileStats/?user_id=` + user_id)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        gameStatistics : (game, user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user_statistic/statisticsByGame/?user_id=` + user_id + '&game=' + game)
                .then(res => res.json())
                .then(res => callBack(res))
        }
    }
}

window.apiHelper = new APIHelper();
