class APIHelper {
    apiUrl = 'http://192.168.8.113';

    userInfo = null;

    constructor(){}

    login = (username, password,login, callBack) => {
        fetch(this.apiUrl + `/index.php/api/user/checkUser/?username=` + username + '&password=' + password)
            .then(res => res.json())
            .then(res => {
                if (res) {
                    localStorage.setItem('user_id', res.id);

                    callBack(true);
                } else {
                    callBack(false);
                }
            })
    };

    user = {
        getCurrentUserID: () => {
            return this.userInfo != null ? this.userInfo.id : window.localStorage.getItem('userID');
        },
        isAuthenticated: () => {
            return this.userInfo != null || window.localStorage.getItem('userID') != null;
        },
        getCurrentUser: (callBack) => {
            if(this.userInfo){
                setTimeout(()=>{
                    callBack(this.userInfo)
                }, 100)
            }
            else if(this.user.isAuthenticated()){
                this.user.getUser(this.user.getCurrentUserID(),(res)=>{
                    if(res){
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
                setTimeout(()=>{
                    callBack(false)
                }, 100)
            }
        },
        getUser: (user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/returnUser/?id=` + user_id, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(res => {
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
                .then(res => callBack(res))
        },
        validateRegister: (username, email, callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/checkEmail/?username=` + username + `&email=` + email)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getAllUsers : (callBack) => {
            fetch(this.apiUrl + `/index.php/api/user/getAllUsers`)
                .then(res => res.json())
                .then(res => callBack(res))
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
        getAll: (country_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/country/getById/?country_id=` + country_id)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getByID: (league_id,user_id, callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/?league_id=` + league_id + '&user_id=' + user_id)
                .then(res => res.json())
                .then(res => callBack(res))
        },
        getByIDBided: (league_id,user_id,finished, callBack) => {
            fetch(this.apiUrl + `/index.php/api/league/?league_id=` + league_id + '&user_id=' + user_id + '&finished=' + finished)
                .then(res => res.json())
                .then(res => {
                    res['fixtures'] = Object.values(res['fixtures']);
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
                .then(res => callBack(Object.values(res)))
        }
    }
}

window.apiHelper = new APIHelper();
