import React from 'react';
import "./CalendarBody.css";

const Calendar = () => {
  return (
    <>

      <div class="calendar_body">
        <div class="timeline">
          <div class="spacer"></div>
          <div class="time-marker">9 AM</div>
          <div class="time-marker">10 AM</div>
          <div class="time-marker">11 AM</div>
          <div class="time-marker">12 PM</div>
          <div class="time-marker">1 PM</div>
          <div class="time-marker">2 PM</div>
          <div class="time-marker">3 PM</div>
          <div class="time-marker">4 PM</div>
          <div class="time-marker">5 PM</div>
          <div class="time-marker">6 PM</div>
        </div>
        <div class="days">

          <div class="day mon">
            <div class="date">

              <p class="date-day">Mon</p>
            </div>
            <div class="calendar_events">
              <div class="calendar_event start-2 end-5 securities">
                <p class="title">Securities Regulation</p>
                <p class="time">2 PM - 5 PM</p>
              </div>
            </div>
          </div>


          <div class="day tues">
            <div class="date">

              <p class="date-day">Tues</p>
            </div>
            <div class="calendar_events">
              <div class="calendar_event start-10 end-12 corp-fi">
                <p class="title">Corporate Finance</p>
                <p class="time">10 AM - 12 PM</p>
              </div>
              <div class="calendar_event start-1 end-4 ent-law">
                <p class="title">Entertainment Law</p>
                <p class="time">1 PM - 4 PM</p>
              </div>
            </div>
          </div>


          <div class="day wed">
            <div class="date">

              <p class="date-day">Wed</p>
            </div>
            <div class="calendar_events">
              <div class="calendar_event start-11 end-1 writing">
                <p class="title">Writing Seminar</p>
                <p class="time">11 AM - 1PM</p>
              </div>
              <div class="calendar_event start-2 end-5 securities">
                <p class="title">Securities Regulation</p>
                <p class="time">2 PM - 5 PM</p>
              </div>
            </div>
          </div>


          <div class="day thurs">
            <div class="date">

              <p class="date-day">Thurs</p>
            </div>
            <div class="calendar_events">
              <div class="calendar_event start-10 end-12 corp-fi">
                <p class="title">Corporate Finance</p>
                <p class="time">10 AM - 12 PM</p>
              </div>
              <div class="calendar_event start-1 end-4 ent-law">
                <p class="title">Entertainment Law</p>
                <p class="time">1 PM - 4 PM</p>
              </div>
            </div>
          </div>


          <div class="day fri">
            <div class="date">
              <p class="date-day">Fri</p>
            </div>
            <div class="calendar_events">

            </div>
          </div>



        </div>
      </div>
    </>
  );
}

export default Calendar;
