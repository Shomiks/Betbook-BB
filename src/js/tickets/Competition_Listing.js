import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';


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
        this.getAllCountries();
        this.sharedObj.headerInstance.setTitle('Leagues');
    }

    getAllCountries() {
        this.sharedObj.apiHelper.countries.getAll((res) => this.setState({realData: res, loaded: true}));
    }

    render() {

        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    <div className='countries-container'>
                        <div className='favorites-field'>
                            <div className='favorites-position'><span className='text11-grey'>Favorites</span></div>
                        </div>
                        {this.state.realData.map((data) => <Link to={`country/${data.id}`}>
                            <div key={data.id + '_'} className='country-field'>
                                <div className='flag-container'><img className='flag' src={'./assets/images/Countries/'+data.flag+''}/></div>
                                <div className='country-info'>
                                    <div className='leagues-info'><span className='text11-grey'>14 Leagues</span></div>
                                    <div className='dataname-info'><span className='text15-white'>{data.name}</span></div>
                                    <div className='number-matches-info'><span className='text11-grey'>154 matches</span></div>
                                </div>
                            </div>
                        </Link>)}
                    </div>
                </div>
                <Footer/>
            </div>
        );
        else return <div>Loading ...</div>
    }
}

export default Competition_Listing;