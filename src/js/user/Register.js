import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import {Link, Redirect} from "react-router-dom";
import Select from 'react-select'

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            username: '',
            password: '',
            email: '',
            validUsername: true,
            validPassword: true,
            validEmail: true,
            favourites: true,
            country_selected: 'Tap to select',
            club_selected:'Tap to select',
            clubs_fatched: false,
            registered: false,
            countries: null,
            country_clubs: null
        };
        this.sharedObj = props.sharedObj;
        this.options = [
            {value: 'chocolate', label: 'Chocolate'},
            {value: 'strawberry', label: 'Strawberry'},
            {value: 'vanilla', label: 'Vanilla'}
        ]
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
        this.setState({email: e.target.value})
    };

    validateEmail = (email) => {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    };

    handleRegister = () => {
        if (this.state.username != '' && this.state.password != '') {
            this.setState({validUsername: true, validPassword: true});
            if (!this.validateEmail(this.state.email)) {
                alert('invalid email!');
                this.setState({validEmail: false})
            } else {
                this.setState({validEmail: true});
                this.sharedObj.apiHelper.register.validateRegister(this.state.username, this.state.email, (result) => {

                    if (result == 'empty_user') {
                        alert('empty username!');
                    } else if (result == 'empty_email') {
                        alert('empty email!');
                    } else if (result == 'empty_user_email') {
                        alert('empty username and email!');
                    } else if (result[0] == false && result[1] != false) {
                        alert('email already taken!');
                    } else if (result[0] != false && result[1] == false) {
                        alert('username already taken!');
                    } else if (result[0] && result[1]) {
                        this.setState({validEmail: false});
                        alert('email and username already taken!');
                    } else if (!result[0] && !result[1]) this.sharedObj.apiHelper.register.register(this.state.username, this.state.email, this.state.password, (res) => {
                        alert('WELCOME!');
                        this.setState({favourites: true});
                        localStorage.setItem('user_id', res)
                    });
                    else console.log('bad')
                })

            }
        } else {
            alert('empty fields!');
            this.setState({validUsername: false, validPassword: false, validEmail: false})
        }
    };

    getAllCountries = () => {
        this.sharedObj.apiHelper.countries.getAll((res) => {
            this.setState({countries: res,loaded:true})
        })
    };

    handleGetClubs = () => {
        let selected_country_id = null;
        this.state.countries.forEach(country=>{
            if(country.name == this.state.country_selected) selected_country_id = country.id;
        });
        this.getAllCLubsByCountryId(selected_country_id);
    }

    getAllCLubsByCountryId = (country_id) => {
        this.sharedObj.apiHelper.teams.getByCountryId(country_id,res => {
            this.setState({country_clubs: res,clubs_fatched:true})
        })
    };

    handleCountryChange = (event) => {
      this.setState({country_selected:event.target.value})
    };

    handleClubChange = (event) => {
        this.setState({club_selected:event.target.value})
    };

    render() {

        if (this.state.loaded) {

            if (this.state.country_selected != 'Tap to select') {
                this.handleGetClubs();
            }

            if (this.state.registered) {
                return <Redirect to='/home'/>
            }

            else return (<div className='betbook-screen-login'>
                    <div className='main-container'>
                        <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png' alt=''/></div>
                        <div className={this.state.favourites ? 'hidden' : 'bs-user-container'}>
                            <div className='bs-username-text'><span className='text15-white'>Username</span></div>
                            <input
                                className={this.state.validUsername ? 'bs-username-box' : 'bs-username-box bs-username-box-error'}
                                type='text' value={this.state.username} onChange={this.handleChangeUsername}/>
                        </div>
                        <div className='bs-email-container'>
                            <div className='bs-email-text'>{this.state.favourites ?
                                <span className='text15-white'>Select your favourite national team</span> :
                                <span className='text15-white'>Email</span>}</div>

                            {this.state.favourites ? <select className='bs-email-box' value={this.state.country_selected} onChange={this.handleCountryChange}>
                                    <option selected='selected'>{this.state.country_selected}</option>
                                    {this.state.countries.map(country => <option value ={country.name} key ={country.name}>{country.name}</option>)}
                                </select>
                                : <><input
                                    className={this.state.validEmail ? 'bs-email-box' : 'bs-email-box bs-email-box-error'}
                                    value={this.state.email} onChange={this.handleChangeEmail} type='email'/></>
                            }
                        </div>
                        <div className='bs-password-container'>
                            <div className='bs-password-text'>{this.state.favourites ?
                                <span className='text15-white'>Select your favourite club</span> :
                                <span className='text15-white'>Password</span>}</div>
                            {this.state.favourites ? <select className='bs-password-box' value={this.state.club_selected} onChange={this.handleClubChange}>
                                    <option selected='selected'>{this.state.club_selected}</option>
                                    {this.state.clubs_fatched ? this.state.country_clubs.map(club => <option value ={club.name} key ={club.name}>{club.name}</option>) : ''}
                                </select>
                                : <><input
                                    className={this.state.validPassword ? 'bs-password-box' : 'bs-password-box bs-password-box-error'}
                                    type='password' value={this.state.password}
                                    onChange={this.handleChangePassword}/></>}
                            <div className='bs-text-under-password'><span className='text11-white'>By procceding further I agree with general terms & conditions. </span>
                            </div>
                        </div>
                        <div className='bs-create-account-box'
                             onClick={this.state.favourites ? this.handleRegister : () => this.setState({favourites: true})}>
                            <span className='text18-white'>Continue</span></div>
                        <Link to={`/login`}>
                            <div className='bs-i-already-have-an-account-box'><span className='text14-white'>I already have an account.</span>
                            </div>
                        </Link>
                    </div>
                </div>
            )
        } else return <div>Loading...</div>
    }
}
export default Register;
