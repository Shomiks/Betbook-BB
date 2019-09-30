import React from 'react';
import Login from './js/user/Login'
import './style/app.scss'
import Header from './js/components/header';
import Week_games_Listing from "./js/tickets/Week_games_Listing";
import Home_screen from "./js/tickets/home_screen";
import Competition_Listing from "./js/tickets/Competition_Listing";
import {Route, HashRouter, Redirect} from "react-router-dom";
import Match_Details from "./js/tickets/Match_Details";
import Footer from "./js/components/footer";
import LeaderBoards from "./js/tickets/LeaderBoards";
import Detailed_Competition_Listing from "./js/tickets/Detailed_Competition_Listing";
import Register from "./js/user/Register";
import LoadingScreen from "./js/user/LoadingScreen";
import AppHome from "./js/user/AppHome";
import ForgotPassword from "./js/user/ForgotPassword";
import Profile_Tickets from "./js/tickets/Profile_Tickets";
import Search from "./js/user/Search";
import Settings from "./js/user/Settings";
import FavoriteClub from "./js/user/FavoriteClub";
import User_Favourite_Leagues from "./js/user/User_Favourite_Leagues";
import Edit from "./js/user/Edit";
import Loader from "./js/components/loader";

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
        this.sharedObject = {
            apiHelper: window.apiHelper,
            headerInstance: null,
            footerInstance: null,
        };

        const userid = localStorage.getItem('user_id');
        const authenticated = userid != null;
        console.log(authenticated)

        if(userid){
            this.sharedObject.apiHelper.user.getUser(userid, () => {
                this.setState({authenticated, loaded:true});
            })
        }
        else{
            this.setState({loaded:true, authenticated});
        }
    }

    onHashChange = () => {
        this.setState({hash: window.location.hash})
    };

    render() {
        this.state.authenticated = localStorage.getItem('user_id') != null;

        if (this.state.loaded) {
            if(this.state.authenticated) {
                return (<div className='App'>
                    <HashRouter>

                        {window.location.hash == '#/login' || window.location.hash == '#/register' ? <Redirect to='/home'/> : ''}

                        {(window.location.hash == '#/login' || window.location.hash == '#/user' || window.location.hash == '#/forgot-password' || window.location.hash == '#/loading' || window.location.hash == '#/'
                            || window.location.hash == '#/welcome' || window.location.hash == '#/home' || window.location.hash == '#/favorite-club' || window.location.hash == '#/register'
                            || window.location.hash == '#/profile' || window.location.hash.includes('#/user/'))
                            ? <div/> : <Header ref={(instance) => {
                                this.sharedObject.headerInstance = instance
                            }}/>}

                        <Route path="/loading"
                               render={(props) => (<LoadingScreen sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/register"
                               render={(props) => (<Register sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/favorite-club"
                               render={(props) => (<FavoriteClub sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/login"
                               render={(props) => (<Login sharedObj={this.sharedObject} {...props}  />)}/>
                        <Route path="/forgot-password"
                               render={(props) => (<ForgotPassword sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/welcome"
                               render={(props) => (<AppHome sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/home"
                               render={(props) => (<Home_screen sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/user_favourites" render={(props) => (
                            <User_Favourite_Leagues sharedObj={this.sharedObject} {...props}/>)}/>

                        <Route path="/countries" render={(props) => (
                            <Competition_Listing key={'competition_current'}{...props}
                                                 sharedObj={this.sharedObject}/>)}/>
                        <Route path="/country/:countryid" render={(props) => (
                            <Detailed_Competition_Listing key={'competition_current'}
                                                          sharedObj={this.sharedObject} {...props}/>)}/>

                        <Route path="/league/:leagueid"
                               render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/finished/league/:leagueid"
                               render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)}/>

                        <Route path="/fixture/:fixtureid"
                               render={(props) => (<Match_Details sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/leaderboards"
                               render={(props) => (<LeaderBoards sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/profile"
                               render={(props) => (<Profile_Tickets sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/game/:gameid"
                               render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/settings"
                               render={(props) => (<Settings sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/search" render={(props) => (<Search sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/user/:userid" render={(props) => (<Profile_Tickets sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/edit" render={(props) => (<Edit sharedObj={this.sharedObject} {...props}/>)}/>


                        {(window.location.hash == '#/login' || window.location.hash == '#/user' || window.location.hash == '#/forgot-password' || window.location.hash == '#/loading'
                            || window.location.hash == '#/welcome' || window.location.hash == '#/favorite-club' || window.location.hash == '#/register')
                            ? <div/> : <Footer ref={(instance) => {
                                this.sharedObject.footerInstance = instance
                            }}/>}
                    </HashRouter>
                </div>);
            }
            else{
                return (
                    <HashRouter>
                        {window.location.hash != '#/register' ? <Route path="/" render={(props) => (<Login sharedObj={this.sharedObject} {...props}  />)}/> :
                            <Route path="/register" render={(props) => (<Register sharedObj={this.sharedObject} {...props}/>)}/>}

                    </HashRouter>
                );
            }
        } else {
            return <Loader/>
        }
    }
}

export default App;
