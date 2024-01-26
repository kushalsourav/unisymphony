import React from 'react';
import "./AcademicFeed.css";
import Thread from '../Thread/Thread';

const AcademicFeed = () => {
    return (
        <div className='academicfeed'>
            <h3 className="academicfeed_heading">Academic Discussions</h3>
            <div className="academicfeed_box">
                <div className="academicfeed_post">
                    
                </div>
                <Thread />
                <Thread />
                <Thread />
            </div>
        </div>
    );
}

export default AcademicFeed;
