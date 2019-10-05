import React from 'react';
import '../../../src/style/betbook/detailed-competitionlisting.scss';
import {Link} from "react-router-dom";
import Loader from "../components/other/Loader";
import FullContainer from "../components/containers/FullContainer";

class Detailed_Competition_Listing extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            realData: [],
            loaded: false
        };
        this.countryId = props.match.params.countryid;
    }

    componentDidMount() {
            this.getAllLeagues();
    }

    getAllLeagues(){
        window.apiHelper.leagues.getAll(this.countryId,(res) => {
            this.setState({realData: res, loaded: true});
        });
    }

    handleImgError = (league) => {
        league.logo = 'alternative-logo.png';
        this.forceUpdate();
    };

    render() {

        if (this.state.loaded) return (
            <FullContainer  footerProps={{activeItem: 'ball'}} headerProps={{title:this.state.realData.name}}>
                <div className='main-content'>
                    <div className='leagues-container'>
                        {this.state.realData.leagues.map((data) => <Link to={`/league/${data.id}`} key={data.id + '_'}><div  className='league-field'>
                            <div className='logo-container'>
                                <img className='logo' src={'./assets/images/Logos/'+data.logo} onError={() => this.handleImgError(data) } />
                            </div>
                            <div className='leagues-info'>
                            <div className='dataname-info'><span className='text18-white'>{data.name}</span></div>
                            <div className='number-matches-info'><span className='text13-grey'>{data.fixtures_count} matches</span></div>
                            </div>
                        </div></Link>)}
                    </div>
                </div>
            </FullContainer>
        );
        else {
            return <Loader/>
        }
    }
}

export default Detailed_Competition_Listing;