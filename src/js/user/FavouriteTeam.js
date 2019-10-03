import React from 'react';
import '../../../src/style/betbook/user/register.scss'
import '../../../src/style/app.scss'
import Loader from "../components/other/Loader";
import BB_ButtonLink from "../components/controls/BB_ButtonLink";
import BB_TextField from "../components/controls/BB_TextField";
import BB_Select from "../components/controls/BB_Select";

class FavouriteTeam extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:true,
            country_id: null,
            team_id: null,
            registered: false,
            user_fullname:'',
            countries: [],
            country_clubs: [],
            step2:false
        };
    }

    componentDidMount() {
        this.getAllCountries();
    }

    handleChangeFullName = (e) => {
        this.setState({user_fullname:e.target.value});
    };

    handleRegisterStepTwo = () => {
        window.apiHelper.user.register(this.state.username,this.state.password,this.state.email,this.state.user_fullname,this.state.country_id,this.state.team_id,(res)=>{
            localStorage.setItem('user_id', res[0]);
            res[1].forEach(league_id => {
                if(league_id != []){
                    window.apiHelper.user.favourite_team_leagues(res[0],league_id);}
            })
        });
        this.setState({step2:true});
    };

    getAllCountries = () => {
        window.apiHelper.countries.getAll((res) => {
            this.setState({countries: res,loaded:true})
        })
    };

    getAllCLubsByCountryId = (country_id) => {
        window.apiHelper.teams.getByCountryId(country_id,res => {
            this.setState({country_clubs: res});
        })
    };

    handleCountryChange = (e) => {
        console.log(e.target.value)
        this.setState({country_id:e.target.value});
        this.getAllCLubsByCountryId(e.target.value);
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

            return (
                        <>
                            <BB_TextField label = 'Your name' value={this.state.user_fullname} onChange={this.handleChangeFullName} error={this.state.user_fullname == ''}/>
                            <BB_Select options={this.state.countries.map(country => {return {value: country.id, label: country.name, key: country.id}})}
                                       text='Select your favourite national team' onChange={this.handleCountryChange}/>
                            <BB_Select options={this.state.country_clubs.map(club => {return {value: club.id, label: club.name, key: club.id}})}
                                       text='Select your favourite club' onChange={this.handleClubChange} error={this.state.country_clubs.length == 0} club='hidden'/>

                            <BB_ButtonLink size='small' type='normal' text='By proceeding further I agree with general terms & conditions.'/>

                            <div className='bs-create-account-box'
                                 onClick={this.state.registered ? () => this.handleRegisterStepTwo() : ()=>this.handleError()}>
                                <span className='text18-white'>Continue</span></div>

                            <BB_ButtonLink location='login' size='medium' type='outlined' text='I already have an account.'/>
                       </>
            )
        } else return <Loader/>
    }
}
export default FavouriteTeam;
