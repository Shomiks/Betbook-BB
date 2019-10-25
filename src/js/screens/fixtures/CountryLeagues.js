import React from 'react';
import '../../../style/betbook/league_short.scss';
import Loader from "../../components/other/Loader";
import FullContainer from "../../components/containers/FullContainer";
import LeagueShort from "../../components/objectcontrols/LeagueShort";

class CountryLeagues extends React.Component {

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
        window.apiHelper.leagues.getByCountryId(this.countryId,(res) => {
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
                        {this.state.realData.leagues.map((data) => <LeagueShort {...data}/>)}
                    </div>
                </div>
            </FullContainer>
        );
        else {
            return <Loader/>
        }
    }
}

export default CountryLeagues;