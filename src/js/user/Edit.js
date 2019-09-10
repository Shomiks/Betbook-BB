import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/user/register.scss'

class Edit extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            country:null,
            team:null,
            country_id: null,
            team_id: null,
            countries: [],
            country_teams: []
        };
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        this.getUserCountryAndClub();
    }

    getUserCountryAndClub = () => {
      this.sharedObj.apiHelper.settings.getUserCountryAndClubByID(localStorage.getItem('user_id'), (res)=>{
          this.sharedObj.headerInstance.setTitle('Edit information');
          this.sharedObj.footerInstance.setActive('profile');
          this.setState({  country_id:res[1].id, team_id:res[0].id, loaded:true});
          this.getAllCountries();
          this.getAllTeams(res[1].id);
      });
    };

    getAllCountries = () => {
        this.sharedObj.apiHelper.countries.getAll((res)=> {
            this.setState({countries:res});
        })
    };

    getAllTeams = (country_id) => {
      this.sharedObj.apiHelper.teams.getByCountryId(country_id, (res)=>{

          this.setState({country_teams: res});
      })
    };

    handleCountryChange = (event) => {
        this.setState({country_id:event.target.value});
         this.getAllTeams(event.target.value);
    };

    handleTeamChange = (event) => {
        this.setState({team_id:event.target.value});
    };

    handleSave = () => {
        this.sharedObj.apiHelper.settings.updateCountryAndTeam(localStorage.getItem('user_id'),this.state.country_id, this.state.team_id);
        alert('Successfully saved!');
    };

    render() {

        if(this.state.loaded)  return <div className='betbook-screen-login'>
            <div className='main-container'>
                <div className='betbook-logo-box'><img src='./assets/images/betbook-logo.png' alt=''/></div>
                <div className='bs-email-container'>
                    <div className='bs-email-text'>
                        <span className='text15-white'>Edit your favourite national team</span></div>

                    {<select className='bs-email-box' value={this.state.country_id} onChange={this.handleCountryChange}>
                            {this.state.countries.map(country => <option value={country.id} key ={country.name + country.id}>{country.name}</option>)}
                        </select>
                    }
                </div>
                <div className='bs-password-container'>
                    <div className='bs-password-text'>
                        <span className='text15-white'>Edit your favourite club</span></div>

                    <select className='bs-password-box' value={this.state.team_id} onChange={this.handleTeamChange}>
                            {this.state.country_teams.length > 0 ? this.state.country_teams.map(club => <option value ={club.id} key ={club.name + club.id}>{club.name}</option>) : ''}
                        </select>
                </div>
                <div className='bs-create-account-box'
                     onClick={this.state.country_id != null && this.state.team_id != null ? () => this.handleSave() : null}>
                    <span className='text18-white'>SAVE</span></div>
            </div>
        </div>

        else return <div>Loading..</div>
    }
}


export default Edit;
