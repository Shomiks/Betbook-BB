import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';
import '../../../src/style/app.scss';
import Header from '../components/header';
import Listing from '../components/listing';
import ListingItem from '../components/listingitem';
import CompetitionItem from '../components/competitionitem';
import Footer from '../components/footer';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Competition_Listing extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            data: []
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.sharedObj.apiHelper.competitions.getAll(this.handleCompetitionsLoaded);
        this.sharedObj.headerInstance.setTitle('Competitions');
    }

    handleCompetitionsLoaded = (data) => {
        this.setState({data});
    }

    render() {
        return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    {this.state.data.map((data, i) => <div key={data.country.id + '_'}>
                        <div className='competition-title-field'><span className='text18'>{data.country.name}</span>
                        </div>
                        <Listing>
                            {
                                data.country.competitions.map((competition, j) =><Link to = {`/competition/${this.state.data[i].competition[j].id}`}>
                                        <ListingItem  competition={competition} >
                                            <CompetitionItem competitionname={competition}/>
                                        </ListingItem>
                                    </Link>)
                            }
                        </Listing>
                    </div>)}
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Competition_Listing;