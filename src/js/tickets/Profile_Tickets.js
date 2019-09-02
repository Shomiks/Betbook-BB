import React from 'react';
import '../../../src/style/betbook/profile-tickets.scss';
import '../../../src/style/app.scss';


class Profile_Tickets extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }


    render() {


        return (
            <div className='betbook_screen'>
                <div className='pt_header-field'>
                    <div className='pt_header-central-field'>
                        <div className='pt_member-name'><span className='text18-white'>Alexander Shultz</span></div>
                        <div className='pt_country'><span className='text11-white'>Germany</span></div>
                        <div className='pt_image-field'><img src='./assets/images/profile_picture.png'/></div>
                    </div>
                </div>

                <div className='scrolable-bids-field'>
                    <div className='pt_statistics-text'><span className='text18-white'>Statistics</span></div>
                    <div className='full-time-result-field'>
                        <div className='main-titlle-field'>
                            <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span></div>
                            <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span></div>
                            <div className='game-underline'/></div>
                        <div className='md_bid-box'></div>
                    </div>
                    <div className='match-goals-field'>
                        <div className='main-titlle-field'>
                            <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span></div>
                            <div className='ft_text_position'><span className='text12-grey'>Match Goals</span></div>
                            <div className='game-underline'/>
                        </div>
                        <div className='md_bid-box'>

                        </div>
                        <div className='md_bid-box'>

                        </div>
                    </div>
                    <div className='both-teams-goals-field'>
                        <div className='main-titlle-field'>
                            <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span></div>
                            <div className='ft_text_position'><span className='text12-grey'>Both Team Goals</span>
                                <div className='game-underline'/>
                            </div>
                        </div>
                        <div className='md_bid-box'>
                        </div>
                    </div>
                    <div className='ht-ft-result-field'>
                        <div className='main-titlle-field'>
                            <div className='pt_yellow-bet-box'><span className='text11-white'>See bets>></span></div>
                            <div className='ft_text_position'><span
                                className='text12-grey'>Half / Full Time Result</span>
                                <div className='game-underline'/>
                            </div>
                        </div>
                        <div className='md_bid-box'>

                        </div>
                        <div className='md_bid-box'>

                        </div>
                        <div className='md_bid-box'>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile_Tickets;
