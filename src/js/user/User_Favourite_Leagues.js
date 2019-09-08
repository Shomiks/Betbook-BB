import React from 'react';
import '../../../src/style/betbook/detailed-competitionlisting.scss';
import {Link} from "react-router-dom";

class User_Favourite_Leagues extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            realData: [],
            loaded: false,
            remove:[]
        };
        this.sharedObj = props.sharedObj;
        this.countryId = props.match.params.countryid;
    }

    componentDidMount() {
        this.getAllLeagues();
        this.state.realData.forEach(league => {
            league['checked'] = true;
        })
    }

    addCheckboxState = (res) => {
        res.forEach(league => {
            league['checked'] = true;
        });
        this.setState({realData:res})
    };

    getAllLeagues = () => {
        this.sharedObj.apiHelper.home(localStorage.getItem('user_id'),(res) => {
            this.addCheckboxState(res);
            this.sharedObj.headerInstance.setTitle('Favourite Leagues');
            this.sharedObj.footerInstance.setActive('star');
            this.setState({loaded:true});
        });
    };


    handleRemoveClick = (data,index) => {
        let update = [...this.state.realData];
        if(data.checked){
            update[index].checked = false;
            this.sharedObj.apiHelper.favourites.delete(data.id);
            this.setState({realData: update})
        }

        else {
            update[index].checked = true;
            this.sharedObj.apiHelper.favourites.update(localStorage.getItem('user_id'),data.league.id);
            this.setState({realData: update})
        }
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
                <div className='logo-container'> <img className='logo' src={'./assets/images/Logos/'+data.league.logo+''}  alt=''/></div>
                <div className='leagues-info'>
                    <div className='league-name'><span className='text18-white'> {data.league.name}</span><input type="checkbox" name="favourite" onClick={() => this.handleRemoveClick(data,index)} defaultChecked={true}/></div>
                </div>
            </div>)}
        </div>
    }

    render() {

        console.log(this.state.realData)

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
        else return <div>Loading ...</div>
    }
}

export default User_Favourite_Leagues;