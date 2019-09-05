import React from 'react'
import '../../style/betbook/home_screen.scss'
import {Link} from "react-router-dom";
import Footer from "../components/footer";

class Home_screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount = () => {
        this.getUserFavorites();

    };

    getUserFavorites = () => {
        this.sharedObj.apiHelper.home(1, (res) => {
            this.setState({realData: res, loaded: true});
            this.sharedObj.footerInstance.setActive('timeline');
        });
    };

    handlePreviousMatchWeek = (data) => {
        if (1) return <div className='last-week'>
            <Link to={`league/${data.league.id}/round/4`}> <div className='hs_left-box'>
                <div><span className='text11-white'>Matchweek {parseInt(data.round.order)}</span></div>
                <div className='hs_left-middle-text'><span className='text11-white'>Success Rate xx%</span></div>
                <div className='hs_left-bottom-text'>
                    <div><span className='text11-white'>Check the bet</span></div>
                </div>
            </div></Link>
        </div>;
        else return <div className='last-week'/>
    };

    handleCurrentMatchWeek = (data) => {
        return <div className='current-week'>
            <Link to={`league/${data.league.id}`}> <div className='hs_right-box'>
                <div><span className='text11-white'>Matchweek {parseInt(data.round.order) + 1}</span></div>
                <div className='hs_left-middle-text'><span className='text11-white'>Start of the week</span></div>
                <div className='hs_left-bottom-text'>
                    <div><span className='text11-white'>Create bet</span></div>
               </div>
            </div></Link>
        </div>
    };

    handleFavouriteLeagues = () => {
        return <>{this.state.realData.map(data => {
            if (!data.round) data.round = null;
            return <div className='favourite-league' key={data.id + '_'}>
                <div className='favourite-league-container'>
                    {this.handlePreviousMatchWeek(data)}
                    <div className='logo'><img className='league-logo'
                                               src={'./assets/images/Logos/' + data.league.logo} alt=''/><br/><span
                        className='text11'>{data.league.name}</span></div>
                    {this.handleCurrentMatchWeek(data)}
                </div>
            </div>
        })}</>
    };

    handleFirstTimeLogin = () => {
        return <><Link to={`/countries`}>
            <div className='hs_select-box'><span className='text26-white'>Select your favourite leagues and start your journey</span>
            </div>
        </Link></>
    };

    render() {

        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='betbook-logo'/>
                <div className='main-content'>
                    {!this.state.realData.user_favourite_leagues ?
                        <>
                            <div className='welcome-text'> My Leagues</div>
                            {this.handleFavouriteLeagues()}</>
                        :
                        <>
                            <div className='text17-white'>Welcome User!</div>
                            {this.handleFirstTimeLogin()}</>
                    }
                </div>
            </div>
        );
        else return <div>Loading...</div>
    }
}

export default Home_screen;
