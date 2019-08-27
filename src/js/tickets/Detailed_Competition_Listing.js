import React from 'react';
import '../../../src/style/betbook/detailed-competitionlisting.scss';
import {Link} from "react-router-dom";

class Detailed_Competition_Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            realData: [],
            loaded: false
        };
        this.sharedObj = props.sharedObj;
        this.countryId = window.location.hash.split('/').pop();
    }

    componentDidMount() {
            this.getAllLeagues();
            this.sharedObj.headerInstance.setTitle('England');
    }

    getAllLeagues(){
        this.sharedObj.apiHelper.leagues.getAll(this.countryId,(res) => this.setState({realData:res,loaded:true}));
    }

    render() {

        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    <div className='leagues-container'>
                        {this.state.realData.map((data) => <Link to={`/league/${data.id}`}><div key={data.id + '_'} className='league-field'>
                            <div className='logo-container'> <img className='logo' src={data.flag} /></div>
                            <div className='league-info'><span className='text12'>Matchweek 4 <br/> <span>{data.name}</span> <br/> 10 matches</span></div>
                        </div></Link>)}
                    </div>
                </div>
            </div>
        );
        else return <div>Loading ...</div>
    }
}

export default Detailed_Competition_Listing;