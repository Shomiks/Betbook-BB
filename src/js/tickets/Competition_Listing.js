import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';
import {Link} from "react-router-dom";
import Loader from "../components/loader";

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
        this.getAllCountries();
    }

    getAllCountries() {
        this.sharedObj.apiHelper.countries.getAll((res) =>{
            this.setState({realData: res, loaded: true});
            this.sharedObj.headerInstance.setTitle('Leagues');
            this.sharedObj.headerInstance.setItemRight('star');
            this.sharedObj.footerInstance.setActive('ball');
     })
    }

    render() {

        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    <div className='countries-container'>
                        <div className='favourites'><span className='text11-grey'> Favorites </span></div>
                        {this.state.realData.map((data) => <Link to={`country/${data.id}`} key={data.id + data.name}>
                            <div className='country-field'>
                                <div className='flag-container'><img className='flag' src={'./assets/images/Countries/'+data.flag+''} alt=''/></div>
                                <div className='country-info'>
                                    <div className='leagues-info'><span className='text11-grey'>{data.leagues_count} Leagues</span></div>
                                    <div className='dataname-info'><span className='text15-white'>{data.name}</span></div>
                                    <div className='number-matches-info'><span className='text11-grey'>{data.fixtures_count} Matches</span></div>
                                </div>
                            </div>
                        </Link>)}
                    </div>
                </div>

            </div>
        );
        else {
            return <Loader/>
        }    }
}

export default Competition_Listing;