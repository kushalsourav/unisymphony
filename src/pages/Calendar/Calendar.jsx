import React from 'react';
import "./Calendar.css";
import CalendarHead from '../../components/CalendarHead/CalendarHead';
import TimeBar from '../../components/TimeBar/TimeBar';
import PeriodCard from '../../components/PeriodCard/PeriodCard';

const Calendar = () => {
    return (
        <div className='calendar'>
            <CalendarHead />
            <div className="calendar_body">
            <TimeBar />
            <div className="calendar_subbody">
                 <PeriodCard />
                 <PeriodCard />
                 <PeriodCard />
                 <PeriodCard />
                 <PeriodCard />
            </div>
            </div>
        </div>
    );
}

export default Calendar;
