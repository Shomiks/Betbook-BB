import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';

import SocialTimeline from './modules/socialTimeline/socialTimeline.component.js'
import SocialCommentOnPost from './modules/socialCommentOnPost/socialCommentOnPost.component.js'
import SocialNewPost from './modules/socialNewPost/socialNewPost.component.js'
import SocialNewPostTicket from './modules/socialNewPostTicket/socialNewPostTicket.component';
import SocialLeaderboards from './modules/socialLeaderboards/socialLeaderboards.component';
import BetSlip from './components/common/betSlip/betSlip.component';
import OfferGameDone from './modules/offerGameDone/offerGameDone.component';
import OfferLeague from './modules/offerLeague/offerLeague.component';
import OfferLevel from './components/common/offerLevel/offerLevel.component';
import ProfileFollowing from './modules/profileFollowing/profileFollowing.component';
import ProfilePosts from './modules/profilePosts/profilePosts.component';
import ProfileTickets from './modules/profileTickets/profileTickets.component';
import MyTickets from './modules/myTickets/myTickets.component';
import OfferSport from './modules/offerSport/offerSport.component';


class App extends React.Component {
    constructor(props) {
        window.addEventListener("hashchange", () => {
            this.forceUpdate();
        }, false);
        super();
    }

    render() {

        const hash = window.location.hash.replace('#','').toLocaleLowerCase();


        switch(hash){
            case 'offergamedone':
                return (
                    <div className="home">
                        <OfferGameDone />
                    </div>
                );
            case 'socialtimeline':
                return(
                    <div className="home">
                        <SocialTimeline />
                    </div>
                );
            case 'socialcommentonpost' :
                return(
                    <div className="home">
                        <SocialCommentOnPost />
                    </div>
                );
            case 'socialnewpost' :
                return(
                    <div className="home">
                        <SocialNewPost />
                    </div>
                );
            case 'socialnewpostticket' :
                return(
                    <div className="home">
                        <SocialNewPostTicket />
                    </div>
                );
            case 'socialleaderboards' :
                return(
                    <div className="home">
                        <SocialLeaderboards />
                    </div>
                );
            case 'betslip' : 
                return (
                   <div className="home">
                        <BetSlip />
                    </div> 
                );
            case 'offerleague' :
                return (
                    <div className="home">
                        <OfferLeague />
                    </div>
                );
            case 'offerlevel':
                return (
                    <div className="home">
                        <OfferLevel />
                    </div>
                );
            case 'profilefollowing' :
                return(
                    <div className="home">
                        <ProfileFollowing />
                    </div>
                );
            case 'profileposts':
                return (
                    <div className="home">
                        <ProfilePosts />
                    </div>
                );
            case 'profiletickets':
                return (
                    <div className="home">
                        <ProfileTickets />
                    </div>
                );
            case 'mytickets':
                return (
                    <div className="home">
                        <MyTickets />
                    </div>
                );
            case 'offersport':
                return (
                    <div className="home">
                        <OfferSport />
                    </div>
                );
            default:
                return (
                    <ul>
                        <li>
                            <a href='#offergamedone'>OfferGameDone</a>
                        </li>
                        <li>
                            <a href='#socialtimeline'>SocialTimeLine</a>
                        </li>
                        <li>
                            <a href='#socialcommentonpost'>SocialCommentOnPost</a>
                        </li>
                        <li>
                            <a href='#socialnewpost'>SocialNewPost</a>
                        </li>
                        <li>
                            <a href='#socialnewpostticket'>SocialNewPostTicket</a>
                        </li>
                        <li>
                            <a href='#socialleaderboards'>SocialLeaderboards</a>
                        </li>
                        <li>
                            <a href='#betslip'>BetSlip</a>
                        </li>
                        <li>
                            <a href='#offerleague'>OfferLeague</a>
                        </li>
                        <li>
                            <a href='#offerlevel'>OfferLevel</a>
                        </li>
                        <li>
                            <a href='#profilefollowing'>ProfileFollowing</a>
                        </li>
                        <li>
                            <a href='#profileposts'>ProfilePosts</a>
                        </li>
                        <li>
                            <a href='#profiletickets'>ProfileTickets</a>
                        </li>
                        <li>
                            <a href='#mytickets'>MyTickets</a>
                        </li>
                        <li>
                            <a href='#offersport'>OfferSport</a>
                        </li>
                    </ul>
                );
        }
    }
}

render(<App/>, document.getElementById('app'));
