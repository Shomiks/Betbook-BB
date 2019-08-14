import React, { Component } from 'react';

import HeaderButtons from './../../components/common/headerButtons/headerButtons.component.js';
import TextPost from './../../components/containers/textPost/textPost.component.js';
import TicketPost from './../../components/containers/ticketPost/ticketPost.component.js';
import Footer from './../../components/common/footer/footer.component.js';
import {DataProvider} from './../../data/dataprovider'; 

class SocialTimeline extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DataProvider.getHeaderButtonsTimeline(),
      userData: DataProvider.getUserTextPost(),
      ticketData : DataProvider.getTicketPostData()
    }

    console.log(this.state.ticketData);
  }

 

  render() {
    const headerButtons = [];
    const userInfo = [];

    this.state.data.forEach(item => {
      headerButtons.push(<HeaderButtons key={"headerbuttons_" + item.id} data={item}/>)
    })

    this.state.userData.forEach(item => {
      userInfo.push(<TextPost key={"userInfo_" + item.id} userData={item.posts} />)
    })

    const ticketMatchPost = this.state.ticketData.map(item => {
      return <TicketPost key={"ticketMatch_" + item.id} ticketData={item}/>
    })

    return (
      <div className="test">
        {headerButtons}
        <div className='margin-top'>{userInfo}</div>
        {ticketMatchPost}
        <Footer />
      </div>
    );
  }
}

export default SocialTimeline;