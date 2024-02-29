import { faBuildingColumns, faChalkboard, faComments, faLinesLeaning } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import "./Myforum.css";


const Myforum = () => {
    return (
        <div className="myforum">
            <h3 className="myforum_head">
                <FontAwesomeIcon icon={faComments} className='myforum_icon' />
                myForum
            </h3>
            <ul className="myforum_list">
                <li className="myforum_items">  <FontAwesomeIcon icon={faBuildingColumns} className='myforum_icon' />  Academic Advice</li>
                <li className="myforum_items">  <FontAwesomeIcon icon={faLinesLeaning} className='myforum_icon' />  Career Advice</li>
                <li className="myforum_items"> <FontAwesomeIcon icon={faChalkboard} className='myforum_icon' />  Interview Trends</li>
            </ul>
        </div>
    );
}

export default Myforum;
