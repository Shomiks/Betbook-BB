import React from 'react';
import '../../../src/style/betbook/matchdetails.scss';
import '../../../src/style/app.scss';

class Match_Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            realData:null
        };
        this.sharedObj = props.sharedObj;
        this.hashFixture = window.location.hash.split('/',5).slice(0,3).pop();
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData(){
        this.fetchFixture(`http://localhost/index.php/api/fixture/` + this.hashFixture);
    }

    fetchFixture(input){
        fetch(input)
            .then(res => res.json())
            .then(res => this.setState({data:res,loaded:true}))
    }

    renderGameTip = (label, game, tip, bidfield) => {
        let className = bidfield;
        if (this.state.data.result && this.state.data.result[game + '_' + tip] == 1) {
            className += ' won';
        }
        if (this.state.data.ticket) {
            if (this.state.data.ticket[game + '_tip'] == tip) {
                className += ' bided';
            }

            if (this.state.data.ticket[game + '_tip'] == tip && this.state.data.result != null) {
                if (this.state.data.result.finished == 1) {
                    if (className.includes('won')) {
                        className += ' green'
                    } else className += ' red'
                }
            }
        }
        return <div className={className}>
            <div className='col-3_game-field'><span
                className={this.state.data.ticket ? (this.state.data.ticket[game + '_tip'] == tip ? 'text12-white' : 'text12') : 'text12'}>{label}</span></div>
            <div className='col-3_bid-field'><span
                className={this.state.data.ticket ? (this.state.data.ticket[game + '_tip'] == tip ? 'text12-white' : 'text12') : 'text12'}>{this.state.data[game + '_' + tip]}</span></div>
        </div>
    };


    renderStateCompopnent = () => {
        let classState ='betbook_screen';
        if(this.state.data.result){
            if(this.state.data.result.finished == false){
                classState += ' live'
            }
            else classState += ' finished'
        }
        else classState += ' upcoming';

        return <div className={classState}>
            <div className='match-details-field'>
                <div className='md_home-team-field'><img className='logo' src={this.state.data.team_home.logo}/>
                    <div className='home-text-field'><span className='text18'>{this.state.data.team_home.team_name}</span>
                    </div>
                    <div className='place-field'><span className='text10'>1st place</span></div>
                </div>
                <div className='md_league-week-details'><span className='text12'>{'COMPETITION ROUND' + ' ' + this.state.data.round.week_number}</span></div>
                <div className='md_date-time-vs-field'>
                    <div className={this.state.data.result == null ? 'vs-datetime-field' : 'hidden'}><span
                        className='text18'>VS</span>
                    </div>
                    <div className={this.state.data.result != null ?
                        'vs-datetime-field-result' :
                        'hidden'}>
                        <span className='text25'>{this.state.data.upcoming == false ? this.state.data.result.ft_home_goals : ""} : {this.state.data.upcoming == false ? this.state.data.result.ft_away_goals : ""}</span>
                        <div><span className='text12'>({this.state.data.upcoming == false ? this.state.data.result.ht_home_goals : ""} : {this.state.data.upcoming == false ? this.state.data.result.ht_away_goals : ""})</span></div>
                    </div>
                    <div
                        className={(this.state.data.upcoming == false) ? 'minuteLive' : 'hidden'}><span
                        className={(this.state.data.upcoming == false && this.state.data.result.finished == false) ? 'text18' : 'hidden'}>'{this.state.data.result ? this.state.data.result.current_min : ''}<br/><span
                        className='text18-red-field'>* LIVE *</span></span></div>
                    <div className='time-date-field'><span
                        className={this.state.data.result == null ? 'text10' : 'hidden'}>{this.state.data.dateTime}</span>
                    </div>
                    <div className='location-field'><span className='text10'>STADION</span>
                    </div>
                </div>
                <div className='md_away-team-field'>
                    <img className='logo' src={this.state.data.team_away.logo}/>
                    <div className='home-text-field'><span
                        className='text18'>{this.state.data.team_away.team_name}</span></div>
                    <div className='place-field'><span
                        className='text10'>2nd place</span></div>
                </div>
            </div>
            <div className='scrolable-bids-field'>
                <div className='full-time-result-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12'>Fulltime Result</span></div>
                    </div>
                    <div className='col-3-bid-field'>
                        {this.renderGameTip('1', 'game1', '1', 'bid-1-field')}
                        {this.renderGameTip('X', 'game1', 'x', 'bid-2-field')}
                        {this.renderGameTip('2', 'game1', '2', 'bid-1-field')}
                    </div>
                </div>
                <div className='match-goals-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12'>Match Goals</span></div>
                    </div>
                    <div className='col-3-bid-field' style={{borderBottom: '0.5px solid #cfcfcf'}}>
                        {this.renderGameTip('0-1', 'game2', '1', 'bid-1-field')}
                        {this.renderGameTip('0-2', 'game2', '2', 'bid-2-field')}
                        {this.renderGameTip('0-3', 'game2', '3', 'bid-1-field')}
                    </div>
                    <div className='col-4-bid-field'>
                        {this.renderGameTip('2+HT', 'game2', '2ht', 'bid-1-field')}
                        {this.renderGameTip('2+FT', 'game2', '2ft', 'bid-2-field')}
                        {this.renderGameTip('3+FT', 'game2', '3ft', 'bid-3-field')}
                        {this.renderGameTip('4+FT', 'game2', '4ft', 'bid-1-field')}
                    </div>
                </div>
                <div className='both-teams-goals-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12'>Both Team Goals</span>
                        </div>
                    </div>
                    <div className='col-2-bid-field'>
                        {this.renderGameTip('YES', 'game3', 'gg', 'bid-2-field')}
                        {this.renderGameTip('NO', 'game3', 'notgg', 'bid-2-field')}
                    </div>
                </div>
                <div className='ht-ft-result-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12'>Half / Full Time Result</span>
                        </div>
                    </div>
                    <div className='col-3-bid-field' style={{borderBottom: '1px solid #cfcfcf'}}>
                        {this.renderGameTip('1-1', 'game4', '11', 'bid-1-field')}
                        {this.renderGameTip('1-X', 'game4', '1x', 'bid-2-field')}
                        {this.renderGameTip('1-2', 'game4', '12', 'bid-1-field')}
                    </div>
                    <div className='col-3-bid-field' style={{borderBottom: '1px solid #cfcfcf'}}>
                        {this.renderGameTip('X-1', 'game4', 'x1', 'bid-1-field')}
                        {this.renderGameTip('X-X', 'game4', 'xx', 'bid-2-field')}
                        {this.renderGameTip('X-2', 'game4', 'x2', 'bid-1-field')}
                    </div>
                    <div className='col-3-bid-field' style={{borderBottom: '1px solid #cfcfcf'}}>
                        {this.renderGameTip('2-1', 'game4', '21', 'bid-1-field')}
                        {this.renderGameTip('2-X', 'game4', '2x', 'bid-2-field')}
                        {this.renderGameTip('2-2', 'game4', '22', 'bid-1-field')}
                    </div>
                </div>
            </div>
        </div>
    }

    render() {
        console.log(this.state.data)
        return <div>{this.state.loaded == true ? this.renderStateCompopnent() : <div/>}</div>
    }
}

export default Match_Details;
