import React from 'react';
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Week from '../../../src/js/components/week.js'
import Header from '../components/header';
import Week_games_Listing from "./Week_games_Listing";



class Home_screen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }

  }


  render(){


    return (
        <div className='betbook_screen'>
          <div className='main-content-1'>

            <div className='active-bids-field'>
              <div className='hs_league-week-header'>
                <div className='hs_league-tittle'><span className='text17'>Premier League W3</span></div>
                <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
              </div>
              <Week_games_Listing/>
            </div>

            <div className='previous-bids-field'>
              <div className='hs_league-week-header'>
                <div className='hs_league-tittle'><span className='text17'>Calcio League W3</span></div>
                <div className='hs_chevron'><img src='./assets/images/arrow_right.png'/></div>
              </div>
              <Week_games_Listing/>
            </div>
          </div>
        </div>
    );
  }
}

export default Home_screen;
