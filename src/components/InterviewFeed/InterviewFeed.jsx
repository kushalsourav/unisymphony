import React from 'react';
import "./InterviewFeed.css";
import Feeds from '../Feeds/Feeds';

const InterviewFeed = () => {
    return (
        <div className='interviewfeed'>
            <Feeds />
            <Feeds />
            <Feeds />
            <Feeds />
            <Feeds />
            <button className='add_btn'>Add Experience</button>
        </div>
    );
}

export default InterviewFeed;
