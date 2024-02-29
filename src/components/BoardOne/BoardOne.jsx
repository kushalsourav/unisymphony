import React from 'react';
import "./BoardOne.css";
import welcomeimage from "../../assets/img/output-onlinepngtools.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import ActiveCourse from '../ActiveCourse/ActiveCourse';
import FeaturedCourse from '../FeaturedCourse/FeaturedCourse';

const BoardOne = () => {
    return (
        <div className='boardone'>
            <div className="boardone-header">
              <div className="boardone-info">
                <h2 className="heading-secondary">Welcome Back</h2>
                <h1 className="heading-primary">AshBorn</h1>
                <small className="grey-text">ready to embark on your learning journey?</small>
              </div>
              <img src={welcomeimage} alt="" className="boardone-img" />
            </div>

            <div className="boardone_stats">
                <div className="boardone_stats-course">
                    <h4 className="course_header">Course Stats</h4>
                    <span>view all <FontAwesomeIcon icon={faArrowRight} /> </span>
                </div>
                <div className="boardone_course">
                   <ActiveCourse />
                   <ActiveCourse />
                   <ActiveCourse />
                   <ActiveCourse />
                   <ActiveCourse />
                
                </div>
            </div>

            <div className="boardtwo_stats">
            <div className="boardone_stats-course">
                    <h4 className="course_header">Featured Courses</h4>
                    <span>view all <FontAwesomeIcon icon={faArrowRight} /> </span>
                </div>
                <div className="boardone_course">
                   <FeaturedCourse />
                   <FeaturedCourse />
                   <FeaturedCourse />
                   <FeaturedCourse />
                </div>
            </div>
        </div>
    );
}

export default BoardOne;
