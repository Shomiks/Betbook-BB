import React from 'react';
import '../../style/betbook/components/match_short.scss';

class MatchShort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.match
        }
    }

    handleBidField = () => {

        let game1 ='';
        let game2 ='';
        let game3 ='';
        let game4 ='';

        if (!this.props.match.ticket){ game1 = '-white'; game2 = '-white'; game3 = '-white'; game4 = '-white'}
        else{
            if(this.props.match.result){
                if(this.props.match.result.finished == false){
                    game1 = this.props.match.ticket.game1_tip !=null ? '' : '-white' ; game2 = this.props.match.ticket.game2_tip !=null ? '' : '-white';
                    game3 = this.props.match.ticket.game3_tip !=null ? '' : '-white'; game4 = this.props.match.ticket.game4_tip !=null ? '' : '-white'
                }
                else{
                    if(this.props.match.ticket.final_score == this.props.match.ticket.bid_score && this.props.match.ticket.bid_score != 0){
                        game1 = this.props.match.ticket.game1_tip !=null ? '-green' : '-white'; game2 = this.props.match.ticket.game2_tip !=null ? '-green' : '-white';
                        game3 = this.props.match.ticket.game3_tip !=null ? '-green' : '-white'; game4 = this.props.match.ticket.game4_tip !=null ? '-green' : '-white';
                    }
                    else {
                        game1 = this.props.match.ticket.game1_tip != null ? (this.props.match.ticket.game1_odd == 0 ? '-red' : '-green') : '-white';
                        game2 = this.props.match.ticket.game2_tip != null ? (this.props.match.ticket.game2_odd == 0 ? '-red' : '-green') : '-white';
                        game3 = this.props.match.ticket.game3_tip != null ? (this.props.match.ticket.game3_odd == 0 ? '-red' : '-green') : '-white';
                        game4 = this.props.match.ticket.game4_tip != null ? (this.props.match.ticket.game4_odd == 0 ? '-red' : '-green') : '-white';
                    }
                }
            }
        }

        return <div className='ms-central-field'>
            <div className='ms-teams-field'>
               <div className='ms_homeField'>
                   <img className='logo' src={this.props.match.team_home.logo}/>
                   <div className='ms_hometeam-text'><span className='text11-white'>{this.props.match.team_home.team_name}</span></div>
               </div>

                <div className='ms_resultField'>
                    <span className={this.props.match.result && this.props.match.result.finished==false ? 'text15-yellow' : 'text15-white'}>{this.props.match.result ? this.props.match.result.ft_home_goals : ''}</span>
                    <div className='ms_date'><span className='text11-grey'> {this.props.match.upcoming == 1 ? "Wed. 19.08.2019." : ':'} </span></div>
                    <span className={this.props.match.result && this.props.match.result.finished==false ? 'text15-yellow' : 'text15-white'}>{this.props.match.result ? this.props.match.result.ft_away_goals : ''}</span>
            </div>
                <div className='ms_awayField'>
                    <div className='ms_awayteam-text'><span className='text11-white'>{this.props.match.team_away.team_name}</span></div>
                    <img className='logo' src={this.props.match.team_away.logo}/>
                </div>
            </div>
                <div className='ms-under-teams-field'>
                    {this.props.match.ticket ? <div className='ms_bid-field'>
                        <div  className={'ms_bid-box'+game1}>
                            <div className='ms_game-field'><span className='text11-grey'>1</span></div>
                            <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game1_odd}</span></div>
                        </div>
                        <div className={'ms_bid-box'+game2}>
                            <div className='ms_game-field'><span className='text11-grey'>1</span></div>
                            <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game2_odd}</span></div>
                        </div>
                        <div className={'ms_bid-box'+game3}>
                            <div className='ms_game-field'><span className='text11-grey'>x1</span></div>
                            <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game3_odd}</span></div>
                        </div>
                        <div className={'ms_bid-box'+game4}>
                            <div className='ms_game-field'><span className='text11-grey'>1</span></div>
                            <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game4_odd}</span></div>
                        </div>
                    </div> :
                        <div className='ms_not-bided-yellow'><span className='text11-white'>Make a bet</span></div>}
                </div>
            </div>

    };

    render() {


        return <div >{this.handleBidField()}</div>
          }
}

export default MatchShort;
