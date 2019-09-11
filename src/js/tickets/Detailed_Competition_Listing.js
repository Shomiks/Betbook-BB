import React from 'react';
import '../../../src/style/betbook/detailed-competitionlisting.scss';
import {Link} from "react-router-dom";
import Loader from "../components/loader";

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
    }

    getAllLeagues(){
        this.sharedObj.apiHelper.leagues.getAll(this.countryId,(res) => {
            this.setState({realData: res, loaded: true});
            this.sharedObj.headerInstance.setTitle(this.state.realData.name);
            this.sharedObj.footerInstance.setActive('ball');
        });
    }

    handleImgError = (league) => {
        league.logo = 'alternative-logo.png';
        this.forceUpdate();
    };

    render() {

        console.log(this.state.realData)


        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    <div className='leagues-container'>
                        {this.state.realData.leagues.map((data) => <Link to={`/league/${data.id}`} key={data.id + '_'}><div  className='league-field'>
                            <div className='logo-container'>
                                <img className='logo' src={'./assets/images/Logos/'+data.logo} onError={() => this.handleImgError(data) } />
                            </div>
                            <div className='leagues-info'>
                            <div className='league-info'><span className='text11-grey'>Matchweek 4</span></div>
                            <div className='dataname-info'><span className='text15-white'>{data.name}</span></div>
                            <div className='number-matches-info'><span className='text11-grey'>{data.fixtures_count} matches</span></div>
                            </div>
                        </div></Link>)}
                    </div>
                </div>
            </div>
        );
        else {
            return <Loader/>
        }
    }
}

export default Detailed_Competition_Listing;