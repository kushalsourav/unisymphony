import React from 'react';
import "./Calendar.css";
import CalendarHead from '../../components/CalendarHead/CalendarHead';
import CalendarBody from '../../components/CalendarBody/CalendarBody';
import TimeBar from '../../components/TimeBar/TimeBar';
import PeriodCard from '../../components/PeriodCard/PeriodCard';

const Calendar = () => {
    return (
        <div className='calendar'>
            <CalendarHead />
            <div>
            <CalendarBody />
            </div>
        </div>
    );
}

export default Calendar;
