import React from 'react';
import Profile_Short from "../components/Profile_Short";
import Loader from "../components/Loader";
import {Link} from "react-router-dom";



class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users:[],
            loaded: false
        };
        console.log(this.state.users);
        this.sharedObj = props.sharedObj;
    }

    componentDidMount() {
        setTimeout(() => {
            this.sharedObj.headerInstance.setTitle('Search for users');
            this.sharedObj.footerInstance.setActive('profile');
        },1);
        this.getAllUsers();
    }

    getAllUsers = () => {
        if(this.sharedObj.apiHelper){
            this.sharedObj.apiHelper.user.getAllUsers((res) => {
                res.forEach((profile,i) => {
                    if(profile.id == localStorage.getItem('user_id')){
                        res.splice(i,1);
                    }
                });
                this.setState({loaded:true, users:res})
            })
        }
    };

    render() {

        if (this.state.loaded) {
            return <div className='betbook-screen'>
                <div className='main-container'/>
                {this.state.users.map(user => {
                    return <><Link to = {`/user/${user.id}`}><Profile_Short key={user.id} user={user}/></Link></>
                })}
            </div>
        }
        else return <Loader/>
    }
}

export default Search;
