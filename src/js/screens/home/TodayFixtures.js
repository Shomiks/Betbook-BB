import React from 'react'
import '../../../style/betbook/home_screen.scss'
import Loader from "../../components/other/Loader";
import FooterContainer from "../../components/containers/FooterContainer";
import LeagueShort from "../../components/objectcontrols/LeagueShort";

class TodayFixtures extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false,
            username: null,
            checked: false
        };
    }

    componentDidMount = () => {
        this.getAllFixtures();
    };

    getAllFixtures = () => {
        window.apiHelper.leagues.getAll((res) => {
            this.setState({loaded:true, realData:res})
        })
    };

    onChange = (user_favourite_league) => {

    };

    render() {
        if (this.state.loaded) return (
            <FooterContainer footerProps={{activeItem: 'timeline'}}>
                <div className='betbook-logo'/>
                <div className='main-content'>
                        <>
                            <div className='welcome-text'>My Leagues</div>
                            {this.state.realData.map(league => {
                                return (<LeagueShort isChecked={league.user_favourite_league ? 'star_checked' : 'star'}
                                                     onChange={this.onChange(league.user_favourite_league)}{...league} key={league.id}/>)
                                })}</>
                </div>
            </FooterContainer>
        );
        else {
            return <Loader/>
        }
    }
}

export default TodayFixtures;
