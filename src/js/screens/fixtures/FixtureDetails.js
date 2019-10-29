import React from 'react';
import '../../../style/betbook/matchdetails.scss';
import '../../../style/app.scss'
import Loader from "../../components/other/Loader";
import FullContainer from "../../components/containers/FullContainer";
import BidFieldsShort from "../../components/objectcontrols/BidFieldsShort";

class FixtureDetails extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded: false,
            realData: []
        };
        this.fixtureId = props.match.params.fixtureid;
    }

    componentDidMount() {
        this.getFixtureById();
    };

    getFixtureById() {
        window.apiHelper.fixture.getByID(this.fixtureId, window.apiHelper.userInfo.id, (res) => {
            this.setState({realData: res, loaded: true})
        });
    };

    checkIfUnbided = () => {
        return !(this.state.realData.ticket['game1_tip'] || this.state.realData.ticket['game2_tip'] || this.state.realData.ticket['game3_tip'] || this.state.realData.ticket['game4_tip'])
    };

    handleBidClick = (game, tip, className) => {
        if (this.state.realData.ticket) {

            let data = this.state.realData['ticket'];
            let updated = this.state.realData;
            let id = this.state.realData.ticket['id'];

            if (!className.includes('bided no-opacity')) {
                let previous_bid_score = this.state.realData.ticket[game + '_odd'];
                data[game + '_tip'] = tip;
                data[game + '_odd'] = this.state.realData[game + '_' + tip];
                if (data[game + '_odd'] > 0) data['bid_score'] = (parseFloat(data['bid_score']) - parseFloat(previous_bid_score) + parseFloat(data[game + '_odd'])).toFixed(2);
            } else {
                data[game + '_tip'] = null;
                data['bid_score'] = (parseFloat(data['bid_score']) - parseFloat(data[game + '_odd'])).toFixed(2);
                data[game + '_odd'] = 0;
                if (this.checkIfUnbided()) {
                    window.apiHelper.bids.deleteFixtureBid(this.state.realData.ticket.id);
                    updated['ticket'] = null;
                    this.setState({realData: updated});
                    return;
                }
            }
            updated['ticket'] = data;
            this.setState({realData: updated});
            window.apiHelper.bids.updateFixtureBids(id, {updated});
        } else {
            let ticket = this.handleReturnTicket();
            ticket.fixture_id = this.state.realData.id;
            ticket.league_id = this.state.realData.league.id;
            ticket[game + '_tip'] = tip;
            ticket[game + '_odd'] = this.state.realData[game + '_' + tip];
            ticket['bid_score'] = ticket[game + '_odd'];
            this.handleCreateTicket(ticket);
        }
    };

    handleReturnTicket = () => {
        return {
            user_id: window.apiHelper.userInfo.id,
            league_id: null,
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
    };

    handleCreateTicket = (ticket) => {

        window.apiHelper.user.favourite_team_leagues(window.apiHelper.userInfo.id, this.state.realData.league.id, () => {});
        window.apiHelper.bids.createFixtureBids({ticket}, (id) => {
            ticket['id'] = id;
            this.setState(prevState => ({
                realData: {
                    ...prevState.realData,
                    ticket: ticket
                }
            }));
        });
    };

    renderLive = () => {
        return <div className='minuteLive'>
            <div className='live-field'>live</div>
            <div className='live-minut-field'><span
                className='text16-yellow'>{this.state.realData.result.elapsed}'</span></div>
        </div>
    };

    renderResult = () => {
        return <>
            <div className='result'>
                <div
                    className={this.state.realData.result.is_finished == 0 ? 'text21-yellow result' : 'text18-white result'}>
                    {this.state.realData.result.ft_home_goals} <span
                    className='separator-ft'> : </span> {this.state.realData.result.ft_away_goals}</div>
                <div
                    className={this.state.realData.result.is_finished == 0 ? 'text16-yellow result' : 'text12-white ht-result'}>
                    {this.state.realData.result.ht_home_goals} <span
                    className='separator-ht'> : </span> {this.state.realData.result.ht_away_goals}</div>
            </div>
            {this.state.realData.result.is_finished == 0 ? this.renderLive() : null}
        </>
    };

    handleImgError = (team) => {
        team.logo = 'alternative-logo.png';
    };

    renderDate = () => {
        let Datefields = this.state.realData.date.split(' ')[0].split('-');
        let Timefields = this.state.realData.date.split(' ')[1].split(':');
        let year = Datefields[0].substring(2, Datefields[0].length);

        return (Datefields[2] + '/' + Datefields[1] + '/' + year + ' ' + Timefields[0] + ':' + Timefields[1]);
    };

    renderMatchDetails = () => {
        return <div className='match-details-field'>
            <div className='md_league-week-details'><span className='text11-grey'>{this.renderDate()}</span></div>
            <div className='md_league_match_fixture'>
                <div className='md_home-team-field'>
                    <img className='logo' src={'./assets/images/Teams/' + this.state.realData.team_home.logo}
                         onError={() => this.handleImgError(this.state.realData.team_home)}/>
                    <div className='home-text-field'><span
                        className='text18-white'>{this.state.realData.team_home.name}</span>
                    </div>
                </div>
                <div className='md_vs-field'>
                    {this.state.realData.result ? this.renderResult() : null}
                </div>
                <div className='md_away-team-field'>
                    <img className='logo' src={'./assets/images/Teams/' + this.state.realData.team_away.logo}
                         onError={() => this.handleImgError(this.state.realData.team_away)}/>
                    <div className='home-text-field'><span
                        className='text18-white'>{this.state.realData.team_away.name}</span></div>
                </div>
            </div>
        </div>
    };

    renderBidFieldDetails = () => {
        return <BidFieldsShort realData={this.state.realData} handleBidClick={this.handleBidClick} />
    };

    renderStateCompopnent = () => {
        return (
            <FullContainer footerProps={{activeItem: 'ball'}} headerProps={{title: this.state.realData.league.name}}>
                {this.renderMatchDetails()}
                {this.renderBidFieldDetails()}
            </FullContainer>
        )
    };

    render() {
        return <>{this.state.loaded == true ? this.renderStateCompopnent() : <Loader/>}</>
    }
}

export default FixtureDetails;
