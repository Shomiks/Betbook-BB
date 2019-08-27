import React from 'react';
import Login from './js/user/Login'

import './style/app.scss'
import Header from './js/components/header';
import Week_games_Listing from "./js/tickets/Week_games_Listing";
import Home_screen from "./js/tickets/home_screen";
import Profile_Tickets from "./js/tickets/Profile_Tickets";
import Competition_Listing from "./js/tickets/Competition_Listing";
import Weeks from "./js/components/week";
import {Route,HashRouter} from "react-router-dom";
import APIHelper from "./js/data/apihelper";
import Match_Details from "./js/tickets/Match_Details";
import Footer from "./js/components/footer";
import LeaderBoards from "./js/tickets/LeaderBoards";

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
    this.fetchData(`http://localhost/index.php/api/fixture/213`)
  }

  fetchData(inputMatch){
    fetch(inputMatch)
        .then(res => res.json())
        .then(res =>{
          this.sharedObject = {
            apiHelper: new APIHelper(res),
            headerInstance: null
          };
          this.setState({data: res, loaded: true})
        })
  }

  onHashChange = () => {
    this.setState({hash: window.location.hash})
  }

  render(){
    console.log(this.sharedObject)
    let stepComponent = null;
    if(this.state.hash == '#1'){
      return <div className='App'>
        <Login/>
      </div>;
    }
    else if(this.state.hash == '#2'){
      stepComponent = <Competition_Listing/>;
    }
    else if(this.state.hash == '#3'){
      stepComponent = <Home_screen/>;
    }
    else if(this.state.hash == '#/3'){
      stepComponent = <Week_games_Listing />;
    }
    else if(this.state.hash == '#5'){
      stepComponent = <Weeks/>;
    }
    else if(this.state.hash == '#6'){
      return <div className='App'>
        <Profile_Tickets/>
      </div>
    }

       if(this.state.loaded){

         return (
             <div className='App'>

               {window.location.hash!='#/login' ? <Header ref={(instance) => {
                 this.sharedObject.headerInstance = instance}}  /> : <div></div>}

               <HashRouter>
                 <Route path="/login" render={(props) => (<Login sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/home" render={(props) => (<Home_screen sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/leagues" render={(props) => (<Competition_Listing key={'competition_current'} sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/leagues/:countryid" render={(props) => (<Competition_Listing key={'competition_' + props.match.params.countryid} sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/league/:leagueid/round/:roundid" render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/round/:roundid/league/:leagueid" render={(props) => (<Week_games_Listing sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/fixture/:fixtureid" render={(props) => (<Match_Details sharedObj={this.sharedObject} {...props}/>)} />
                 <Route path="/leaderboards" render={(props) => (<LeaderBoards sharedObj={this.sharedObject} {...props}/>)} />
               </HashRouter>
               <Footer/>
             </div>

         );
       }else{
         return(<div>Loading....</div>);
       }
       }

}

export default App;
