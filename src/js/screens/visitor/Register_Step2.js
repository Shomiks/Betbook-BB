import React from 'react';
import '../../../style/betbook/user/register.scss'
import '../../../../src/style/app.scss'
import Loader from "../../components/other/Loader";
import BB_ButtonLink from "../../components/controls/BB_ButtonLink";
import BB_TextField from "../../components/controls/BB_TextField";
import BB_Select from "../../components/controls/BB_Select";
import BB_Button from "../../components/controls/BB_Button";

class Register_Step2 extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            country_id: 370,
            team_id: null,
            registered: false,
            user_fullName: '',
            validationFullName: null,
            countries: [],
            country_clubs: [],
        };
    }

    componentDidMount() {
        this.getAllCountries();
    }

    handleChangeFullName = (e) => {
        this.setState({user_fullName:e.target.value});
    };

    handleRegisterStepTwo = () => {
        window.apiHelper.user.register(this.props.username,this.props.password,this.props.email,this.state.user_fullName,this.state.country_id,this.state.team_id,(res) => {
            res[1].forEach(league_id => {
                if(league_id != []){
                    window.apiHelper.user.favourite_team_leagues(res[0],league_id);}
            });
            this.props.onComplete();
        });
    };

    getAllCountries = () => {
        window.apiHelper.countries.getAll((countries) => {
            window.apiHelper.teams.getByCountryId(this.state.country_id,country_clubs => {
            this.setState({countries,country_clubs,loaded:true,team_id: 7339})
             })
        })
    };

    getAllCLubsByCountryId = (country_id) => {
        window.apiHelper.teams.getByCountryId(country_id,res => {
            this.setState({country_clubs: res});
        })
    };

    handleCountryChange = (e) => {
        this.setState({country_id:e.target.value});
        this.getAllCLubsByCountryId(e.target.value);
    };

    handleClubChange = (event) => {
        let club_selected_id = event.target.value;
        this.setState({team_id:club_selected_id})
    };

    setValidation = () => {
       this.setState({validationFullName:'Please enter your name.'})
    };

    render() {

        if (this.state.loaded) {
                        return (
                        <>
                            <BB_TextField label = 'Your name' value={this.state.user_fullName} onChange={this.handleChangeFullName}
                                          error={this.state.validationFullName != null} helperText={this.state.validationFullName}/>
                            <BB_Select options={this.state.countries.map(country => {return {value: country.id, label: country.name, key: country.id}})}
                                       text='Select your favourite national team' onChange={this.handleCountryChange} defaultValue={this.state.country_id}/>
                            <BB_Select options={this.state.country_clubs.map(club => {return {value: club.id, label: club.name, key: club.id}})}
                                       text='Select your favourite club' onChange={this.handleClubChange} defaultValue='7339'/>
                            <BB_ButtonLink size='small' type='normal' text='By proceeding further I agree with general terms & conditions.'/>
                            <BB_Button label='Register' onClick={this.state.user_fullName == '' ? this.setValidation : this.handleRegisterStepTwo}/>
                            <BB_ButtonLink location='login' size='medium' type='outlined' text='I already have an account.'/>
                       </>
            )
        } else return <Loader/>
    }
}
export default Register_Step2;
