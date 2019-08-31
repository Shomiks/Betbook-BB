import React from 'react';
import '../../../src/style/betbook/homelisting.scss';
import '../../../src/style/app.scss';
import Header from '../components/header';
import Listing from '../components/listing';
import ListingItem from '../components/listingitem';
import CompetitionItem from '../components/competitionitem';
import Footer from '../components/footer';

class Home_Listing extends React.Component {

  constructor(props) {
    super(props);

    this.state = {};

  }

  render() {

    return (
        <div className='betbook_screen'>
          <Header competition={true} title='Competition'/>
          <div className='main-content-1'>
            <div className='competition-title-field'><span className='text18'> International Competitions </span>
            </div>
            <Listing>
              <ListingItem>
                <CompetitionItem competitionname='Champions League '/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Europe League'/>
              </ListingItem>
            </Listing>
            <div className='competition-title-field'><span className='text18'> England </span></div>
            <Listing>
              <ListingItem>
                <CompetitionItem competitionname='Premier League'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Championship'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Other...'/>
              </ListingItem>
            </Listing>
            <div className='competition-title-field'><span className='text18'> Spain </span></div>
            <Listing>
              <ListingItem>
                <CompetitionItem competitionname='La Liga'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Segunda Division'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Other...'/>
              </ListingItem>
            </Listing>
            <div className='competition-title-field'><span className='text18'> Italy </span></div>
            <Listing>
              <ListingItem>
                <CompetitionItem competitionname='Serie A'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Serie B'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Other...'/>
              </ListingItem>
           </Listing>
            <div className='competition-title-field'><span className='text18'> Germany </span></div>
            <Listing>
              <ListingItem>
                <CompetitionItem competitionname='Bundesliga'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='2.Bundesliga'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Other...'/>
              </ListingItem>
            </Listing>
            <div className='competition-title-field'><span className='text18'> France </span></div>
            <Listing>
              <ListingItem>
                <CompetitionItem competitionname='Ligue 1'/>
              </ListingItem>
              <ListingItem>
                <CompetitionItem competitionname='Ligue 2'/>
              </ListingItem>
               </Listing>
          </div>
          <Footer title='Competition'/>
        </div>
    );
  }
}

export default Home_Listing;
