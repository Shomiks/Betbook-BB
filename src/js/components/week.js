import React from 'react';
import MatchShort from './match_short';
import Match_Details from "../tickets/Match_Details";
import Header from "./header";
import '../../style/week.scss'

class Week extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            currentMatch: null
        }
    }

    handleMatchClick = (currentMatch)=> {
        this.setState({currentMatch:currentMatch});
    }

    render() {

        if(this.state.currentMatch){
            return <Match_Details match={this.state.currentMatch} />
        }

        console.log(this.props.data[0])
        return (

                    <div className='game-week'>
                        {
                            this.props.data[0].data.map((match) => <div onClick={()=>{this.handleMatchClick(match)}} className='match-field'><MatchShort match={match} key={match.match.id+'_'}  /></div>)
                        }
                    </div>

        );
    }

}


export default Week;
