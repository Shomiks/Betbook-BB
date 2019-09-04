import React from 'react'
import '../../style/betbook/home_screen.scss'
import {Link} from "react-router-dom";

class Home_screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            realData: null,
            loaded:false
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.getUserFavorites();
    }

    getUserFavorites(){
        this.sharedObj.apiHelper.home(1,(res) => {
            this.setState({realData:res,loaded:true})
        });
    }

    handlePreviousMatchWeek(data){
        if(1) return  <div className='last-week'>
            <div><span className='text11-white'>Matchweek 3</span></div>
            <div><span className='text11-white'>Success Rate xx%</span></div>
            <div> <Link to = {`league/${data.league.id}/round/4`}><div><span className='text11-white'>Check the bet</span></div></Link></div>
        </div>;
        else return <div className='last-week'/>
    }

    handleCurrentMatchWeek(data){
        return <div className='current-week'>
            <div><span className='text11-white'>Matchweek 4</span></div>
            <div><span className='text11-white'>Start of the week</span></div>
            <div> <Link to = {`league/${data.league.id}/round/4`}><button><span className='text11-white'>Create bet</span></button></Link></div>
        </div>
    }

    handleFavouriteLeagues(){
        return  <>{this.state.realData.map(data => {
                if(!data.round) data.round=null;
                return <div className='favourite-league' key={data.id + '_'}>
                    <div className='favourite-league-container'>
                        {this.handlePreviousMatchWeek(data)}
                        <div className='logo'><img className='league-logo' src ={'./assets/images/Logos/'+ data.league.logo}/><br/><span>{data.league.name}</span></div>
                        {this.handleCurrentMatchWeek(data)}
                    </div>
                </div>
            })}</>
    }

    handleFirstTimeLogin(){
        return <><div><div className='hs_select-box'><span className='text26-white'>Select your favourite leagues and start your journey</span></div></div></>
    }

    render() {

        console.log(this.state.realData)
        if(this.state.loaded) return (
                <div className='betbook_screen'>
                    <div className='betbook-logo'/>
                    {!this.state.realData.user_favourite_leagues ? <div className='main-content'>
                        <div className='welcome-text'> My Leagues</div>
                        {this.handleFavouriteLeagues()}
                    </div> : <div className='main-content'>
                        <div className='text17-white'>Welcome Alexander!</div>
                        {this.handleFirstTimeLogin()}
                    </div>}
                </div>

            );
        else return <div>Loading...</div>
        }
}

export default Home_screen;
