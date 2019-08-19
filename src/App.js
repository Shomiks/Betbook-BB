import React from 'react';
import Login from './js/user/Login'
import Match_Details from './js/tickets/Match_Details'
import Home_Listing from './js/tickets/Home_Listing'

import './style/app.scss'
import Header from './js/components/header';
import Footer from './js/components/footer';
import Week_games_Listing from "./js/tickets/Week_games_Listing";
import Home_screen from "./js/tickets/home_screen";
import Profile_Tickets from "./js/tickets/Profile_Tickets";
import Competition_Listing from "./js/tickets/Competition_Listing";
import Week from "./js/components/week";
import {Route,HashRouter,Switch} from "react-router-dom";



class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      hash: window.location.hash,
      competition:null
    }

    window.addEventListener("hashchange", this.onHashChange);
  }


  onHashChange = () => {
    this.setState({hash: window.location.hash})
  }

  render(){

    let stepComponent = null;
    console.log(window.location.hash);

    const headerProps= {
      title: '',
      competition: false
    }

    if(this.state.hash == '#1'){
      return <div className='App'>
        <Login/>
      </div>;
    }
    else if(this.state.hash == '#2'){
      headerProps.title = 'Competitions';
      stepComponent = <Competition_Listing/>;
    }
    else if(this.state.hash == '#3'){
      headerProps.title='Home';
      stepComponent = <Home_screen/>;
    }
    else if(this.state.hash == '#/3'){
      headerProps.title='Home vs. Away';
      stepComponent = <Week_games_Listing />;
    }
    else if(this.state.hash == '#5'){
      headerProps.title='Competition name';
      headerProps.competition= true;
      stepComponent = <Week/>;
    }
    else if(this.state.hash == '#6'){
      return <div className='App'>
        <Profile_Tickets/>
      </div>
    }

    return (
        <div className='App'>
         {/* <HashRouter>*/}
         {/* <Switch>*/}
         {/*<Route exact path ="/" component = {Login}/>*/}
         {/*<Route exact path ="/2" component={Competition_Listing}/>*/}
         {/* </Switch>*/}
         {/* </HashRouter>*/}
        </div>
    );
  }
}

export default App;
