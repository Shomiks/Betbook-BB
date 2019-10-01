import React from 'react';
import '../../../src/style/app.scss'
import '../../../src/style/betbook/leaderboards.scss'
import Profile_Short from "../components/Profile_Short";

class Leader_Boards extends React.Component {

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
              <Profile_Short/>
              <Profile_Short/>
              <Profile_Short/>
              <Profile_Short/>
              <Profile_Short/>
              <Profile_Short/>
              <Profile_Short/>
            </div>
        );
    }
}

export default Leader_Boards;
