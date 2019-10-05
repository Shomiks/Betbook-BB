import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import Loader from "../components/other/Loader";
import Footer from "../components/menus/Footer";
import FullContainer from "../components/containers/FullContainer";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            user: '',
            country_id: null,
            team_id: null,
            countries: [],
            country_clubs: []
        };
    }

    componentDidMount() {
        this.getAllCountries();
    }

    handleChangeFullName = (e) => {
        this.setState({user:e.target.value});
    };

    getAllCountries = () => {
        window.apiHelper.countries.getAll((res) => {
            res.forEach((country,i) => {
                if(country.name == 'World') res.splice(i,1);
            });
            this.getAllCLubsByCountryId(window.apiHelper.userInfo.country.id);
            this.setState({countries: res,user: window.apiHelper.userInfo.full_name, country_id: window.apiHelper.userInfo.country.id, team_id: window.apiHelper.userInfo.team.id,loaded:true})
        })
    };

    getAllCLubsByCountryId = (country_id) => {
        window.apiHelper.teams.getByCountryId(country_id,(res) => {
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

    handleSave = () => {
        window.apiHelper.settings.updateInfo(window.apiHelper.userInfo.id,this.state.country_id, this.state.team_id, this.state.user, () => {
            window.apiHelper.user.getUser(window.apiHelper.userInfo.id, () => {
              alert('successful');
          });
      });
    };

    render() {

        if (this.state.loaded) {
             return (<FullContainer  footerProps={{activeItem: 'profile'}} headerProps={{title: 'Edit profile'}}>
                 <div className='betbook-screen-login'>
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
                                <select className='bs-email-box' value={this.state.country_id} onChange={this.handleCountryChange}>
                                        {this.state.countries.map(country => <option value ={country.id} key ={'c_option_'+ country.id}>{country.name}</option>)}
                                </select>
                            </div>

                            <div className='bs-password-container'>
                                <div className='bs-password-text'>
                                    <span className='text15-white'>Select your favourite club</span>
                                </div>
                                <select className='bs-password-box' value={this.state.team_id} onChange={this.handleClubChange}>
                                    {this.state.country_clubs.map(club => <option value ={club.id} key ={'option_' + club.id}>{club.name}</option>)}
                                </select>
                            </div>

                            <div className='bs-create-account-box'
                                 onClick={() => this.handleSave()}>
                                <span className='text18-white'>Save changes</span></div>
                        </div>
                    </div>
                 </div>
                     <Footer/>
                 </FullContainer>
            )
        } else return <Loader/>
    }
}
export default Register;
