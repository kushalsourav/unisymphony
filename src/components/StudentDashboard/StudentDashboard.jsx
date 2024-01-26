import React from 'react';
import "./StudentDashboard.css";
import Sidebar from '../Sidebar/Sidebar';
import InterviewFeed from '../InterviewFeed/InterviewFeed';
import Events from '../Events/Events';
import Projects from '../Projects/Projects';

const StudentDashboard = () => {
    return (
        <div className='stdashboard'>
          <Sidebar />
          <InterviewFeed />
          <div className="stdashboard_insights">
            <div className="stdashboard_events">
              <h3 className='stdashboard_h3'>Events</h3>
              <div className="events">
              <Events />
              <Events />
              <Events />
              </div>
              <button className="event_btn">view all events</button>
            </div>
    
            <div className="stdashboard_projects">
            <h3 className='stdashboard_h3'>Projects</h3>
            <div className="projects">
               <Projects />
               <Projects />
               <Projects />

            </div>
            <button className="project_btn">view all projects</button>
            </div>
          </div>
        </div>
    );
}

export default StudentDashboard;
