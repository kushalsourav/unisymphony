import React from 'react';
import "./AcademicFeed.css";
import Thread from '../Thread/Thread';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faUser } from '@fortawesome/free-solid-svg-icons';

const AcademicFeed = () => {
    return (
        <div className='academicfeed'>
            <h3 className="academicfeed_heading">Academic Discussions</h3>
            <div className="academicfeed_box">
                <Thread />
                <Thread />
                <Thread />
            </div>
            <div className="academicfeed_post">
                <div className="thread_avatar avatar-1 left-10">
                    <FontAwesomeIcon className='thread_avatar-icons' icon={faUser} />
                </div>
                    <div className="post_details">
                        <h6 className="post_username">Ashborn</h6>
                        <button className="post_post">post</button>
                    </div>
                    <input type="text" className="post_form" placeholder='start here...' />
            </div>
        </div>
    );
}

export default AcademicFeed;
