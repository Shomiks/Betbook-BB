import React from 'react';
import Login from './js/user/Login'
import './style/app.scss'
import Header from './js/components/header';
import Week_games_Listing from "./js/tickets/Week_games_Listing";
import Home_screen from "./js/tickets/home_screen";
import Competition_Listing from "./js/tickets/Competition_Listing";
import {Route,HashRouter} from "react-router-dom";
import APIHelper from "./js/data/apihelper";
import Match_Details from "./js/tickets/Match_Details";
import Footer from "./js/components/footer";
import LeaderBoards from "./js/tickets/LeaderBoards";
import Detailed_Competition_Listing from "./js/tickets/Detailed_Competition_Listing";
import Register from "./js/user/Register";
import LoadingScreen from "./js/user/LoadingScreen";
import AppHome from "./js/user/AppHome";
import ForgotPassword from "./js/user/ForgotPassword";

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hash: window.location.hash,
      loaded:false
    };

    this.sharedObject = {};

    window.addEventListener("hashchange", this.onHashChange);
  }
  componentDidMount() {
      this.sharedObject = {
          apiHelper: new APIHelper(),
          headerInstance: null
      };
      this.setState({ loaded: true})
  }

  onHashChange = () => {
    this.setState({hash: window.location.hash})
  }

  render(){

       if(this.state.loaded){

         return (
             <div className='App'>

               {(window.location.hash=='#/login' || window.location.hash=='#/register' || window.location.hash=='#/forgot-password' || window.location.hash=='#/loading' || window.location.hash=='#/welcome')
                   ? <div></div> : <Header ref={(instance) => {
                 this.sharedObject.headerInstance = instance}}  />}

               <HashRouter>
                   <Route path="/login" render={(props) => (<Login sharedObj={this.sharedObject} {...props}  />)}/>
                   <Route path="/home" render={(props) => (<Home_screen sharedObj={this.sharedObject} {...props}/>)}/>


                   <Route path="/countries" render={(props) => (<Competition_Listing key={'competition_current'}{...props} sharedObj={this.sharedObject} />)}/>
                   <Route path="/country/:countryid" render={(props) => (<Detailed_Competition_Listing key={'competition_current'} sharedObj={this.sharedObject} {...props}/>)}/>


                   <Route path="/league/:leagueid" render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)}/>
                   <Route path="/round/:roundid" render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)}/>


                   <Route path="/fixture/:fixtureid" render={(props) => (<Match_Details sharedObj={this.sharedObject} {...props}/>)}/>
                   <Route path="/leaderboards" render={(props) => (<LeaderBoards sharedObj={this.sharedObject} {...props}/>)}/>

                 <Route path="/welcome" render={(props) => (<AppHome sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/loading" render={(props) => (<LoadingScreen sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/register" render={(props) => (<Register sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/login" render={(props) => (<Login sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/forgot-password" render={(props) => (<ForgotPassword sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/home" render={(props) => (<Home_screen sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/leagues" render={(props) => (<Competition_Listing key={'competition_current'} sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/leagues/:countryid" render={(props) => (<Competition_Listing key={'competition_' + props.match.params.countryid} sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/league/:leagueid/round/:roundid" render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/round/:roundid/league/:leagueid" render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/fixture/:fixtureid" render={(props) => (<Match_Details sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/leaderboards" render={(props) => (<LeaderBoards sharedObj={this.sharedObject} {...props}/>)} />
               </HashRouter>
               {(window.location.hash=='#/login' || window.location.hash=='#/register' || window.location.hash=='#/forgot-password' || window.location.hash=='#/loading' || window.location.hash=='#/welcome')
                   ? <div></div> : <Footer />}
             </div>

         );
       }else{
         return(<div>Loading....</div>);
       }
       }

}

export default App;
