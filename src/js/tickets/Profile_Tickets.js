import React from 'react';
import '../../../src/style/betbook/profile-tickets.scss';
import '../../../src/style/app.scss';
import {Link} from "react-router-dom";


class Profile_Tickets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}
    }

    render() {
        return (
            <div className='.betbook-context'>
                <div className='betbook_screen'>
                    <div className='pt_header-field'>
                        <div className='pt_header-central-field'>
                            <Link to={`/settings`}><div className='options'/></Link>
                            <div className='pt_member-name'><span className='text18-white'>Alexander Shultz</span></div>
                            <Link to={`/search`}><div className='search'/></Link>
                            <div className='pt_country'><span className='text11-white'>Germany</span></div>
                            <div className='pt_image-field'><img src='./assets/images/profile_picture.png'/></div>
                        </div>
                    </div>
                    <div className='scrolable-bids-field'>
                        <div className='pt_statistics-text'><span className='text18-white'>My statistics</span></div>
                        <div className='full-time-statistics-field'>
                            <div className='main-titlle-field'>
                                <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span>
                                </div>
                                <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>98</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>2.17</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>64%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='match-goals-statistics-field'>
                            <div className='main-titlle-field'>
                                <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span>
                                </div>
                                <div className='ft_text_position'><span className='text12-grey'>Over/Under</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>123</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>1.82</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>73%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='both-team-goal-statistics-field'>
                            <div className='main-titlle-field'>
                                <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span>
                                </div>
                                <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>98</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>2.17</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>64%</span></div>
                                </div>
                            </div>
                        </div>
                        <div className='ht-ft-statistics-field'>
                            <div className='main-titlle-field'>
                                <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span>
                                </div>
                                <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span>
                                    <div className='game-underline'/>
                                </div>

                            </div>
                            <div className='pt_box'>
                                <div className='pt_left-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>No. of bets</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>98</span></div>
                                </div>
                                <div className='pt_central-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Avg. odd</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>2.17</span></div>
                                </div>
                                <div className='pt_right-box'>
                                    <div className='pt_up-text'><span className='text12-grey'>Success rate</span></div>
                                    <div className='pt_down-number'><span className='text26-white'>64%</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile_Tickets;
