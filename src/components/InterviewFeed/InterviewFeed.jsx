import React from 'react';
import "./InterviewFeed.css";
import Feeds from '../Feeds/Feeds';

const InterviewFeed = () => {
    return (
        <div className='interviewfeed'>
            <h1 className='heading_primary'>Interview  Insights</h1>
            <Feeds />
            <Feeds />
            <Feeds />
            <Feeds />
            <Feeds />
        </div>
    );
}

export default InterviewFeed;
