import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/leaderboards.scss'
import ProfileShort from "../components/profileshort";

class LeaderBoards extends React.Component {

    constructor(props) {
        super(props);

        this.state = {}

    }

    render() {

        return (
            <div className='betbook_screen'>
                <div className='lb_header'>
                    <div className='lb_tickets-singles-field'>
                        <div className='lb_box-left'>
                            <div className='lb_tickets-field'><span className='text14-tickets'>Tickets</span></div>
                        </div>
                        <div className='lb_box-right'>
                            <div className='lb_singles-field'><span className='text14-tickets'>Singles</span></div>
                        </div>
                    </div>
                </div>
              <ProfileShort/>
              <ProfileShort/>
              <ProfileShort/>
              <ProfileShort/>
              <ProfileShort/>
              <ProfileShort/>
              <ProfileShort/>
            </div>
        );
    }
}

export default LeaderBoards;
