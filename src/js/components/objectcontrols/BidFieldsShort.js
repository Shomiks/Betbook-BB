import React from "react";

function BidFieldsShort(props) {

    return <div className='scrolable-bids-field'>
        <div className={props.realData.result ? 'md_match-details-container' : 'hidden'}>
            <div className='md_line'/>
            <div className='md_match-details-box'>
                <span className='text12-yellow'>Match Details</span>
            </div>
            <div className='md_line'/>
        </div>
        <div className={props.realData.game1_1 ?'full-time-result-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Match Outcome</span></div>
                <div className='game-underline'/>
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('1', 'game1', '1', 'bid-field')}
                {props.handleBidType('X', 'game1', 'x', 'bid-field')}
                {props.handleBidType('2', 'game1', '2', 'bid-field')}
            </div>
        </div>
        <div className={props.realData.game2_1 ? 'match-goals-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Match Goals</span></div>
                <div className='game-underline'/>
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('0-1', 'game2', '1', 'bid-field')}
                {props.handleBidType('0-2', 'game2', '2', 'bid-field')}
                {props.handleBidType('0-3', 'game2', '3', 'bid-field')}
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('2+HT', 'game2', '2ht', 'bid-field')}
                {props.handleBidType('2+FT', 'game2', '2ft', 'bid-field')}
                {props.handleBidType('3+FT', 'game2', '3ft', 'bid-field')}
                {props.handleBidType('4+FT', 'game2', '4ft', 'bid-field')}
            </div>
        </div>
        <div className={props.realData.game3_gg ? 'both-teams-goals-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Both Team Goals</span>
                    <div className='game-underline'/>
                </div>
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('GG', 'game3', 'gg', 'bid-field')}
                {props.handleBidType('GG3+', 'game3', 'gg3p', 'bid-field')}
            </div>
        </div>
        <div className={props.realData.game4_11 || props.realData.game4_22 ? 'ht-ft-result-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Half / Full Time Result</span>
                    <div className='game-underline'/>
                </div>
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('1-1', 'game4', '11', 'bid-field')}
                {props.handleBidType('1-X', 'game4', '1x', 'bid-field')}
                {props.handleBidType('1-2', 'game4', '12', 'bid-field')}
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('X-1', 'game4', 'x1', 'bid-field')}
                {props.handleBidType('X-X', 'game4', 'xx', 'bid-field')}
                {props.handleBidType('X-2', 'game4', 'x2', 'bid-field')}
            </div>
            <div className='md_bid-box'>
                {props.handleBidType('2-1', 'game4', '21', 'bid-field')}
                {props.handleBidType('2-X', 'game4', '2x', 'bid-field')}
                {props.handleBidType('2-2', 'game4', '22', 'bid-field')}
            </div>
        </div>
    </div>
}

export default BidFieldsShort;