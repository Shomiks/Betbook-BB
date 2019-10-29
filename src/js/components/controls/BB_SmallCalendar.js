import React from "react";
import PropTypes from "prop-types";
import '../../../style/components/controls/bb_small_calendar.scss';

function BB_SmallCalendar(props) {

    if (props.show != true) {
        return null;
    }

    const handleOnWrapperClick = () => {
        console.log("Test");
        props.onClose();
    };

    const handleOnDateClick = (date) => {
        let offSet = new Date();
        offSet.setDate(offSet.getDate() + date);
        props.onDateClick(offSet)
    };

    const printDate = (date) => {
        let offSet = new Date();
        offSet.setDate(offSet.getDate() + date);
        return offSet.toISOString().slice(0, 10);
    };

    const elArr = [];

    for (let i = -3; i < 4; i++) {
        elArr.push(<div className='small_calendar_date' onClick={() => {
            handleOnDateClick(i)
        }}><span>{printDate(i)}</span></div>)
    }

    return (
        <div>
            <div className='small_calendar_wrapper' onClick={() => {handleOnWrapperClick()}} />
            <div className='small_calendar'>
                {elArr}
            </div>
        </div>
    );
}

BB_SmallCalendar.propTypes = {
    show: PropTypes.bool,
    onDateClick: PropTypes.func,
    onClose: PropTypes.func
};

export default BB_SmallCalendar;