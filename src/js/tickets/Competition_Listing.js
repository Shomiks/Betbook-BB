import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';
import '../../../src/style/app.scss';
import Header from '../components/header';
import Listing from '../components/listing';
import ListingItem from '../components/listingitem';
import CompetitionItem from '../components/competitionitem';
import Footer from '../components/footer';
import dataCompetitions from '../dataCompetitions'
import Match_Details from "./Match_Details";
import Home_screen from "./home_screen";
import Week_games_Listing from "./Week_games_Listing";

class Competition_Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:dataCompetitions,
      currentCompetition: null
    };
  }

  handleCompetitionClick = (competition) => {
      // console.log(competition)
    this.setState({currentCompetition:competition});
  }

  render() {
      // console.log(this.state)
    if(this.state.currentCompetition){
        // console.log(this.state.data)
      return <Week_games_Listing data={this.state.data} />
    }

    return (
        <div className='betbook_screen'>
          <Header competition={true} title='Competitions'/>
          <div className='main-content'>
            {this.state.data.map((country) => <div key={country.country.id + '_'}>
              <div className='competition-title-field'><span className='text18'>{country.country.name}</span></div>
              <Listing>
                {
                  country.competition.map((competition) => <ListingItem competition={competition} onClick={(competition) => {this.handleCompetitionClick(competition)}} key={competition.id + '_'}>
                    <CompetitionItem competitionname={competition.name} key={competition.id + '_'}/>
                  </ListingItem>)
                }
              </Listing>
            </div>)}
          </div>
          <Footer title='Competition'/>
        </div>
    );
  }
}

export default Competition_Listing;