import React from "react";
import PropTypes from "prop-types";
import './../../../style/components/objectcontrols/bidfieldshort.scss'

function BidFieldsShort(props) {

    const handleBidState = (game, tip, bidfield) => {
            let className = bidfield + ' ' + game;
            if (!props.realData[game + '_' + tip]) className += ' hidden';

            if (props.realData.result && props.realData.result[game + '_' + tip] == 1) {
                className += ' won';
            }
            if (props.realData.ticket) {
                if (props.realData.ticket[game + '_tip'] == tip) {
                    className += ' bided' + ' ' + 'no-opacity';
                }

                if (props.realData.ticket[game + '_tip'] == tip && props.realData.result) {
                    if (props.realData.result.is_finished == 1) {
                        if (className.includes('won')) {
                            className += ' green'
                        } else className += ' red'
                    }
                }
            }
            if (!className.includes('bided')) {
                if (props.realData.result && props.realData.result.is_finished == 1) {
                    return className += ' opacity'
                }
                if (className.includes(game)) {
                    if (props.realData.ticket) {
                        if (props.realData.ticket[game + '_tip']) {
                            return className + ' ' + 'opacity';
                        }
                    }
                }
            }
            return className
        };

    const handleBidType = (label, game, tip, bidfield) => {
        let className = handleBidState(game, tip, bidfield);

        return <div className={className}
                    onClick={!props.realData.result || props.realData.result.is_finished == 0 ? () => props.handleBidClick(game, tip, className) : null}>
            <div className='game-bid-align'>
                <div className='game-text'><span className='text11-grey'>{label}</span></div>
                <div className='bid-text'><span className='text15-white'>{props.realData[game + '_' + tip]}</span>
                </div>
            </div>
        </div>
    };

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
                {handleBidType('1', 'game1', '1', 'bid-field')}
                {handleBidType('X', 'game1', 'x', 'bid-field')}
                {handleBidType('2', 'game1', '2', 'bid-field')}
            </div>
        </div>
        <div className={props.realData.game2_1 ? 'match-goals-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Match Goals</span></div>
                <div className='game-underline'/>
            </div>
            <div className='md_bid-box'>
                {handleBidType('0-1', 'game2', '1', 'bid-field')}
                {handleBidType('0-2', 'game2', '2', 'bid-field')}
                {handleBidType('0-3', 'game2', '3', 'bid-field')}
            </div>
            <div className='md_bid-box'>
                {handleBidType('2+HT', 'game2', '2ht', 'bid-field')}
                {handleBidType('2+FT', 'game2', '2ft', 'bid-field')}
                {handleBidType('3+FT', 'game2', '3ft', 'bid-field')}
                {handleBidType('4+FT', 'game2', '4ft', 'bid-field')}
            </div>
        </div>
        <div className={props.realData.game3_gg ? 'both-teams-goals-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Both Team Goals</span>
                    <div className='game-underline'/>
                </div>
            </div>
            <div className='md_bid-box'>
                {handleBidType('GG', 'game3', 'gg', 'bid-field')}
                {handleBidType('GG3+', 'game3', 'gg3p', 'bid-field')}
            </div>
        </div>
        <div className={props.realData.game4_11 || props.realData.game4_22 ? 'ht-ft-result-field' : 'hidden'}>
            <div className='main-titlle-field'>
                <div className='ft_text_position'><span className='text12-grey'>Half / Full Time Result</span>
                    <div className='game-underline'/>
                </div>
            </div>
            <div className='md_bid-box'>
                {handleBidType('1-1', 'game4', '11', 'bid-field')}
                {handleBidType('1-X', 'game4', '1x', 'bid-field')}
                {handleBidType('1-2', 'game4', '12', 'bid-field')}
            </div>
            <div className='md_bid-box'>
                {handleBidType('X-1', 'game4', 'x1', 'bid-field')}
                {handleBidType('X-X', 'game4', 'xx', 'bid-field')}
                {handleBidType('X-2', 'game4', 'x2', 'bid-field')}
            </div>
            <div className='md_bid-box'>
                {handleBidType('2-1', 'game4', '21', 'bid-field')}
                {handleBidType('2-X', 'game4', '2x', 'bid-field')}
                {handleBidType('2-2', 'game4', '22', 'bid-field')}
            </div>
        </div>
    </div>
}

BidFieldsShort.propTypes = {
    realData: PropTypes.object.isRequired,
    handleBidClick: PropTypes.func.isRequired,
};


export default BidFieldsShort;