import React from 'react';
import '../../../style/components/objectcontrols/match_short.scss';
import DateResultFixtureShort from "./DateResultFixtureShort";
import PropTypes from "prop-types";

function FixtureShortBids(props) {

    function handleStateField(tip) {
        let game = "game" + tip;

        if (!props[game + '_tip']) return ' unbided';
        else {
            if (props.fixture.result) {
                if (props.fixture.result.is_finished == 0) return ' bided';
                else {
                    if (props.fixture.result[game + '_' + props[game + '_tip']] == 1) return ' green';
                    else return ' red';
                }
            } else return ' bided';
        }
    }

    function renderDate() {
        let Datefields = props.date.split(' ')[0].split('-');
        let Timefields = props.date.split(' ')[1].split(':');
        let year = Datefields[0].substring(2, Datefields[0].length);

        return (Datefields[2] + '/' + Datefields[1] + '/' + year + ' ' + Timefields[0] + ':' + Timefields[1]);
    }

    function parseTipGame2Row1() {
        if (props.game2_tip == '2' || props.game2_tip == '1' || props.game2_tip == '3') return '0-';
    }

    function parseTipGame2Row2() {
        if (props.game2_tip == '2ht') return '2+HT';
        if (props.game2_tip == '2ft') return '2+FT';
        if (props.game2_tip == '3ft') return '3+FT';
        if (props.game2_tip == '4ft') return '4+FT';
    }

    function parseTipGame4() {
        let tip = props.game4_tip.toUpperCase();
        tip.split('');
        return tip[0] + '-' + tip[1];
    }

    function handleBidField() {

        return <div className={props ? 'ms-central-field' : 'ms-central-field yellow'}>
            <DateResultFixtureShort {...props} renderDate={() => this.renderDate}/>
            <div className='ms-under-teams-field'>
                {!props ? (!props.fixture.result ?
                    <div className='ms_not-bided-yellow'><span className='text11-white'>Make a bid</span></div> :
                    <div/>)
                    : (
                        <div className='ms_bid-field'>
                            <div className={'ms_bid-box' + handleStateField(1)}>
                                <div className='ms_game-field'><span
                                    className='text11-grey'>{props.game1_tip ? props.game1_tip.toUpperCase() : ''}</span>
                                </div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.game1_odd}</span>
                                </div>
                            </div>
                            <div className={'ms_bid-box' + handleStateField(2)}>
                                <div className='ms_game-field'><span
                                    className='text11-grey'>{parseTipGame2Row1() == '0-' ? (parseTipGame2Row1() + props.game2_tip) : parseTipGame2Row2()}</span>
                                </div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.game2_odd}</span>
                                </div>
                            </div>
                            <div className={'ms_bid-box' + handleStateField(3)}>
                                <div className='ms_game-field'><span
                                    className='text11-grey'>{props.game3_tip == 'gg' ? 'GG' : 'GG3+'}</span></div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.game3_odd}</span>
                                </div>
                            </div>
                            <div className={'ms_bid-box' + handleStateField(4)}>
                                <div className='ms_game-field'><span
                                    className='text11-grey'>{props.game4_tip ? parseTipGame4() : ''}</span></div>
                                <div className='ms_odd-field'><span className='text11-white'>{props.game4_odd}</span>
                                </div>
                            </div>
                        </div>)}
            </div>
        </div>
    }

    return <>{handleBidField()}</>

}

FixtureShortBids.propTypes = {
    result: PropTypes.object,
    game1_tip: PropTypes.string,
    game1_odd: PropTypes.string,
    game2_tip: PropTypes.string,
    game2_odd: PropTypes.string,
    game3_tip: PropTypes.string,
    game3_odd: PropTypes.string,
    game4_tip: PropTypes.string,
    game4_odd: PropTypes.string
};

export default FixtureShortBids;
