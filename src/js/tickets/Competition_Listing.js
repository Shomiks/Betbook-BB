import React from 'react';
import '../../../src/style/betbook/competitionlisting.scss';
import '../../../src/style/app.scss';

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

    getAllCountries(){
        this.sharedObj.apiHelper.countries.getAll((res) => this.setState({realData:res,loaded:true}));
    }

      render() {

        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    <div className='countries-container'>
                    {this.state.realData.map((data) => <Link to={`country/${data.id}`}><div key={data.id + '_'} className='country-field'>
                        <div className='flag-container'> <img className='flag' src={data.flag} /></div>
                        <div className='country-info'><span className='text12'>14 Leagues <br/> <span>{data.name}</span> <br/> 154 matches</span></div>
                    </div></Link>)}
                 </div>
                </div>
                <Footer/>
            </div>
        );
        else return <div>Loading ...</div>
    }
}

export default Competition_Listing;