import React from 'react';
import Profile_Short from "../components/objectcontrols/Profile_Short";
import Loader from "../components/other/Loader";
import {Link} from "react-router-dom";
import FullContainer from "../components/containers/FullContainer";

class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            loaded: false
        };
    }

    componentDidMount() {
        this.getAllUsers();
    }

    getAllUsers = () => {
            window.apiHelper.user.getAllUsers((res) => {
                res.forEach((profile,i) => {
                    if(profile.id == window.apiHelper.userInfo.id){
                        res.splice(i,1);
                    }
                });
                this.setState({loaded:true, users:res})
            })
    };

    render() {

        if (this.state.loaded) {
            return <FullContainer footerProps={{activeItem: 'profile'}} headerProps={{title: 'Search for users'}}>
                <div className='main-container'/>
                {this.state.users.map(user => {
                    return <><Link to = {`/user/${user.id}`}><Profile_Short key={user.id} user={user}/></Link></>
                })}
            </FullContainer>
        }
        else return <Loader/>
    }
}

export default Search;
