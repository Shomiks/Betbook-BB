import React from 'react';
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Week from '../../../src/js/components/week.js'
import Header from '../components/header';
import Week_games_Listing from "./Week_games_Listing";

import data from '../data'
import hsData from "../hsData";
import dataCompetitions from "../dataCompetitions";



class Home_screen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: hsData,
      currentData:null
    }
  }

  changeData = (data) =>{
    this.setState({data})
  }

  handleWeekClick = (currentData) => {
    this.setState({currentData:currentData});
  }

  render(){

    console.log(this.state.data)

    if(this.state.currentData !== null){
      return <Week data={this.state.currentData} />
    }

    return (
        <div className='betbook_screen'>
          <Header title='Home screen'/>
          <div className='main-content'>
            <div className='active-bids-field'><span className='text14'>Active bids</span>
               {this.state.data.map((gameweek) => <div className='hs_league-week-header'>
                <div className='hs_league-tittle' onClick={() => {this.handleWeekClick(this.state.data)}}><span className='text17'>{gameweek.name + " matchday " + gameweek.currentWeek}</span></div>
                <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
                 <Week data={this.state.data} onChangeData={this.changeData} />
              </div>)}
            </div>

            {/*<div className='previous-bids-field'><span className='text14'>Previous bids</span>*/}
            {/*  <div className='hs_league-week-header'>*/}
            {/*    <div className='hs_league-tittle'><span className='text17'>Calcio League W3</span></div>*/}
            {/*    <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>*/}
            {/*  </div>*/}
            {/*  /!*<Week_games_Listing data={this.state.data} onChangePera={this.changeData}/>*!/*/}
            {/*</div>*/}
        </div>
        </div>
    );
  }
}

export default Home_screen;
