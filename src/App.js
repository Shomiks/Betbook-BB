import React from 'react';
import Login from './js/screens/visitor/Login'
import './style/app.scss'
import LeagueFixtures from "./js/screens/fixtures/LeagueFixtures";
import HomeScreen from "./js/screens/home/HomeScreen";
import CountryListing from "./js/screens/fixtures/CountryListing";
import {Route, HashRouter, Redirect} from "react-router-dom";
import FixtureDetails from "./js/screens/fixtures/FixtureDetails";
import CountryLeagues from "./js/screens/fixtures/CountryLeagues";
import UserSearch from "./js/screens/user/UserSearch";
import UserSettings from "./js/screens/user/UserSettings";
import UserFavouriteLeagues from "./js/screens/user/UserFavouriteLeagues";
import Edit from "./js/screens/user/UserEdit";
import Loader from "./js/components/other/Loader";
import UserLeaguesBids from "./js/screens/home/UserLeaguesBids";
import UserStatsGameBids from "./js/screens/user/UserStatsGameBids";
import Profile from "./js/screens/user/Profile";
import Register from "./js/screens/visitor/Register";
import ForgotPassword from "./js/screens/visitor/ForgotPassword";


require("./js/data/apihelper");

class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: window.location.hash,
            loaded: false,
            authenticated: false
        };
        this.sharedObject = {};

        window.addEventListener("hashchange", this.onHashChange);
    }

    componentDidMount() {
        if(window.apiHelper.user.isAuthenticated()){
           window.apiHelper.user.getCurrentUser((res) => {
                if(res == false){
                    window.location.hash = '/login';
                }
                else{
                    window.location.hash = '/home';
                    this.setState({loaded:true});
                }
            });
        }
        else{
            window.location.hash = '/login';
            this.setState({loaded:true});
        }
    }

    onHashChange = () => {
        this.setState({hash: window.location.hash})
    };

    render() {

        if (this.state.loaded) {
            if(window.apiHelper.user.isAuthenticated()) {
                return (<div className='App'>
                    <HashRouter>
                        <Route path="/home" render={(props) => (<HomeScreen sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/user_favourites" render={(props) => (<UserFavouriteLeagues sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/countries" render={(props) => (<CountryListing key={'competition_current'}{...props} sharedObj={this.sharedObject}/>)}/>
                        <Route path="/country/:countryid" render={(props) => (<CountryLeagues key={'competition_current'} sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/league/:leagueid" render={(props) => (<LeagueFixtures sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/finished/league/:leagueid" render={(props) => (<UserLeaguesBids sharedObj={this.sharedObject} {...props}/>)}/>

                        <Route path="/fixture/:fixtureid" render={(props) => (<FixtureDetails sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/profile" render={(props) => (<Profile sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/game/:gameid/:userid" render={(props) => (<UserStatsGameBids sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/settings" render={(props) => (<UserSettings sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/search" render={(props) => (<UserSearch sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/user/:userid" render={(props) => (<Profile sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/edit" render={(props) => (<Edit sharedObj={this.sharedObject} {...props}/>)}/>
                    </HashRouter>
                </div>);
            }
            else{
                return (
                    <HashRouter>
                        <Route path="/register" render={(props) => (<Register sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/login" render={(props) => (<Login sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/forgot-password" render={(props) => (<ForgotPassword {...props} sharedObj={this.sharedObject}/>)}/>
                    </HashRouter>
                );
            }
        } else {
            return <Loader/>
        }
    }
}

export default App;
