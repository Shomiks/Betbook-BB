import React from 'react'
import '../../style/betbook/home_screen.scss'
import {Link, Redirect} from "react-router-dom";
import Loader from "../components/Loader";

class Home_Screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false,
            username: null
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount = () => {
        this.getUserFavorites();
        setTimeout(() => {
            this.sharedObj.footerInstance.setActive('timeline');
        }, 1);
    };

    getUserFavorites = () => {
        if(window.apiHelper.userInfo) {
            this.sharedObj.apiHelper.home.get_favourites(window.apiHelper.userInfo.id, (res) => {
                this.setState({username: window.apiHelper.userInfo['username'], realData: res, loaded: true})
            });
        }
    };

    handleFinished = (data) => {
        if (1) return <Link to={`finished/league/${data.league.id}`} className='last-week'>
                <div className='hs_left-box'>
                    <div className='hs_left-middle-text'><span className='text11-white'>Success Rate xx%</span></div>
                    <div className='hs_left-bottom-text'>
                        <div><span className='text11-white'>Check the bet</span></div>
                    </div>
            </div>
        </Link>;
        else return <div className='last-week'/>
    };

    // renderDate = (data) => {
    //     let Datefields = data.round.start_date.split(' ')[0].split('-');
    //     let Timefields = data.round.start_date.split(' ')[1].split(':');
    //     let year = Datefields[0];
    //
    //     return( Datefields[2] + '/' + Datefields[1] + '/' + year + ' ' + Timefields[0] + ':' +  Timefields[1]);
    // };

    handleUpcoming = (data) => {
        return <Link to={`league/${data.league.id}`} className='current-week'>
            <div className='hs_right-box'>
                <div className='hs_left-middle-text'><span className='text11-white'>Gameweek start date</span></div>
                <div className='hs_left-bottom-text'>
                    <div>< span className='text11-white'>Create bet</span></div>
                </div>
            </div>
        </Link>
    };

    handleFavouriteLeagues = () => {
        return <>{this.state.realData.map(data => {
            if (!data.round) data.round = null;
            return <div className='favourite-league' key={data.id + '_'}>
                <div className='favourite-league-container'>
                    {this.handleFinished(data)}
                    {this.handleUpcoming(data)}
                    <div className='logo'><img className='league-logo'
                                               src={'./assets/images/Logos/' + data.league.logo + ''} alt=''/>
                        <div className='hs_league-name'><span className='text11'>{data.league.name}</span></div>
                    </div>
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
                    {this.state.realData.length ?
                        <>
                            <div className='welcome-text'> My Leagues</div>
                            {this.handleFavouriteLeagues()}</>
                        :
                        <>
                            <div className='text17-white'>Welcome {this.state.username}!</div>
                            {this.handleFirstTimeLogin()}</>
                    }
                </div>
            </div>
        );
        else {
            return <Loader/>
        }
    }
}

export default Home_Screen;
