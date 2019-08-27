import React from 'react';
import Login from './js/user/Login'
import Match_Details from './js/tickets/Match_Details'
import Competition_Listing from './js/tickets/Competition_Listing'
import Ticket_Listing from './js/tickets/Ticket_Listing'
import Home_Listing from './js/tickets/Home_Listing'

import './style/app.scss'
import Header from './js/components/header';
import Footer from './js/components/footer';
import MatchShort from "./js/components/match_short";
import Week_games_Listing from "./js/tickets/Week_games_Listing";
import Home_screen from "./js/tickets/home_screen";
import Profile_Tickets from "./js/tickets/Profile_Tickets";
import LeaderBoards from "./js/tickets/LeaderBoards";


class App extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hash: window.location.hash
        }

        window.addEventListener("hashchange", this.onHashChange);
    }


    onHashChange = () => {
        this.setState({hash: window.location.hash})
    }

    render() {

        let stepComponent = null;
        console.log(window.location.hash)

        const headerProps = {
            title: '',
            competition: false
        }

        if (this.state.hash == '#1') {
            return <div className='App'>
                <Login/>
            </div>;
        } else if (this.state.hash == '#2') {
            headerProps.title = 'Competitions';
            stepComponent = <Home_Listing/>;
        } else if (this.state.hash == '#3') {
            headerProps.title = 'Home';
            stepComponent = <Home_screen/>;
        } else if (this.state.hash == '#4') {
            headerProps.title = 'Home vs. Away';
            stepComponent = <Match_Details/>;
        } else if (this.state.hash == '#5') {
            headerProps.title = 'Competition';
            headerProps.competition = true;
            stepComponent = <Week_games_Listing/>;
        } else if (this.state.hash == '#6') {
            return <div className='App'>
                <Profile_Tickets/>
                <Footer/>
            </div>;
        } else if (this.state.hash == '#7') {
            return <div className='App'>
                <LeaderBoards/>
                <Footer/>
            </div>;
        }

        return (
            <div className='App'>
                <Header title={headerProps.title} competition={headerProps.competition}/>
                <div className='main_content'>
                    {stepComponent}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default App;
