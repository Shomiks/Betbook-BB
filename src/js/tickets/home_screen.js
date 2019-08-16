import React from 'react';
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Week from '../../../src/js/components/week.js'
import Header from '../components/header';
import Week_games_Listing from "./Week_games_Listing";

import data from '../data'



class Home_screen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      data: data
    }

  }

  changeData = (data) =>{
    this.setState({data})
  }


  render(){

    return (
        <div className='betbook_screen'>
          <Header title='Home screen'/>
          <div className='main-content'>
            <div className='hs_league-week-header'>
              <div className='hs_league-tittle'><span className='text17'>Premier League W1</span></div>
              <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
            </div>
            <div className='active-bids-field'>
              <Week_games_Listing data={this.state.data} onChangePera={this.changeData} />
            </div>
            <div className='hs_league-week-header'>
            <div className='hs_league-tittle'><span className='text17'>Calcio League W3</span></div>
            <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
            </div>
            <div className='previous-bids-field'>
              <Week_games_Listing data={this.state.data} onChangePera={this.changeData}/>
            </div>
        </div>
        </div>
    );
  }
}

export default Home_screen;
