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
            <div>Matchweek 4</div>
            <div>Success Rate xx%</div>
            <div> <Link to = {`league/${data.league.id}/round/4`}><button>Check the bet</button></Link></div>
        </div>;
        else return <div className='last-week'/>
    }

    handleCurrentMatchWeek(data){
        return <div className='current-week'>
            <div>Matchweek 4</div>
            <div>Start of the week</div>
            <div> <Link to = {`league/${data.league.id}/round/4`}><button>Create bet</button></Link></div>
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

    render() {

        console.log()
        if(this.state.loaded) return (
                <div className='betbook_screen'>
                    <div className='betbook-logo'/>
                    <div className='welcome-text'> {this.state.realData.user_favourite_leagues ? 'My Leagues' : 'Welcome Alexander!'}</div>
                    <div className='main-content'>
                        {this.handleFavouriteLeagues()}
                    </div>
                </div>
            );
        else return <div>Loading...</div>
        }
}

export default Home_screen;
