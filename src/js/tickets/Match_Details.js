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
    };

    getFixtureById(){
        this.sharedObj.apiHelper.fixture.getByID(this.fixtureId,localStorage.getItem('user_id'),(res) => {
            this.sharedObj.headerInstance.setItemRight('options');
            this.setState({realData:res,loaded:true})
        });
    };

    checkIfUnbided = () => {
        return !(this.state.realData.ticket['game1_tip'] || this.state.realData.ticket['game2_tip'] || this.state.realData.ticket['game3_tip'] || this.state.realData.ticket['game4_tip'])
    };

    handleBidClick = (game,tip,className) => {
        if(this.state.realData.ticket) {

            let data = this.state.realData['ticket'];
            let updated = this.state.realData;
            let id = this.state.realData.ticket['id'];

            if (className !== 'bid-field bided') {
                data[game + '_tip'] = tip;
                data[game + '_odd'] = this.state.realData[game + '_' + tip];
                data['bid_score'] = parseFloat(data['bid_score']) + parseFloat(data[game + '_odd']);
            } else {
                data[game + '_tip'] = null;
                data['bid_score'] = parseFloat(data['bid_score']) - parseFloat(data[game + '_odd']);
                data[game + '_odd'] = 0;
                if(this.checkIfUnbided()) {
                    this.sharedObj.apiHelper.bids.deleteFixtureBid(this.state.realData.ticket.id);
                    updated['ticket'] = null;
                    this.setState({realData: updated});
                    return;
                }
            }

            updated['ticket'] = data;
            this.setState({realData: updated});
            // this.sharedObj.apiHelper.favourites.update(localStorage.getItem('user_id'),this.state.realData.league.id);
            this.sharedObj.apiHelper.bids.updateFixtureBids(id, {updated});
        }

        else {
            let ticket = this.handleReturnTicket();
            ticket.fixture_id = this.state.realData.id;
            ticket[game + '_tip'] = tip;
            ticket[game + '_odd'] = this.state.realData[game + '_' + tip];
            ticket['bid_score'] = ticket[game + '_odd'];
            this.handleCreateTicket(ticket);
        }
    };

    handleReturnTicket = () => {
        let ticket = {
            user_id: localStorage.getItem('user_id'),
            fixture_id: null,
            game1_tip: null,
            game1_odd: 0,
            game2_tip: null,
            game2_odd: 0,
            game3_tip: null,
            game3_odd: 0,
            game4_tip: null,
            game4_odd: 0,
            bid_score: 0,
            final_score: 0
        };
        return ticket;
    };

    handleCreateTicket = (ticket) => {

        this.sharedObj.apiHelper.favourites.update(localStorage.getItem('user_id'), this.state.realData.league.id,);
        this.sharedObj.apiHelper.bids.createFixtureBids({ticket},(id) => {
            ticket['id'] = id;

            this.setState(prevState => ({
                realData:{
                    ...prevState.realData,
                    ticket: ticket,
                }
            }));
        });
    };

    handleBidState = (game,tip,bidfield) => {
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
    };

    handleBidType = (label, game, tip, bidfield) => {

        let className = this.handleBidState(game,tip,bidfield);

        return <div className={className} onClick = {!this.state.realData.result ? () => this.handleBidClick(game,tip,className) : () =>{}}>
            <div className='game-bid-align'>
            <div className='game-text'><span className='text11-grey'>{label}</span></div>
            <div className='bid-text'><span className='text15-white'>{this.state.realData[game + '_' + tip]}</span></div>
            </div>
        </div>
    };

    renderLive = () => {
        return  <div className='minuteLive'>
                    <div className='live-field'>live</div>
                    <div className='live-minut-field'><span className='text16-yellow'>{this.state.realData.result.elapsed}'</span></div>
            </div>
    };

    renderResult = () => {
        return <> <div className='result'>
            <div className={this.state.realData.result.is_finished == 0 ? 'text21-yellow result' : 'text18-white result'}>
                {this.state.realData.result.ft_home_goals} <span className='separator-ft'> : </span> {this.state.realData.result.ft_away_goals}</div>
            <div className={this.state.realData.result.is_finished == 0 ? 'text16-yellow result' : 'text12-white ht-result'}>
                {this.state.realData.result.ht_home_goals} <span className='separator-ht'> : </span> {this.state.realData.result.ht_away_goals}</div>
        </div>
            {this.state.realData.result.is_finished == 0 ? this.renderLive() : null}
            </>
    };

    renderMatchDetails = () => {
        return <div className='match-details-field'>
            <div className='md_league-week-details'><span className='text11-grey'>{this.state.realData.date}</span></div>
            <div className='md_league_match_fixture'>
                <div className='md_home-team-field'><img className='logo' src={'./assets/images/Teams/' + this.state.realData.team_home.logo}  alt=''/>
                    <div className='home-text-field'><span className='text18-white'>{this.state.realData.team_home.name}</span>
                    </div>
                </div>
                <div className='md_vs-field'>
                    {this.state.realData.result ? this.renderResult() : null}
                </div>
                <div className='md_away-team-field'>
                    <img className='logo' src={'./assets/images/Teams/' + this.state.realData.team_away.logo} alt=''/>
                    <div className='home-text-field'><span className='text18-white'>{this.state.realData.team_away.name}</span></div>
                </div>
            </div>
        </div>
    };

    renderBidFieldDetails = () => {
        return <div className='scrolable-bids-field'>
            <div className={this.state.realData.game1_1 ?'full-time-result-field' : 'hidden'}>
                <div className='main-titlle-field'>
                    <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span></div>
                    <div className='game-underline'/>
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('1', 'game1', '1', 'bid-field')}
                    {this.handleBidType('X', 'game1', 'x', 'bid-field')}
                    {this.handleBidType('2', 'game1', '2', 'bid-field')}
                </div>
            </div>
            <div className={this.state.realData.game2_1 ? 'match-goals-field' : 'hidden'}>
                <div className='main-titlle-field'>
                    <div className='ft_text_position'><span className='text12-grey'>Match Goals</span></div>
                    <div className='game-underline'/>
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('0-1', 'game2', '1', 'bid-field')}
                    {this.handleBidType('0-2', 'game2', '2', 'bid-field')}
                    {this.handleBidType('0-3', 'game2', '3', 'bid-field')}
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('2+HT', 'game2', '2ht', 'bid-field')}
                    {this.handleBidType('2+FT', 'game2', '2ft', 'bid-field')}
                    {this.handleBidType('3+FT', 'game2', '3ft', 'bid-field')}
                    {this.handleBidType('4+FT', 'game2', '4ft', 'bid-field')}
                </div>
            </div>
            <div className={this.state.realData.game3_gg ? 'both-teams-goals-field' : 'hidden'}>
                <div className='main-titlle-field'>
                    <div className='ft_text_position'><span className='text12-grey'>Both Team Goals</span>
                        <div className='game-underline'/>
                    </div>
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('YES', 'game3', 'gg', 'bid-field')}
                    {this.handleBidType('NO', 'game3', 'gg3p', 'bid-field')}
                </div>
            </div>
            <div className={this.state.realData.game4_11 ? 'ht-ft-result-field' : 'hidden'}>
                <div className='main-titlle-field'>
                    <div className='ft_text_position'><span className='text12-grey'>Half / Full Time Result</span>
                        <div className='game-underline'/>
                    </div>
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('1-1', 'game4', '11', 'bid-field')}
                    {this.handleBidType('1-X', 'game4', '1x', 'bid-field')}
                    {this.handleBidType('1-2', 'game4', '12', 'bid-field')}
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('X-1', 'game4', 'x1', 'bid-field')}
                    {this.handleBidType('X-X', 'game4', 'xx', 'bid-field')}
                    {this.handleBidType('X-2', 'game4', 'x2', 'bid-field')}
                </div>
                <div className='md_bid-box'>
                    {this.handleBidType('2-1', 'game4', '21', 'bid-field')}
                    {this.handleBidType('2-X', 'game4', '2x', 'bid-field')}
                    {this.handleBidType('2-2', 'game4', '22', 'bid-field')}
                </div>
            </div>
        </div>
    };


    renderStateCompopnent = () => {
        // this.sharedObj.headerInstance.setTitle(this.state.realData.round.name);

        let classState ='betbook_screen';

        if(this.state.realData.result){
            if(this.state.realData.result.is_finished == false){
                classState += ' live'
            }
            else classState += ' finished'
        }
        else classState += ' upcoming';

        return(
        <div className='betbook-context'>
            <div className={classState}>

            {this.renderMatchDetails()}
            {this.renderBidFieldDetails()}

            </div>
        </div>
        )
    };

    render() {
        console.log(this.state.realData)

        return <>{this.state.loaded == true ? this.renderStateCompopnent() : <div/>}</>
    }
}

export default Match_Details;
