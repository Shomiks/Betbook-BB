import React from 'react';
import '../../../src/style/betbook/matchdetails.scss';
import '../../../src/style/app.scss';
class Match_Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            realData:[]
        };
        this.sharedObj = props.sharedObj;
        this.fixtureId = props.match.params.fixtureid;
    }

    componentDidMount() {
        this.getFixtureById();
    }

    getFixtureById(){
        this.sharedObj.apiHelper.fixture.getByID(this.fixtureId,(res) => {
            this.setState({realData:res,loaded:true})
        });
    };

    handleBidClick (game,tip,className) {

        console.log(className)

        let data = this.state.realData['ticket'];
        let game_tip = game + '_'+tip+'';
        let game_odd = game + '_odd';
        let id = this.state.realData.ticket['id'];

        data[game + '_tip'] = tip;
        data[''+game_odd+''] = this.state.realData[''+game_tip+''];

        console.log(data)

        let updated = this.state.realData;
        updated['ticket'] = data;
        this.setState({realData: updated});

        this.sharedObj.apiHelper.bids.updateGameBid(id, {updated});

    }

    handleState = (game,tip,bidfield) => {
        let className = bidfield;
        if (this.state.realData.result && this.state.realData.result[game + '_' + tip] == 1) {
            className += ' won';
        }
        if (this.state.realData.ticket) {
            if (this.state.realData.ticket[game + '_tip'] == tip) {
                className += ' bided';
            }

            if (this.state.realData.ticket[game + '_tip'] == tip && this.state.realData.result) {
                if (this.state.realData.result.is_finished == 1) {
                    if (className.includes('won')) {
                        className += ' green'
                    } else className += ' red'
                }
            }
        }
        return className;
    }


    renderGameTip = (label, game, tip, bidfield) => {

        let className = this.handleState(game,tip,bidfield);

        return <div className={className} onClick = {this.state.realData.result ? () => this.handleBidClick(game,tip,{className}) : ''}>
            <div className='game-bid-align'>
            <div className='game-text'><span className='text11-grey'>{label}</span></div>
            <div className='bid-text'><span className='text15-white'>{this.state.realData[game + '_' + tip]}</span></div>
            </div>
        </div>
    };


    renderStateCompopnent = () => {
        this.sharedObj.headerInstance.setTitle(this.state.realData.round.name);
        let classState ='betbook_screen';
        if(this.state.realData.result){
            if(this.state.realData.result.is_finished == false){
                classState += ' live'
            }
            else classState += ' finished'
        }
        else classState += ' upcoming';

        return <div className='betbook-context'>
        <div className={classState}>
            <div className='match-details-field'>
                <div className='md_league-week-details'><span className='text11-grey'>{this.state.realData.date}</span></div>
                <div className='md_league_match_fixture'>
                <div className='md_home-team-field'><img className='logo' src={'./assets/images/Teams/' + this.state.realData.team_home.logo}/>
                    <div className='home-text-field'><span className='text18-white'>{this.state.realData.team_home.name}</span>

                    </div>
                </div>

                <div className='md_date-time-vs-field'>
                    <div className={this.state.realData.result ? 'vs-datetime-field-result' : 'hidden'}>
                        <div className='text18-white result'>{this.state.realData.result ? this.state.realData.result.ft_home_goals : "4"} : {this.state.realData.upcoming == false ? this.state.realData.result.ft_away_goals : "1"}</div>
                        <div><span className='text12-white ht-result'>{this.state.realData.result ? this.state.realData.result.ht_home_goals : "0"} : {this.state.realData.upcoming == false ? this.state.realData.result.ht_away_goals : "1"}</span></div>
                    </div>
                    <div
                        className={(this.state.realData.upcoming == false) ? 'minuteLive' : 'hidden'}><span
                        className={(this.state.realData.upcoming == false && this.state.realData.result.is_finished == false) ? 'text18' : 'hidden'}>'{this.state.realData.result ? this.state.realData.result.current_min : ''}<br/><span
                        className='text18-red-field'>* LIVE *</span></span>
                    </div>
                    <div className='time-date-field'><span
                        className={!this.state.realData.result ? 'text11-grey' : 'hidden'}>{this.state.realData.dateTime}</span>
                    </div>
                </div>
                <div className='md_away-team-field'>
                    <img className='logo' src={'./assets/images/Teams/' + this.state.realData.team_away.logo}/>
                    <div className='home-text-field'><span
                        className='text18-white'>{this.state.realData.team_away.name}</span></div>
                </div>
                </div>
            </div>
            <div className='scrolable-bids-field'>
                <div className='full-time-result-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span></div>
                        <div className='game-underline'/>
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('1', 'game1', '1', 'bid-field')}
                        {this.renderGameTip('X', 'game1', 'x', 'bid-field')}
                        {this.renderGameTip('2', 'game1', '2', 'bid-field')}
                    </div>
                </div>
                <div className='match-goals-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12-grey'>Match Goals</span></div>
                        <div className='game-underline'/>
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('0-1', 'game2', '1', 'bid-field')}
                        {this.renderGameTip('0-2', 'game2', '2', 'bid-field')}
                        {this.renderGameTip('0-3', 'game2', '3', 'bid-field')}
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('2+HT', 'game2', '2ht', 'bid-field')}
                        {this.renderGameTip('2+FT', 'game2', '2ft', 'bid-field')}
                        {this.renderGameTip('3+FT', 'game2', '3ft', 'bid-field')}
                        {this.renderGameTip('4+FT', 'game2', '4ft', 'bid-field')}
                    </div>
                </div>
                <div className='both-teams-goals-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12-grey'>Both Team Goals</span>
                            <div className='game-underline'/>
                        </div>
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('YES', 'game3', 'gg', 'bid-field')}
                        {this.renderGameTip('NO', 'game3', 'notgg', 'bid-field')}
                    </div>
                </div>
                <div className='ht-ft-result-field'>
                    <div className='main-titlle-field'>
                        <div className='ft_text_position'><span className='text12-grey'>Half / Full Time Result</span>
                            <div className='game-underline'/>
                        </div>
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('1-1', 'game4', '11', 'bid-field')}
                        {this.renderGameTip('1-X', 'game4', '1x', 'bid-field')}
                        {this.renderGameTip('1-2', 'game4', '12', 'bid-field')}
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('X-1', 'game4', 'x1', 'bid-field')}
                        {this.renderGameTip('X-X', 'game4', 'xx', 'bid-field')}
                        {this.renderGameTip('X-2', 'game4', 'x2', 'bid-field')}
                    </div>
                    <div className='md_bid-box'>
                        {this.renderGameTip('2-1', 'game4', '21', 'bid-field')}
                        {this.renderGameTip('2-X', 'game4', '2x', 'bid-field')}
                        {this.renderGameTip('2-2', 'game4', '22', 'bid-field')}
                    </div>
                </div>
            </div>
        </div>
        </div>
    }

    render() {

        console.log(this.state.realData)

        return <>{this.state.loaded == true ? this.renderStateCompopnent() : <div/>}</>
    }
}

export default Match_Details;
