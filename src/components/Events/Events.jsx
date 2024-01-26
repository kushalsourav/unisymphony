import React from 'react';
import "./Events.css";

const Events = () => {
    return (
        <div className='event'>
             <h4 className='event_title'>Computer Science</h4>
    <p className='event_type'>workshop</p>
    <p className='event_date'>12/01/2024</p>

    {/* <p><strong>Time:</strong> [Event Time]</p>
    <p><strong>Location:</strong> [Event Location]</p>
    <p><strong>Description:</strong> [Brief Event Description]</p> */}
        </div>
    );
}

export default Events;
