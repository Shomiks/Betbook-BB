import React from 'react';
import '../../style/betbook/home_screen.scss'
import '../../../src/style/app.scss'
import Week from '../../../src/js/components/week.js'
import Header from '../components/header';



class Home_screen extends React.Component {

  constructor(props){
    super(props);

    this.state = {
    }

  }


  render(){


    return (
        <div className='betbook_screen'>
          <Header title='Home screen'></Header>
          <div className='main-content'>
            <div className='hs_league-week-header'>
              <div className='hs_league-tittle'><span className='text17'>Premier League W3</span></div>
              <div className='hs_chevron'><img src='./assets/images/arrow_right.png'></img></div>
            </div>
            <div className='active-bids-field'>
              <Week/>
            </div>
            <div className='hs_league-week-header'>
            <div className='hs_league-tittle'><span className='text17'>Calcio League W3</span></div>
            <div className='hs_chevron'><img src='./assets/images/arrow_right.png'></img></div>
            </div>
            <div className='previous-bids-field'>
              <Week/>
            </div>
        </div>
        </div>
    );
  }
}

export default Home_screen;
