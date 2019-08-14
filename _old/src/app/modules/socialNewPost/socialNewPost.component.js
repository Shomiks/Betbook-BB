import React, { Component } from 'react';

import HeaderText from './../../components/common/headerText/headerText.component.js';
import AddNewPost from './../../components/containers/addNewPost/addNewPost.component.js';
import {DataProvider} from './../../data/dataprovider'; 
import TicketsContainer from '../../components/containers/ticketsContainer/ticketsContainer.component.js';

class SocialNewPost extends Component {

  constructor(props) {
    super(props);
    this.state = {
      headerText: DataProvider.socialNewPostHeaderData(),
      userData: DataProvider.socialNewPostUserData(),
      ticketData: DataProvider.getTicketPostData()
    }
  }

  render() {
    const ticket = this.state.ticketData.map(item => {
      return <TicketsContainer key={'ticketsMatch_' + item.id} matches={item.matches}/>
    })

    const headerTextData = this.state.headerText.map(item => {
      return <HeaderText key={'headerText_' + item.id} headerText={item} />
    })

    const userInfo = this.state.userData.map(item => {
      return <AddNewPost key={'userInfo_' + item.id} userData={item} / >
    })

    return (
      <div className="test">
        {headerTextData}
        <div className="margin-top">{userInfo}</div>
        {ticket}
      </div>
    );
  }
}

export default SocialNewPost;