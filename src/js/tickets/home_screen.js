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
        this.sharedObj.headerInstance.setTitle('My Leagues');
        this.getUserFavorites();
    }

    getUserFavorites(){
        this.sharedObj.apiHelper.home(1,(res) => {
            this.setState({realData:res,loaded:true})
        });
    }

    handlePreviousMatchWeek(data){
        if(data.round.order > 0) return  <div className='last-week'>
            <div>Matchweek {data.round.order}</div>
            <div>Success Rate xx%</div>
            <div> <Link to = {`league/${data.league.id}/round/${data.round.order}`}><button>Check the bet</button></Link></div>
        </div>;
        return <div className='last-week'/>
    }

    handleCurrentMatchWeek(data){
        let matchweek = parseInt(data.round.order) + 1;
        return <div className='current-week'>
            <div>Matchweek {matchweek}</div>
            <div>Start of the week</div>
            <div> <Link to = {`league/${data.league.id}/round/${matchweek}`}><button>Create bet</button></Link></div>
        </div>
    }

    render() {

        if(this.state.loaded) return (
                <div className='betbook_screen'>
                    <div className='main-content'>
                        {this.state.realData.map(data => {
                            if(!data.round) data.round=null;
                            return <div className='favourite-league' key={data.id + '_'}>
                                <div className='favourite-league-container'>
                                    {this.handlePreviousMatchWeek(data)}
                                <div className='logo'><img className='league-logo' src ={'./assets/images/Logos/'+ data.league.logo}/><br/><span>{data.league.name}</span></div>
                                    {this.handleCurrentMatchWeek(data)}
                            </div>
                            </div>
                        })}
                    </div>
                </div>
            );
        else return <div>Loading...</div>
        }
}

export default Home_screen;
