import React, { useEffect, useRef } from 'react';
import "./CalendarBody.css";
import Modal from '../Modal/Modal';
import EventForm from '../EventForm/EventForm';

const Calendar = ({data, openModal, setCloseModal}) => {

  const elemnetRef = useRef();
 
  useEffect(() => {
    // Accessing the HTMLCollection of divs
    const divs = elemnetRef.current.children;

    // Choose one of the divs (e.g., the first one)
    const targetDiv = divs[0];

    // Adding content to the chosen div
    if (targetDiv) {
      console.log(targetDiv)
      
    }
  }, []);
     console.log(data.events_dates)
  return (
    <>

      <div className="calendar_body">
        <div className="timeline">
          <div className="spacer"></div>
          <div className="time-marker">9 AM</div>
          <div className="time-marker">10 AM</div>
          <div className="time-marker">11 AM</div>
          <div className="time-marker">12 PM</div>
          <div className="time-marker">1 PM</div>
          <div className="time-marker">2 PM</div>
          <div className="time-marker">3 PM</div>
          <div className="time-marker">4 PM</div>
          <div className="time-marker">5 PM</div>
          <div className="time-marker">6 PM</div>
        </div>
        <div className="days"  ref={elemnetRef}>
            {data.events_dates.map((dates) => {
                 return(
                  <div className="day mon">
                  <div className="date">
            
                    <p className="date-day">{dates?.day}</p>
                  </div>
                  <div className="calendar_events">
                    {
                      dates?.events.map((event) => {
                        return(
                          <div className={`calendar_event start-${event.start.substring(0,2)} end-${event.end.substring(0,2)} securities`}>
                          <p className="title">{event.title}</p>
                          <p className="time">{event.start} - {event.end}</p>
                        </div>
                        )
                      })
                    }
                  </div>
                </div>
                 )
            })}


        </div>
      </div>
      <div className='overlay_for'>
      <Modal openModal={openModal} setCloseModal={setCloseModal}>
        <EventForm />
      </Modal>
      </div>
    </>
  );
}

export default Calendar;
