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
               <div className='ms_homeField'><img className='logo' src={this.props.match.team_home.logo}/><span className='text14'>{this.props.match.team_home.team_name}</span></div>
                <div className='ms_resultField'><span
                    className='text14'>{this.props.match.result ? this.props.match.result.goals_home_ft : ''}</span><span className='text14'> : </span><span
                    className='text14'>{this.props.match.result ? this.props.match.result.goals_away_ft : ''}</span></div>
                <div className='ms_awayField'><span className='text14'>{this.props.match.team_away.team_name}</span> <img className='logo' src={this.props.match.team_away.logo}/></div>
                <div className='ms-under-teams-field'>
                    {this.props.match.ticket ? <div className='ms_bid-field'>
                        <div  className={'ms_bid-left'+game1}>
                            <div className='ms_bided-field'><span
                                className='text12'>{game1 == '-white' ? '' : this.props.match.ticket.game1_odd}</span></div>
                        </div>
                        <div className={'ms_bid-central'+game2}>
                            <div className='ms_bided-field'><span
                                className='text12'>{game2 == '-white' ? '' : this.props.match.ticket.game2_odd}</span></div>
                        </div>
                        <div className={'ms_bid-central'+game3}>
                            <div className='ms_bided-field'><span
                                className='text12'>{game3 == '-white' ? '' : this.props.match.ticket.game3_odd}</span></div>
                        </div>
                        <div className={'ms_bid-left'+game4}>
                            <div className='ms_bided-field'><span
                                className='text12'>{game4 == '-white' ? '' : this.props.match.ticket.game4_odd}</span></div>
                        </div>
                    </div> :
                        <button className='ms_bid-field'>JBT</button>}
                </div>
            </div>

    };

    render() {

        return <div >{this.handleBidField()}</div>
          }
}

export default MatchShort;
