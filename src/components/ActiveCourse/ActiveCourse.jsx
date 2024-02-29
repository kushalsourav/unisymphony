import React from 'react';
import './ActiveCourse.css';
import imgL from "../../assets/img/7408.jpg";
const ActiveCourse = () => {
    return (
        <div className="course_body">
            <img src={imgL} alt="image" className="course_img" />
            <div className="course_details">
                <h5 className="course_title">Artificial inteligence</h5>
                <div className="course_rangebar">
                    <div class="course_pro course_pro-color">
                        <span className="course_bar"></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ActiveCourse;
