import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';
import '../../../src/style/app.scss';
import Listing from '../components/listing';
import ListingItem from '../components/listingitem';
import CompetitionItem from '../components/competitionitem';
import Footer from '../components/footer';
import {Link} from "react-router-dom";

class Competition_Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            realData: [],
            loaded: false,
        };

        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.sharedObj.apiHelper.competitions.getAll(this.handleLeaguesLoaded);
        this.sharedObj.headerInstance.setTitle('Leagues');
        this.fetchData()
    }

    fetchData(){
        this.fetchCountries(`http://localhost/index.php/api/country`)
    }

    fetchCountries(input) {
        fetch(input)
            .then(res => res.json())
            .then(res => {
                let countries = Object.values(res);
                countries.slice(0,3).map((country) => {
                    this.fetchLeagues(`http://localhost/index.php/api/league/?country_id=`+country.id,country)
                })
            })
    }

    fetchLeagues (input,country){
        fetch(input)
            .then(res => res.json())
            .then(res => {
                let leagues = Object.values(res);
                this.setState({realData:[...this.state.realData,{country,leagues}]});
                this.setState({loaded:true})
            })
    }

    handleLeaguesLoaded = (data) => {
        this.setState({data});
    }

    render() {
        console.log(this.state.realData[0])
        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    {this.state.realData.map((data) => <div key={data.country.id + '_'}>
                        <div className='country-title-field'><span className='text18'>{data.country.name}</span>
                            <img className='flag' src={data.country.flag}/>
                        </div>
                        <Listing>
                            {
                                data.leagues.map((league) => <Link
                                    to={`/league/${league.id}/round/${league.current_round}`}>
                                    <ListingItem >
                                        <CompetitionItem league={league}/>
                                    </ListingItem>
                                </Link>)
                            }
                        </Listing>
                    </div>)}
                </div>
                <Footer/>
            </div>
        );
        else return <div>Loading ...</div>
    }
}

export default Competition_Listing;