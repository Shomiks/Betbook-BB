import React, { Component } from 'react';

import UserProfile from './../../components/common/userProfile/userProfile.component.js';
import Footer from '../../components/common/footer/footer.component.js';
import TicketPost from '../../components/containers/ticketPost/ticketPost.component.js';
import { DataProvider } from '../../data/dataprovider.js';

class ProfileTickets extends Component {

  constructor(props) {
    super(props);
    this.state = {
      userProfile: DataProvider.getUserProfile(),
      ticketData: DataProvider.getTicketPostData()
    }
  }


  render() {
    const userInfo = this.state.userProfile.map(item => {
      return <UserProfile key={'userInfo_' + item.id} userData={item} />
    });

    const ticketMatchPost = this.state.ticketData.map(item => {
      return <TicketPost key={"ticketMatch_" + item.id} ticketData={item}/>
    })

    return (
      <div className="test">
        {userInfo}
        {ticketMatchPost}
        <Footer />
      </div>
    );
  }
}

export default ProfileTickets;