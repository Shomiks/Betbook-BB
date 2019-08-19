import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';
import '../../../src/style/app.scss';
import Header from '../components/header';
import Listing from '../components/listing';
import ListingItem from '../components/listingitem';
import CompetitionItem from '../components/competitionitem';
import Footer from '../components/footer';
import dataCompetitions from '../dataCompetitions';
import Week_games_Listing from "./Week_games_Listing";

class Competition_Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      data:dataCompetitions,
      currentCompetition: null,
      currentData:null
    };
  }

  handleCompetitionClick = (currentData) => {
    this.setState({currentData:currentData});
  }

  render() {

      if(this.state.currentData){
      return <Week_games_Listing data={this.state.currentData} />
    }

    return (
        <div className='betbook_screen'>
            <Header competition={true} title='Competitions'/>
          <div className='main-content'>
            {this.state.data.map((data,i) => <div key={data.country.id + '_'}>
              <div className='competition-title-field'><span className='text18'>{data.country.name}</span></div>
              <Listing>
                {
                  data.country.competitions.map((competition,j) => <ListingItem competition={competition} onClick={() => {this.handleCompetitionClick(this.state.data[i].competition[j])}} key={competition + j}>
                    <CompetitionItem competitionname={competition} />
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