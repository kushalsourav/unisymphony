import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home/Home';
import Calendar from '../pages/Calendar/Calendar';
import Forums from '../pages/Forums/Forums';
import Learning from '../pages/Learning/Learning';
import HomeBoard from '../components/HomeBoard/HomeBoard';
import Chat from '../pages/Chat/Chat';
import StudentProfile from '../pages/StudentProfile/StudentProfile';
import InterviewInsights from '../components/InterviewInsights/InterviewInsights';
import Explore from '../pages/Explore/Explore';
import SignIn from '../Views/SignIn/SignIn';
import SignUp from '../Views/SignUp/SignUp';
import RequireAuth  from '../contexts/AuthContext/RequireAuth/RequireAuth';
import { useAuth } from '../contexts/AuthContext/AuthContext';
import FacultyDashboard from '../components/FacultyDashboard/FacultyDashboard';


const Router = () => {
    
    const {authState} = useAuth()
    const [role, setRole] = useState('')
    console.log(authState.user)
    return (
        <Routes>
            <Route path='/' element={<RequireAuth><Home /></RequireAuth>} />
            <Route path='/calendar' element={<RequireAuth><Calendar /></RequireAuth>} />
            <Route path='/forums' element={<RequireAuth><Forums /></RequireAuth>} />
            <Route path='/learning' element={<RequireAuth><HomeBoard /></RequireAuth>} />
            <Route path='/chat' element={<RequireAuth><Chat /></RequireAuth>} /> 
            <Route path='/insights' element={<RequireAuth><InterviewInsights /></RequireAuth>} />
            <Route path='/explore' element={<RequireAuth><Explore /></RequireAuth>} />
            <Route path='/faculty' element={<RequireAuth><FacultyDashboard /></RequireAuth>} />
            <Route path="/Auth/Signin" element={<SignIn />} />
            <Route path="/Auth/Signup" element={<SignUp />} />
        </Routes>
    );
}

export default Router;
