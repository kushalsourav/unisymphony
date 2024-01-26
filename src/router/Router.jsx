import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Calendar from '../pages/Calendar/Calendar';
import Forums from '../pages/Forums/Forums';
import Learning from '../pages/Learning/Learning';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calendar' element={<Calendar />} />
            <Route path='/forums' element={<Forums />} />
            <Route path='/learning' element={<Learning />} />
        </Routes>
    );
}

export default Router;
