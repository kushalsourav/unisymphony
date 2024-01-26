import React from 'react';
import "./Sidebar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpFromWaterPump, faBriefcase, faIndustry, faPeopleArrows, faSearch, faSignsPost, faUser, faUserTie } from '@fortawesome/free-solid-svg-icons';


const Sidebar = () => {
    return (
        <div className='sidebar'>
            <ul className="sidebar_list">
                <li className="sidebar_items">
                 <Link className='sidebar_link'>
                    <FontAwesomeIcon icon={faUserTie} />
                 </Link>
                </li>
                <li className="sidebar_items">
                <Link className='sidebar_link'>
                    <FontAwesomeIcon icon={faSearch}/>
                </Link>
                </li>
                <li className="sidebar_items">
                <Link className='sidebar_link'>
                    <FontAwesomeIcon icon={faPeopleArrows}/>
                </Link>
                </li>
                <li className="sidebar_items">
                <Link className='sidebar_link'>
                    <FontAwesomeIcon icon={faBriefcase}/>
                </Link>
                </li>
            </ul>
        </div>
    );
}

export default Sidebar;
