import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import Loader from "../components/Loader";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            username: '',
            password: '',
            email: '',
            country_id: null,
            team_id: null,
            validUsername: true,
            validPassword: true,
            validEmail: true,
            favourites: false,
            country_selected: false,
            club_selected: false,
            clubs_fetched: false,
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

    handleChangeUsername = (e) => {
        this.setState({username: e.target.value});
    };

    handleChangePassword = (e) => {
        this.setState({password: e.target.value});
    };

    handleChangeEmail = (e) => {
        this.setState({email: e.target.value});
    };

    handleChangeFullName = (e) => {
        this.setState({user_fullname:e.target.value});
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    handleRegisterStepOne = () => {
        if (this.state.username != '' && this.state.password != '') {
            this.setState({validUsername: true, validPassword: true});
            if (!this.validateEmail(this.state.email)) {
                alert('invalid email!');
                this.setState({validEmail: false})
            } else {
                this.sharedObj.apiHelper.user.validateRegister(this.state.username, this.state.email, (result) => {
                    this.setState({validEmail:false});
                    if (result == 'empty_user') {
                        alert('empty username!');
                    } else if (result == 'empty_email') {
                        alert('empty email!');
                    } else if (result == 'empty_user_email') {
                        alert('empty username and email!');
                    } else if (result[0] == false && result[1] != false) {
                        alert('email already taken!');
                    } else if (result[0] != false && result[1] == false) {
                        this.setState({validEmail: true,validUsername:false});
                        alert('username already taken!');
                    } else if (result[0] && result[1]) {
                        this.setState({validEmail: false,validUsername:false});
                        alert('email and username already taken!');
                    } else if (!result[0] && !result[1]){
                        this.setState({favourites: true,validEmail:true});
                    }
                    else alert ('bad');
                })

            }
        } else {
            if(this.state.email == ''){
                this.setState({validEmail:false});
            }
            if(this.state.username == '' && this.state.password != ''){
                alert('Empty username!');
                this.setState({validUsername: false});
            }
            if(this.state.username != '' && this.state.password == ''){
                alert('Empty password!');
                this.setState({validPassword: false,validEmail:false});
            }
            if(this.state.username == '' && this.state.password == ''){
                alert('Empty username and password!');
                this.setState({validUsername:false, validPassword:false});
            }
        }
    };

    handleRegisterStepTwo = () => {
        this.sharedObj.apiHelper.user.register(this.state.username,this.state.password,this.state.email,this.state.user_fullname,this.state.country_id,this.state.team_id,(res)=>{
            localStorage.setItem('user_id', res[0]);
            res[1].forEach(league_id => {
                this.sharedObj.apiHelper.user.favourite_team_leagues(res[0],league_id);
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

    handleError = () => {
        alert("Country and club not selected!");
    };

    render() {

        if (this.state.loaded) {

            if (this.state.login) {
                window.location.hash = 'home';
                return <Redirect to='/home'/>
            }

            else return (<div className='betbook-screen-login'>
                    <div className='main-container'>
                        <div className='betbook-logo-box'><img src='./assets/images/betbook---logo.png' alt=''/></div>

                    <div className='register-container'>
                        <div className='bs-user-container'>
                            <div className='bs-username-text'>{this.state.favourites ?
                                <span className='text15-white'>Your name</span> :
                                <span className='text15-white'>Username</span>}
                            </div>
                            <input
                                className={this.state.validUsername ? 'bs-username-box' : 'bs-username-box bs-username-box-error'}
                                type='text' value={this.state.favourites ? this.state.user_fullname : this.state.username} onChange={this.state.favourites ? this.handleChangeFullName : this.handleChangeUsername}/>
                        </div>


                        <div className='bs-email-container'>
                            <div className='bs-email-text'>{this.state.favourites ?
                                <span className='text15-white'>Select your favourite national team</span> :
                                <span className='text15-white'>Email</span>}
                            </div>

                            {this.state.favourites ? <select className='bs-email-box' value={this.state.country_id} onChange={this.handleCountryChange}>
                                    <option selected='selected' className={this.state.team_id != false ? 'hidden' : ''}>Tap to select</option>
                                    {this.state.countries.map(country => <option value ={country.id} key ={country.name + country.id}>{country.name}</option>)}
                                </select>
                                : <><input
                                    className={this.state.validEmail ? 'bs-email-box' : 'bs-email-box bs-email-box-error'}
                                    value={this.state.email} onChange={this.handleChangeEmail} type='email'/></>
                            }
                        </div>


                        <div className={this.state.country_id || !this.state.favourites ? 'bs-password-container' : 'bs-password-container hidden'}>
                            <div className='bs-password-text'>{this.state.favourites ?
                                <span className='text15-white'>Select your favourite club</span> :
                                <span className='text15-white'>Password</span>}</div>

                            {this.state.favourites ? <select className='bs-password-box' value={this.state.team_id} onChange={this.handleClubChange}>
                                    <option selected='selected' className={this.state.team_id != false ? 'hidden' : ''}>Tap to select</option>
                                    {this.state.country_clubs.length > 0 ? this.state.country_clubs.map(club => <option value ={club.id} key ={club.name + club.id}>{club.name}</option>) : ''}
                                </select>
                                : <><input
                                    className={this.state.validPassword ? 'bs-password-box' : 'bs-password-box bs-password-box-error'}
                                    type='password' value={this.state.password}
                                    onChange={this.handleChangePassword}/></>}

                            <div className='bs-text-under-password'><span className='text11-white'>By procceding further I agree with general terms & conditions. </span></div>
                        </div>


                        <div className='bs-create-account-box'
                             onClick={!this.state.favourites ? () => this.handleRegisterStepOne() : (this.state.registered ? () => this.handleRegisterStepTwo() : ()=>this.handleError())}>
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
export default Register;
