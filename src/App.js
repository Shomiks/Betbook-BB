import React from 'react';
import Login from './js/user/Login'
import './style/app.scss'
import Header from './js/components/menus/Header';
import Week_Games_Listing from "./js/tickets/Week_Games_Listing";
import Home_Screen from "./js/tickets/Home_Screen";
import Competition_Listing from "./js/tickets/Competition_Listing";
import {Route, HashRouter, Redirect} from "react-router-dom";
import Match_Details from "./js/tickets/Match_Details";
import Footer from "./js/components/menus/Footer";
import Leader_Boards from "./js/tickets/Leader_Boards";
import Detailed_Competition_Listing from "./js/tickets/Detailed_Competition_Listing";
import Register from "./js/user/Register";
import Forgot_Password from "./js/user/Forgot_Password";
import Search from "./js/user/Search";
import Settings from "./js/user/Settings";
import User_Favourite_Leagues from "./js/user/User_Favourite_Leagues";
import Edit from "./js/user/Edit";
import Loader from "./js/components/other/Loader";
// import League_Fixtures from "./js/tickets/League_Fixtures";
import League_Fixtures_Bidded from "./js/tickets/League_Fixtures_Bidded";
import User_Game_Bids from "./js/tickets/User_Game_Bids";
import Profile from "./js/tickets/Profile";
import FavouriteTeam from "./js/user/FavouriteTeam";
import Register2 from "./js/user/Register2";


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
            footerInstance: null
        };

        const userid = localStorage.getItem('user_id');
        const authenticated = userid != null;

        if(userid){
            this.sharedObject.apiHelper.user.getUser(userid, (res) => {
                if(res == false){
                    localStorage.clear();
                    window.location.reload();
                }
                else this.setState({authenticated, loaded:true});
            });
        }
        else{
            this.setState({loaded:true, authenticated});
            window.location.hash = '/login';
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

                        {(window.location.hash == '#/login' || window.location.hash == '#/forgot-password' || window.location.hash == '#/' || window.location.hash == '#/home'
                            || window.location.hash == '#/favorite-club' || window.location.hash == '#/register' || window.location.hash == '#/profile' || window.location.hash.includes('#/user/'))
                            ? <div/> : <Header ref={(instance) => {this.sharedObject.headerInstance = instance}}/>}

                        <Route path="/home" render={(props) => (<Home_Screen sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/user_favourites" render={(props) => (<User_Favourite_Leagues sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/countries" render={(props) => (<Competition_Listing key={'competition_current'}{...props} sharedObj={this.sharedObject}/>)}/>
                        <Route path="/country/:countryid" render={(props) => (<Detailed_Competition_Listing key={'competition_current'} sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/league/:leagueid" render={(props) => (<Week_Games_Listing sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/finished/league/:leagueid" render={(props) => (<League_Fixtures_Bidded sharedObj={this.sharedObject} {...props}/>)}/>

                        <Route path="/fixture/:fixtureid" render={(props) => (<Match_Details sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/leaderboards" render={(props) => (<Leader_Boards sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/profile" render={(props) => (<Profile sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/game/:gameid/:userid" render={(props) => (<User_Game_Bids sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/settings" render={(props) => (<Settings sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/search" render={(props) => (<Search sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/user/:userid" render={(props) => (<Profile sharedObj={this.sharedObject} {...props}/>)}/>
                        <Route path="/edit" render={(props) => (<Edit sharedObj={this.sharedObject} {...props}/>)}/>

                        {(window.location.hash == '#/login' || window.location.hash == '#/forgot-password' || window.location.hash == '#/welcome' || window.location.hash == '#/register')
                            ? <div/> : <Footer ref={(instance) => {this.sharedObject.footerInstance = instance}}/>}
                    </HashRouter>
                </div>);
            }
            else{
                return (
                    <HashRouter>
                        {window.location.hash != '#/register' ? <Route path="/" render={(props) => (<Login sharedObj={this.sharedObject} {...props}  />)}/> :
                            <Route path="/register" render={(props) => (<Register2 sharedObj={this.sharedObject} {...props}/>)}/>}
                    </HashRouter>
                );
            }
        } else {
            return <Loader/>
        }
    }
}

export default App;
