import React from 'react';
import Header from './header';

// import '../../../src/style/app.scss'

function CompetitionItem(props) {
  return <div className='rectangle_layout'>
    <div className='noun_ball_image'> <img src='./assets/images/ball.png'></img> </div>
    <div className='competition'><span
        className='text14'>{props.competitionname}</span>
    </div>
    <div className='chevron'><img src='./assets/images/arrow_right.png'></img></div>
  </div>;
}

CompetitionItem.defaultProps = {
  competitionname: ''
};

export default CompetitionItem;
