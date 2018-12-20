import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';

import User from './components/User.jsx';
import Profile_Saved_Posts from './components/profile_saved_posts.js';
import Social_New_Post from './components/social_new_post.js';
import Offer_Level_4 from './components/offer_level_4.js';
import Ticket_Done from './components/ticket_done.js';
import Leaderboards from './components/leaderboards.js';
import Offer_Level_2 from './components/offer_level_2.js';
import Social_New_Post_Done from './components/social_new_post_done.js';
import Comment_On_Post from './components/comment_on_post.js';
import New_Post_Ticket from './components/new_post_ticket.js';
import Profile_Following from './components/profile_following.js';
import My_Tickets_Active from './components/my_tickets_active.js';
import Profile_Tickets from './components/profile_tickets.js';
import Profile_Posts from './components/profile_posts.js';
import Game_Selected from './components/game_selected.js';
import Bet_Slip from './components/bet_slip.js';

class App extends React.Component {
    render() {
        return (
            <div className="home">
            <Profile_Following></Profile_Following>
            </div>
        );
    }
}

// <Profile_Saved_Posts/> Done
// <Social_New_Post></Social_New_Post> Done
// <Offer_Level_4></Offer_Level_4> Done
// <Ticket_Done></Ticket_Done> Done
// <Leaderboards></Leaderboards> Done
// <Offer_Level_2></Offer_Level_2> Done
// <Social_New_Post_Done></Social_New_Post_Done> DONE
// <Comment_On_Post></Comment_On_Post> Done
// <New_Post_Ticket></New_Post_Ticket> Done
// <Profile_Following></Profile_Following> DONE
// <My_Tickets_Active></My_Tickets_Active> DONE
// <Profile_Tickets></Profile_Tickets> DONE
// <Game_Selected></Game_Selected> DONE

render(<App/>, document.getElementById('app'));
