import React from 'react';
import '../../../style/components/other/bb_hs_league_logo.scss'

function BB_HS_League_Logo(props) {
  console.log(props)
  return <div>
    <div className='bb_hs_logo'><img className='bb_hs_league-logo' src={'./assets/images/Logos/' + props.logo + ''} />
      <div className='hs_league_name'><span className='text11'>{props.name}</span></div>
    </div>
  </div>;
}

export default BB_HS_League_Logo;
