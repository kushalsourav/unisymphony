import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Calendar from '../pages/Calendar/Calendar';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/calendar' element={<Calendar />} />
        </Routes>
    );
}

export default Router;
