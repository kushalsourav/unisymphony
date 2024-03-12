import React from 'react';
import "./FeaturedCourse.css";
import imgL from "../../assets/img/7408.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faTimes } from '@fortawesome/free-solid-svg-icons';

const FeaturedCourse = () => {
    return (
        <div className="featured_body" style={{
            backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.7)), url(${imgL})`,
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            }}>
       
        <div className="featured_details">
            <h5 className="featured_title">Machine Learning</h5>
            <p className="featured_description">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas, impedit aut eius iure a ab!</p>
            <span className="featured_duration">
                <FontAwesomeIcon className="featured_icon" icon={faClock} />
                8hr
            </span>
        </div>
    </div>
    );
}

export default FeaturedCourse;
