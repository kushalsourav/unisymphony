// InterestSelection.js
import React, { useState } from 'react';
import './InterestSelection.css';
import { createProfile } from '../../apis/apis';

const InterestSelection = ({data, setData}) => {
    const [selectedInterests, setSelectedInterests] = useState([]);
    const token = localStorage.getItem("token")
    const interests = [
        'Artificial Intelligence',
        'Machine Learning',
        'Data Science',
        'Software Engineering',
        'Web Development',
        'Cybersecurity',
        'Computer Graphics',
        'Robotics',
        'Database Management',
        'Networking'
    ];

    const toggleInterest = interest => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    return (
        <div className="interests-container">
            <p className="interest-header">Select your interests:</p>
            <div className="interests-list">
                {interests.map(interest => (
                    <div
                        key={interest}
                        className={`interest-item ${selectedInterests.includes(interest) ? 'selected' : ''}`}
                        onClick={() => {toggleInterest(interest)
                        setData({type:"SETUP", role:data.userProfile.type, interests:interest})}
                        }
                    >
                        {interest}
                    </div>
                ))}
            </div>

            <button onClick={() => {
                console.log(data.userProfile)
                createProfile(data.userProfile, token)
            }}>Submit</button>
        </div>
    );
};

export default InterestSelection;
