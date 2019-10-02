import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import Loader from "../components/other/Loader";

class FavouriteTeam extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            country_id: null,
            team_id: null,
            country_selected: false,
            club_selected: false,
            registered: false,
            user_fullname:'',
            countries: [],
            country_clubs: [],
            login:false
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.getAllCountries();
    }

    handleChangeFullName = (e) => {
        this.setState({user_fullname:e.target.value});
    };


    handleRegisterStepTwo = () => {
        this.sharedObj.apiHelper.user.register(this.state.username,this.state.password,this.state.email,this.state.user_fullname,this.state.country_id,this.state.team_id,(res)=>{
            localStorage.setItem('user_id', res[0]);
            res[1].forEach(league_id => {
                if(league_id != []){
                    this.sharedObj.apiHelper.user.favourite_team_leagues(res[0],league_id);}
            })
        });
        this.setState({login:true});
    };

    getAllCountries = () => {
        this.sharedObj.apiHelper.countries.getAll((res) => {
            this.setState({countries: res,loaded:true})
        })
    };

    getAllCLubsByCountryId = (country_id) => {
        this.sharedObj.apiHelper.teams.getByCountryId(country_id,res => {
            this.setState({country_clubs: res});
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

    handleError = () => {
        alert("Country and club not selected!");
    };

    render() {

        if (this.state.loaded) {
            if (this.state.login) {
                window.location.reload();
            }

            else return (<div className='betbook-screen-login'>
                    <div className='main-container'>
                        <div className='betbook-logo-box'><img src='./assets/images/betbook---logo.png' alt=''/></div>

                        <div className='register-container'>
                            <div className='bs-user-container'>
                                <div className='bs-username-text'>{<span className='text15-white'>Your name</span>}</div>
                                <input className='bs-username-box' type='text' value={this.state.user_fullname} onChange={this.handleChangeFullName}/>
                            </div>

                            <div className='bs-email-container'>
                                <div className='bs-email-text'>{<span className='text15-white'>Select your favourite national team</span>}</div>
                                {<select className='bs-email-box' value={this.state.country_id} onChange={this.handleCountryChange}>
                                        <option selected='selected' className={this.state.team_id != false ? 'hidden' : ''}>Tap to select</option>
                                        {this.state.countries.map(country => <option value ={country.id} key ={country.name + country.id}>{country.name}</option>)}
                                    </select>}
                            </div>

                            <div className={this.state.country_id ? 'bs-password-container' : 'bs-password-container hidden'}>
                                <div className='bs-password-text'>{
                                    <span className='text15-white'>Select your favourite club</span>}</div>
                                {<select className='bs-password-box' value={this.state.team_id} onChange={this.handleClubChange}>
                                        <option selected='selected' className={this.state.team_id != false ? 'hidden' : ''}>Tap to select</option>
                                        {this.state.country_clubs.length > 0 ? this.state.country_clubs.map(club => <option value ={club.id} key ={club.name + club.id}>{club.name}</option>) : ''}
                                    </select>}
                                    <div className='bs-text-under-password'><span className='text11-white'>By procceding further I agree with general terms & conditions. </span></div>
                            </div>

                            <div className='bs-create-account-box'
                                 onClick={this.state.registered ? () => this.handleRegisterStepTwo() : ()=>this.handleError()}>
                                <span className='text18-white'>Continue</span></div>
                            <Link to={`/login`}>
                                <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )
        } else return <Loader/>
    }
}
export default FavouriteTeam;
