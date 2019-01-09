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
    render() {
        return (
            <div className="home">
                <OfferLeague />
            </div>
        );
    }
}

render(<App/>, document.getElementById('app'));
