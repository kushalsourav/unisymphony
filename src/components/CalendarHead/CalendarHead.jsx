import React from 'react';
import "./CalendarHead.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faPlus, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const CalendarHead = () => {
    return (
        <div className='calendarhead'>
            <h2 className='calendarhead_heading'>Calendar</h2>
             <div className="calendarhead_body">
                <div className="calendarhead_toggle">
                    {/* <span className='calendarhead_toggler'>day</span> */}
                    <span className='calendarhead_toggler'>week</span>
                </div>
                <div className="calendarhead_dates">
                    <button className='calendarhead_icon'>
                        <FontAwesomeIcon icon={faArrowLeft}/>
                    </button>
                    <span className='calendarhead_date'>jan 20</span>
                    <button className='calendarhead_icon'>
                        <FontAwesomeIcon icon={faArrowRight}/>
                    </button>
                </div>
                <button className='calendarhead_btn'>
                    <FontAwesomeIcon icon={faPlus} className='calendarhead_btn-icon' />
                    create event
                </button>
             </div>
        </div>
    );
}

export default CalendarHead;
