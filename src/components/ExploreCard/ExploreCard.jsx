import React from 'react';
import "./ExploreCard.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

const ExploreCard = () => {
    return (
        <div class="explore_card">
            <div className="explore_header">
              <h2 class="explore_title">Job Title</h2>
             <p class="explore_date">January 1, 2024</p>
            </div>
    <p class="explore_description">Description or summary of the opportunity goes here. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    <p class="explore_type">Job</p>

    <div className="explore_footer">
        
    <div className="explore_avatar">
        <FontAwesomeIcon className='thread_avatar-icons' icon={faUser} />
    </div>
    <a href="#" class="explore_button">Apply Now</a>
    </div>
</div>
    );
}

export default ExploreCard;
