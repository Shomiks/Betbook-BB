import React from 'react';
import '../../style/betbook/components/match_short.scss';

class MatchShort extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            ...props.match
        }
    }

    handleStateField = (tip) => {
        let game = "game" + tip;

        if(!this.props.match.ticket[game + '_tip']) return ' unbided';
        else{
            if(this.props.match.result){
                if(this.props.match.result.is_finished == 0) return ' bided';
                else{
                    if(this.props.match.result[game + '_' + this.props.match.ticket[game + '_tip']] == 1) return ' green';
                    else return ' red';
                }
            }
            else return ' bided';
        }
    };

    handleBidField = () => {

        return <div className={this.props.match.ticket ? 'ms-central-field' : 'ms-central-field yellow'}>
            <div className='ms-teams-field'>
               <div className='ms_homeField'>
                   <img className='logo' src={'./assets/images/Teams/' + this.props.match.team_home.logo} alt=''/>
                   <div className='ms_hometeam-text'><span className='text11-white'>{this.props.match.team_home.name}</span></div>
               </div>

                <div className='ms_resultField'>
                    <span className={this.props.match.result && this.props.match.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{this.props.match.result ? this.props.match.result.ft_home_goals : ''}</span>
                    <div className='ms_date'><span className='text11-white'> {!this.props.match.result ? this.props.match.date : ':'} </span></div>
                    <span className={this.props.match.result && this.props.match.result.is_finished == 0 ? 'text15-yellow' : 'text15-white'}>{this.props.match.result ? this.props.match.result.ft_away_goals : ''}</span>
            </div>
                <div className='ms_awayField'>
                    <div className='ms_awayteam-text'><span className='text11-white'>{this.props.match.team_away.name}</span></div>
                    <img className='logo' src={'./assets/images/Teams/' + this.props.match.team_away.logo} alt=''/>
                </div>
            </div>
                <div className='ms-under-teams-field'>
                    {!this.props.match.ticket ? (!this.props.match.result ? <div className='ms_not-bided-yellow'><span className='text11-white'>MAKE A BID</span></div> : <div/>)
                        : (
                        <div className='ms_bid-field'>
                        <div className={'ms_bid-box' + this.handleStateField(1)}>
                        <div className='ms_game-field'><span className='text11-grey'>{this.props.match.ticket.game1_tip}</span></div>
                        <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game1_odd}</span></div>
                        </div>
                        <div className={'ms_bid-box' + this.handleStateField(2)}>
                        <div className='ms_game-field'><span className='text11-grey'>{this.props.match.ticket.game2_tip}</span></div>
                        <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game2_odd}</span></div>
                        </div>
                        <div className={'ms_bid-box' + this.handleStateField(3)}>
                        <div className='ms_game-field'><span className='text11-grey'>{this.props.match.ticket.game3_tip}</span></div>
                        <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game3_odd}</span></div>
                        </div>
                        <div className={'ms_bid-box' + this.handleStateField(4)}>
                        <div className='ms_game-field'><span className='text11-grey'>{this.props.match.ticket.game4_tip}</span></div>
                        <div className='ms_odd-field'><span className='text11-white'>{this.props.match.ticket.game4_odd}</span></div>
                        </div>
                        </div>)}
                </div>
            </div>
        };

    render() {
        return <>{this.handleBidField()}</>
          }
}

export default MatchShort;
