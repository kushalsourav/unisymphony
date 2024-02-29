import React from 'react';
import "./NavigateBar.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBorderAll, faCalendar, faCalendarCheck, faClipboard, faHome } from '@fortawesome/free-solid-svg-icons';

const NavigateBar = () => {
    return (
        <div className='navigatebar'>
            <ul className='navigatebar_navigator'>
                <Link to="/" className='navigatebar_link'>
                    <li className="navigatebar_to">
                        <span className='navigatebar_icons'>
                            <FontAwesomeIcon icon={faBorderAll}  className='navigatebar_icon' />
                        </span>
                        <span className='navigatebar_text'>overview</span>
                    </li>
                </Link>
                <Link to="/calendar" className='navigatebar_link'>
                    <li className="navigatebar_to">
                    <span className='navigatebar_icons'>
                            <FontAwesomeIcon icon={faCalendar} className='navigatebar_icon' />
                        </span>

                        <span className='navigatebar_text'>calendar</span>
                        </li>
                </Link>
                <Link to="/forums" className='navigatebar_link'>
                    <li className="navigatebar_to">
                    <span className='navigatebar_icons'>
                            <FontAwesomeIcon icon={faClipboard} className='navigatebar_icon' />
                        </span>
                        <span className='navigatebar_text'>Forums</span>
                        </li>
                </Link>
                <Link to="/learning" className='navigatebar_link'>
                    <li className="navigatebar_to">
                    <span className='navigatebar_icons'>
                            <FontAwesomeIcon icon={faHome} className='navigatebar_icon' />
                        </span>
                       <span className='navigatebar_text'>Home</span>
                        </li>
                </Link>
            </ul>
        </div>
    );
}

export default NavigateBar;
