import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Calendar from '../pages/Calendar/Calendar';
import Forums from '../pages/Forums/Forums';
import Learning from '../pages/Learning/Learning';
import HomeBoard from '../components/HomeBoard/HomeBoard';
import Chat from '../pages/Chat/Chat';
import StudentProfile from '../pages/StudentProfile/StudentProfile';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/forums' element={<Forums />} />
            <Route path='/learning' element={<HomeBoard />} />
            <Route path='/chat' element={<StudentProfile />} /> 
        </Routes>
    );
}

export default Router;
