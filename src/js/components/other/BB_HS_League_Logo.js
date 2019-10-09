import React from 'react';
import '../../../style/components/other/bb_hs_league_logo.scss'
import PropTypes from "prop-types";
import BB_ButtonLink from "../controls/BB_ButtonLink";

function BB_HS_League_Logo(props) {
  console.log(props)
  return <div>
    <div className='bb_hs_logo'><img className='bb_hs_league-logo' src={'./assets/images/Logos/' + props.data.league.logo + ''} />
      <div className='hs_league_name'><span className='text11'>{props.data.league.name}</span></div>
    </div>
  </div>;
}

BB_HS_League_Logo.propTypes = {
  data: PropTypes.object.isRequired
};

export default BB_HS_League_Logo;
