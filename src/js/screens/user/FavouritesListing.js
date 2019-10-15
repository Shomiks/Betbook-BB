import React from 'react'
import '../../../style/betbook/home_screen.scss'
import {Link} from "react-router-dom";
import Loader from "../../components/other/Loader";
import FooterContainer from "../../components/containers/FooterContainer";
import BB_HS_League_Logo from "../../components/other/BB_HS_League_Logo";

class FavouritesListing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded: false,
            username: null
        };
    }

    componentDidMount = () => {
        this.getUserFavorites();
    };

    getUserFavorites = () => {
        if (window.apiHelper.userInfo) {
            window.apiHelper.favourites.getFavourites(window.apiHelper.userInfo.id, (res) => {
                this.setState({username: window.apiHelper.userInfo['username'], realData: res, loaded: true})
            });
        }
    };

    handleFinished = (data) => {
         return <Link to={`finished/league/${data.league.id}`} className='last-week'>
            <div className='hs_left-box'>
                <div className='hs_left-middle-text'><span className='text11-white'>Success Rate xx%</span></div>
                <div className='hs_left-bottom-text'>
                    <div><span className='text11-white'>Check the bet</span></div>
                </div>
            </div>
        </Link>;
    };

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
                    <BB_HS_League_Logo data={data}/>
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
            <FooterContainer footerProps={{activeItem: 'star'}}>
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
            </FooterContainer>
        );
        else {
            return <Loader/>
        }
    }
}

export default FavouritesListing;
