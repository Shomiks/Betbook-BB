import React from 'react'
import '../../style/betbook/home_screen.scss'
import {Link} from "react-router-dom";
import Loader from "../components/loader";

class Home_screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false,
            username:null
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount = () => {
        this.getUserFavorites();
        setTimeout(() => {
            this.sharedObj.footerInstance.setActive('timeline');
        },1);
        this.sharedObj.apiHelper.user.getUser(localStorage.getItem('user_id'),(res) => {
            this.setState({username: window.apiHelper.userInfo['username']})
        })
    };

    getUserFavorites = () => {
        this.sharedObj.apiHelper.home.get_favourites(localStorage.getItem('user_id'), (res) => {
            this.setState({realData: res, loaded: true});
        });
    };

    handleFinished = (data) => {
        if (data.round ? (data.round.order != 0) : (0)) return <div className='last-week'>
            <div className='hs_left-box'>
                <div><span className='text11-white'>Matchweek {data.round ? data.round.order : 'unknown'}</span></div>
                <div className='hs_left-middle-text'><span className='text11-white'>Success Rate xx%</span></div>
                <div className='hs_left-bottom-text'><Link to={`finished/league/${data.league.id}`}>
                    <div><span className='text11-white'>Check the bet</span></div>
                </Link></div>
            </div>
        </div>;
        else return <div className='last-week'/>
    };

    handleUpcoming = (data) => {
        return <div className='current-week'>
            <div className='hs_right-box'>
                <div><span className='text11-white'>Matchweek {data.round  ? (parseInt(data.round.order) + 1) : 'unknown'}</span></div>
                <div className='hs_left-middle-text'><span className='text11-white'>{data.round ? data.round.start_date : 'Unknown start date'}</span></div>
                <div className='hs_left-bottom-text'><Link to={`league/${data.league.id}`}>
                    <div><span className='text11-white'>Create bet</span></div>
                </Link></div>
            </div>
        </div>
    };

    handleFavouriteLeagues = () => {
        return <>{this.state.realData.map(data => {
            if (!data.round) data.round = null;
            return <div className='favourite-league' key={data.id + '_'}>
                <div className='favourite-league-container'>
                    {this.handleFinished(data)}
                    <div className='logo'><img className='league-logo' src={'./assets/images/Logos/'+data.league.logo+''}  alt=''/>
                        <div className='hs_league-name'><span className='text11'>{data.league.name}</span></div>
                    </div>
                    {this.handleUpcoming(data)}
                </div>
            </div>
        })}</>
    };


    handleFirstTimeLogin = () => {
        return <><Link to={`/countries`}>
            <div className='hs_select-box'><span className='text26-white'>Select your favourite leagues and start your journey</span></div>
        </Link></>
    };

    render() {

        if (this.state.loaded) return (
            <div className='betbook_screen' style={{padding: '60px 0'}}>
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

export default Home_screen;
