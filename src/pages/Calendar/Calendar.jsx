import React from 'react';
import "./Calendar.css";
import CalendarHead from '../../components/CalendarHead/CalendarHead';
import CalendarBody from '../../components/CalendarBody/CalendarBody';
import TimeBar from '../../components/TimeBar/TimeBar';
import PeriodCard from '../../components/PeriodCard/PeriodCard';
import Sidebar from '../../components/Sidebar/Sidebar';

const Calendar = () => {
    return (
        <div className='calendar'>
            <Sidebar />
            <div className="calendar_abs">
            <CalendarHead />
            <div>
            <CalendarBody />
            </div>
            </div>
        </div>
    );
}

export default Calendar;
