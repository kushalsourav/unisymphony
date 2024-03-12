import React, { useState } from 'react';
import "./EventForm.css";

const EventForm = () => {
    const [eventTitle, setEventTitle] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [eventDays, setEventDays] = useState([]);
    const [startTime, setStartTime] = useState('09:00');
    const [endTime, setEndTime] = useState('10:00');


    const startTimes = [
        { value: '09:00', label: '9:00 AM' },
        { value: '10:00', label: '10:00 AM' },
        { value: '11:00', label: '11:00 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '13:00', label: '1:00 PM' },
        { value: '14:00', label: '2:00 PM' },
        { value: '15:00', label: '3:00 PM' },
        { value: '16:00', label: '4:00 PM' },
        { value: '17:00', label: '5:00 PM' }
    ];

    const endTimes = [
        { value: '10:00', label: '10:00 AM' },
        { value: '11:00', label: '11:00 AM' },
        { value: '12:00', label: '12:00 PM' },
        { value: '13:00', label: '1:00 PM' },
        { value: '14:00', label: '2:00 PM' },
        { value: '15:00', label: '3:00 PM' },
        { value: '16:00', label: '4:00 PM' },
        { value: '17:00', label: '5:00 PM' },
        { value: '18:00', label: '6:00 PM' }
    ];

    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

    const handleSubmit = (e) => {
        e.preventDefault();

        console.log({
            eventTitle,
            eventDate,
            eventDays,
            startTime,
            endTime
        });
    };

    return (
        <div className="eventFormContainer">
            <h2 className="eventFormTitle">Create Event</h2>
            <form className="eventForm" onSubmit={handleSubmit}>
                <label htmlFor="eventTitle" className="eventFormLabel">Event Title:</label><br />
                <input type="text" id="eventTitle" className="eventFormInput" value={eventTitle} onChange={(e) => setEventTitle(e.target.value)} required />

                <label htmlFor="eventDate" className="eventFormLabel">Event Date:</label><br />
                <input type="date" id="eventDate" className="eventFormInput" value={eventDate} onChange={(e) => setEventDate(e.target.value)} required />

                <label htmlFor="eventDays" className="eventFormLabel">Select Days:</label><br />
                <select id="eventDays" className="eventFormSelect" value={eventDays} onChange={(e) => setEventDays(e.target.value)}>
                    {days.map(day => (
                        <option key={day} value={day}>{day}</option>
                    ))}
                </select>
                 <div className='flex'>
                <>
                 <label htmlFor="startTime" className="eventFormLabel">Start Time:</label>
                <select id="startTime" className="eventFormSelect" value={startTime} onChange={(e) => setStartTime(e.target.value)} required>
                    {startTimes.map(time => (
                        <option key={time.value} value={time.value}>{time.label}</option>
                    ))}
                </select>
                </>
                <>
                <label htmlFor="endTime" className="eventFormLabel">End Time:</label>
                <select id="endTime" className="eventFormSelect" value={endTime} onChange={(e) => setEndTime(e.target.value)} required>
                    {endTimes.map(time => (
                        <option key={time.value} value={time.value}>{time.label}</option>
                    ))}
                </select>
                </>
                 </div>

                <input type="submit" value="Submit" className="eventFormSubmit" />
            </form>
        </div>
    );
}

export default EventForm;
