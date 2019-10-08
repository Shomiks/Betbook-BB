import React from 'react';
import '../../../style/betbook/user/register.scss'
import '../../../style/app.scss'
import Loader from "../../components/other/Loader";
import MainContainer from "../../components/containers/MainContainer";
import BB_TextField from "../../components/controls/BB_TextField";
import BB_Select from "../../components/controls/BB_Select";
import BB_Button from "../../components/controls/BB_Button";
import BottomContainer from "../../components/containers/BottomContainer";
import Header from "../../components/menus/Header";
import Footer from "../../components/menus/Footer";

class Register extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loaded:false,
            user: '',
            validationFullName: null,
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
            this.setState({countries: res,user: window.apiHelper.userInfo.full_name, country_id: window.apiHelper.userInfo.country.id, team_id: window.apiHelper.userInfo.team.id})
            this.getAllCLubsByCountryId(window.apiHelper.userInfo.country.id);
        });
    };

    getAllCLubsByCountryId = (country_id) => {
        window.apiHelper.teams.getByCountryId(country_id,(res) => {
            this.setState({country_clubs: res,loaded:true});
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
            window.apiHelper.user.getUser(window.apiHelper.userInfo.id,(res) => {
                window.apiHelper.userInfo = res;
            })
          });
    };

    setValidation = () => {
        this.setState({validationFullName:'Please enter your name.'})
    };

    render() {

        if (this.state.loaded) {
             return (<>
                 <Header title='Edit your Information'/>
                 <MainContainer>
                    <BottomContainer>
                        znam jednog lika koji je promenio fakultet i sve mu je krenulo na bolje

                        <BB_TextField label = 'Edit your name' value={this.state.user} onChange={this.handleChangeFullName}
                                      error={this.state.validationFullName != null} helperText={this.state.validationFullName}/>
                        <BB_Select options={this.state.countries.map(country => {return {value: country.id, label: country.name, key: country.id}})}
                                   text='Edit your favourite national team' onChange={this.handleCountryChange} defaultValue={window.apiHelper.userInfo.country.id}/>
                        <BB_Select options={this.state.country_clubs.map(club => {return {value: club.id, label: club.name, key: club.id}})}
                                   text='Edit your favourite team' onChange={this.handleClubChange} defaultValue={window.apiHelper.userInfo.team.id}/>
                            <BB_Button label='Save Changes' onClick={this.state.user == '' ? this.setValidation : this.handleSave}/>
                    </BottomContainer>
                 </MainContainer>
                     <Footer/>
                 </>
            )
        } else return <Loader/>
    }
}

export default Register;
