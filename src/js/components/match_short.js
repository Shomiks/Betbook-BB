import React from 'react';
import '../../style/betbook/components/match_short.scss';

class MatchShort extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            game: 1,
        }
    }

    render() {
        if (this.state.game == 1) {
            return (
                <div>
                    <div className='ms-left-field'>
                        <div className='ms_date-field'><span
                            className='text10'>12.08.2079.</span></div>
                        <div className='ms_time-field'><span
                            className='text10'>15:15</span></div>
                        <div className='ms_status-field'><span
                            className='text12'>Upcoming</span></div>
                    </div>
                    <div className='ms-central-field'>
                        <div className='ms_homeField'><span className='text14'>Home</span>
                        </div>
                        <div className='ms_resultField'><span
                            className='text14'>_</span><span className='text14'> : </span><span
                            className='text14'>_</span></div>
                        <div className='ms_awayField'><span className='text14'>Away</span>
                        </div>
                        <div className='ms-under-teams-field'>
                            <div className='ms_bid-field'>
                                <div className='ms_bid-left-white-field'><span className='text12'>Final Result</span></div>
                                <div className='ms_bid-central-white-field'><span className='text12'>Match Goals</span></div>
                                <div className='ms_bid-central-white-field'><span className='text12'>Both Team</span></div>
                                <div className='ms_bid-right-white-field'><span className='text12'>HT/FT Result</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.game == 2) {
            return (
                <div>
                    <div className='ms-left-field'>
                        <div className='ms_date-field'><span
                            className='text10'>12.08.2079.</span></div>
                        <div className='ms_time-field'><span
                            className='text10'>15:15</span></div>
                        <div className='ms_status-field'><span
                            className='text12'>Upcoming</span></div>
                    </div>
                    <div className='ms-central-field'>
                        <div className='ms_homeField'><span className='text14'>Home</span>
                        </div>
                        <div className='ms_resultField'><span
                            className='text14'>_</span><span className='text14'> : </span><span
                            className='text14'>_</span></div>
                        <div className='ms_awayField'><span className='text14'>Away</span>
                        </div>
                        <div className='ms-under-teams-field'>
                            <div className='ms_bid-field'>
                                <div className='ms_bid-left'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>2.50</span></div>
                                </div>
                                <div className='ms_bid-central'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>0-1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>1.50</span></div>
                                </div>
                                <div className='ms_bid-central'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>gg3+</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>4.50</span></div>
                                </div>
                                <div className='ms_bid-right'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>x-x</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>6.50</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.game == 4) {
            return (
                <div>
                    <div className='ms-left-field'>
                        <div className='ms_date-field'><span
                            className='text10'>started 15:15h</span></div>
                        <div className='ms_time-field'><span
                            className='text12'>'79:16</span></div>
                        <div className='ms_status-field'><span
                            className='text12-red'>* Live *</span></div>
                    </div>
                    <div className='ms-central-field'>
                        <div className='ms_homeField'><span className='text14'>Home</span>
                        </div>
                        <div className='ms_resultField'><span
                            className='text14'>2</span><span className='text14'> : </span><span
                            className='text14'>1</span></div>
                        <div className='ms_awayField'><span className='text14'>Away</span>
                        </div>
                        <div className='ms-under-teams-field'>
                            <div className='ms_bid-field'>
                                <div className='ms_bid-left'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>2.50</span></div>
                                </div>
                                <div className='ms_bid-central'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>0-1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>1.50</span></div>
                                </div>
                                <div className='ms_bid-central'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>gg3+</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>4.50</span></div>
                                </div>
                                <div className='ms_bid-right'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>x-x</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>6.50</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.game == 6) {
            return (
                <div>
                    <div className='ms-left-field'>
                        <div className='ms_date-field'><span
                            className='text10'>12.08.2079.</span></div>
                        <div className='ms_time-field'><span
                            className='text10'>15:15</span></div>
                        <div className='ms_status-field'><span
                            className='text12-red'>Ticket lost!</span></div>
                    </div>
                    <div className='ms-central-field'>
                        <div className='ms_homeField'><span className='text14'>Home</span>
                        </div>
                        <div className='ms_resultField'><span
                            className='text14'>2</span><span className='text14'> : </span><span
                            className='text14'>1</span></div>
                        <div className='ms_awayField'><span className='text14'>Away</span>
                        </div>
                        <div className='ms-under-teams-field'>
                            <div className='ms_bid-field'>
                                <div className='ms_bid-left-red'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>2.50</span></div>
                                </div>
                                <div className='ms_bid-central-red'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>0-1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>1.50</span></div>
                                </div>
                                <div className='ms_bid-central-green'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>gg3+</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>4.50</span></div>
                                </div>
                                <div className='ms_bid-right-red'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>x-x</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>6.50</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.game == 7) {
            return (
                <div>
                    <div className='ms-left-field'>
                        <div className='ms_date-field'><span
                            className='text10'>12.08.2079.</span></div>
                        <div className='ms_time-field'><span
                            className='text10'>15:15</span></div>
                        <div className='ms_status-field'><span
                            className='text12-green'>Ticket won!</span></div>
                    </div>
                    <div className='ms-central-field'>
                        <div className='ms_homeField'><span className='text14'>Home</span>
                        </div>
                        <div className='ms_resultField'><span
                            className='text14'>2</span><span className='text14'> : </span><span
                            className='text14'>1</span></div>
                        <div className='ms_awayField'><span className='text14'>Away</span>
                        </div>
                        <div className='ms-under-teams-field'>
                            <div className='ms_bid-field'>
                                <div className='ms_bid-left-green'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>2.50</span></div>
                                </div>
                                <div className='ms_bid-central-green'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>0-1</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>1.50</span></div>
                                </div>
                                <div className='ms_bid-central-green'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>gg3+</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>4.50</span></div>
                                </div>
                                <div className='ms_bid-right-green'>
                                    <div className='ms_game-field'><span
                                        className='text12-white'>x-x</span></div>
                                    <div className='ms_bided-field'><span
                                        className='text12'>6.50</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }
}

export default MatchShort;