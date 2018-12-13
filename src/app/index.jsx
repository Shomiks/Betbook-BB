import React from 'react';
import {render} from 'react-dom';

import './../scss/main.scss';

import User from './components/User.jsx';
import Profile_Saved_Posts from './components/profile_saved_posts.js';
import Social_New_post from './components/social_new_post.js';
import Offer_Level_4 from './components/offer_level_4.js';
import Ticket_Done from './components/ticket_done.js';
import Leaderboards from './components/leaderboards.js';
import Offer_Level_2 from './components/offer_level_2.js';

class App extends React.Component {
    render() {
        return (
            <div className="home">
                <Profile_Saved_Posts />
            </div>
        );
    }
}

// <Profile_Saved_Posts/> Done
// <Social_New_post></Social_New_post> Done
// <Offer_Level_4></Offer_Level_4> Done
// <Ticket_Done></Ticket_Done> Done
// <Leaderboards></Leaderboards> Done
// <Offer_Level_2></Offer_Level_2> Done

render(<App/>, document.getElementById('app'));
