import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import Loader from "../components/loader";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            user: '',
            country_id: null,
            team_id: null,
            clubs_fetched: false,
            countries: [],
            country_clubs: []
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.getAllCountries();
        this.setState({user: window.apiHelper.userInfo.name, country_id: window.apiHelper.userInfo.country.id, team_id: window.apiHelper.userInfo.club.id})
    }

    handleChangeFullName = (e) => {
        this.setState({user:e.target.value});

    };

    getAllCountries = () => {
        this.sharedObj.apiHelper.countries.getAll((res) => {
            this.setState({countries: res,loaded:true})
        })
    };

    getAllCLubsByCountryId = (country_id) => {
        this.sharedObj.apiHelper.teams.getByCountryId(country_id,res => {
            this.setState({country_clubs: res,clubs_fetched:true});
        })
    };

    handleCountryChange = (event) => {
        this.setState({country_id:event.target.value});
        this.getAllCLubsByCountryId(event.target.value);
    };

    handleClubChange = (event) => {
        let club_selected_id = event.target.value;
        this.setState({team_id:club_selected_id,registered:true})
    };

    handleSave = () => {
      this.sharedObj.apiHelper.settings.updateInfo(localStorage.getItem('user_id'),this.state.country_id, this.state.team_id, this.state.user);
      alert("Successfully!")
    };


    render() {

        if (this.state.loaded) {

             return (<div className='betbook-screen-login'>
                    <div className='main-container'>
                        <div className='register-container'>
                            <div className='bs-user-container'>
                                <div className='bs-username-text'><span className='text15-white'>Your name</span></div>
                                <input
                                    className='bs-username-box'
                                    type='text' value={this.state.user} onChange={this.handleChangeFullName}/>
                            </div>

                            <div className='bs-email-container'>
                                <div className='bs-email-text'>
                                    <span className='text15-white'>Select your favourite national team</span>
                                </div>
                                <select className='bs-email-box' value={this.state.country_id} onChange={this.handleCountryChange} defaultValue={window.apiHelper.userInfo.country.name}>
                                    <option selected="selected">{window.apiHelper.userInfo.country.name}</option>
                                        {this.state.countries.map(country => <option value ={country.id} key ={country.name + country.id}>{country.name}</option>)}
                                </select>
                            </div>

                            <div className='bs-password-container'>
                                <div className='bs-password-text'>
                                    <span className='text15-white'>Select your favourite club</span>
                                </div>
                                <select className='bs-password-box' value={this.state.team_id} onChange={this.handleClubChange} defaultValue={window.apiHelper.userInfo.club.name}>
                                    <option selected="selected">{window.apiHelper.userInfo.club.name}</option>
                                        {this.state.country_clubs.length > 0 ? this.state.country_clubs.map(club => <option value ={club.id} key ={club.name + club.id}>{club.name}</option>) : ''}
                                </select>
                            </div>

                            <div className='bs-create-account-box'
                                 onClick={() => this.handleSave()}>
                                <span className='text18-white'>Save changes</span></div>
                        </div>
                    </div>
                </div>
            )
        } else return <Loader/>
    }
}
export default Register;
