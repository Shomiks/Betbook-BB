import React from 'react';
import '../../../src/style/betbook/detailed-competitionlisting.scss';
import {Link} from "react-router-dom";
import Loader from "../components/other/Loader";

class User_Favourite_Leagues extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            realData: [],
            loaded: false,
            remove:[],
            checked:true
        };
        this.sharedObj = props.sharedObj;
        this.countryId = props.match.params.countryid;
    }


    componentDidMount = () => {
        this.getAllLeagues();
        setTimeout(()=>{
            this.sharedObj.footerInstance.setActive('star');
            },1
        )
    };

    addCheckboxState = (res) => {
        res.forEach(league => {
            league['checked'] = true;
        });
        this.setState({realData:res})
    };

    getAllLeagues = () => {
        this.sharedObj.apiHelper.home.get_favourites(localStorage.getItem('user_id'),(res) => {
            this.addCheckboxState(res);
            this.sharedObj.headerInstance.setTitle('Favourite Leagues');

            this.setState({loaded:true});
        });
    };

    handleRemoveClick = (data,index) => {
        let update = [...this.state.remove];
        update.push(index);
        this.setState({remove:update},() => {
            console.log(this.state.remove)
        });
        this.sharedObj.apiHelper.favourites.delete(data.id);
    };

    handleAddClick = (data,index) => {
        let update = [...this.state.remove];
        let element_index = update.indexOf(index);
        update.splice(element_index,1);
        this.setState({remove:update},() => {
            console.log(this.state.remove)
        });
        this.sharedObj.apiHelper.favourites.update(localStorage.getItem('user_id'),data.league.id);
    };

    handleFirstTimeLogin = () => {
        return <><Link to={`/countries`}>
            <div className='hs_select-box'><span className='text26-white'>Select your favourite leagues and start your journey</span>
            </div>
        </Link></>
    };

    renderFavouriteLeagues = () => {

        return  <div className='leagues-container'>
            {this.state.realData.map((data,index) => <div key={data.id + '_'} className='league-field'>
                <div className='logo-container'>
                    {data.league && data.league.logo ? <img className='logo' src={'./assets/images/Logos/'+data.league.logo+''}  alt=''/> : <img className='logo' src={'./assets/images/alternative-logo.png'}  alt=''/>}
                </div>
                <div className='leagues-info'>
                    <div className='league-name'><span className='text18-white'> {data.league.name}</span>

                    </div>
                </div>
                <div className={'league_favorite_action'}>
                    <div className={this.state.remove.includes(index) ? 'star' : 'star_checked'}
                         onClick={this.state.remove.includes(index) ? () => this.handleAddClick(data,index) : () => this.handleRemoveClick(data,index)} defaultChecked={this.state.checked}>
                                            <svg width="27" height="26" viewBox="0 0 27 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19.2763 15.8151L26.5625 9.73236L17.985 9.12409C17.6776 9.09367 17.4009 8.91119 17.2779 8.63747L13.2812 0L9.28458 8.63747C9.1616 8.91119 8.88491 9.09367 8.57747 9.12409L0 9.73236L7.28624 15.8151C7.53219 16.028 7.65516 16.3625 7.56293 16.6667L5.19567 25L12.8508 20.1034C13.1275 19.9209 13.4965 19.9209 13.7731 20.1034L21.4283 25L19.0611 16.6363C18.9073 16.3625 19.0303 16.028 19.2763 15.8151Z" stroke="white"/>
                    </svg>
                    </div>
                </div>
            </div>)}
        </div>
    };

    render() {

        if (this.state.loaded) return (
            <div className='betbook_screen'>
                <div className='main-content'>
                    {this.state.realData.length == 0 ?
                    this.handleFirstTimeLogin()
                    :
                    this.renderFavouriteLeagues()}
                </div>
            </div>
        );
        else {
            return <Loader/>
        }

    }
}

export default User_Favourite_Leagues;