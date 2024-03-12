import React from 'react';
import './FeedCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAirFreshener } from '@fortawesome/free-solid-svg-icons';

const FeedCard = () => {
    return (
        <div className='feedcard'>
            <span className="feedcard_logo">
            <FontAwesomeIcon icon={faAirFreshener} className='feedcard_icon' />
            </span>
            <div className="feedcard_body">
                <h5 className="feedcard_head">software enginner</h5>
                <ol className="feedcard_list">
                    <li className="feedcard_items">What experience do you have with [specific skill or technology relevant to the job]?</li>
                    <li className="feedcard_items">Can you describe a challenging problem you encountered on a previous project and how you solved it?</li>
                    <li className="feedcard_items">How do you stay updated with the latest developments and trends in the industry?</li>
                    <li className="feedcard_items">Can you walk me through your approach to prioritizing tasks and managing your time effectively?</li>
                </ol>
            </div>
            <button className="feedcard_button">view interview</button>
        </div>
    );
}

export default FeedCard;
