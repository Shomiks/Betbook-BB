import React from 'react'
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Header from '../components/header'
import hsData from "../data/hsData"
import {Link} from "react-router-dom";

class Home_screen extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            previousData: hsData,
            data: hsData,
            currentData: null,
            loaded:false
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        console.log('testttt');
        this.fetchData()
    }

    fetchData(){
        this.fetchHome(`http://localhost/index.php/api/user_favourite_league`)
    }

    fetchHome(input){
        fetch(input)
            .then(res => res.json())
            .then(res => {
                this.setState({currentData:Object.values(res),loaded:true})
            })
    }

    render() {
        console.log(this.state.currentData)
            if(this.state.loaded) return (
                <div className='betbook_screen'>
                    <Header title='Home screen'/>
                    <div className='main-content'>
                        {this.state.currentData.map(data => {
                            return <div className='favourite-league'>
                                <div className='last-week'>
                                    <div>Matchweek {data.round.week_number - 1}</div>
                                    <div>Success Rate xx%</div>
                                    <div> <Link to = {`league/${data.league.id}/round/${data.round.week_number - 1}`}><button>Check the bet</button></Link></div>
                                </div>
                                <div className='logo'><img className='league-logo' src ={data.league.flag}/></div>
                                <div className='current-week'>
                                    <div>Matchweek {data.round.week_number}</div>
                                    <div>Start of the week</div>
                                    <div> <Link to = {`league/${data.league.id}/round/${data.round.week_number}`}><button>Create bet</button></Link></div>

                                </div>
                            </div>
                        })}
                    </div>
                </div>
            )
        else return <div>Loading...</div>
        }
}

export default Home_screen;
