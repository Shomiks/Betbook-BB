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
        this.countryId = props.match.params.countryid;
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
                            <div className='logo-container'> <img className='logo' src={'./assets/images/Logos/'+data.logo+''} /></div>
                            <div className='leagues-info'>
                            <div className='league-info'><span className='text11-grey'>Matchweek 4</span></div>
                            <div className='dataname-info'><span className='text15-white'>{data.league}</span></div>
                            <div className='number-matches-info'><span className='text11-grey'>10 matches</span></div>
                            </div>
                        </div></Link>)}
                    </div>
                </div>
            </div>
        );
        else return <div>Loading ...</div>
    }
}

export default Detailed_Competition_Listing;