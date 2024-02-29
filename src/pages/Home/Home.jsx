import React from 'react';
import Overview from '../../components/Overview/Overview';
import StudentDashboard from '../../components/StudentDashboard/StudentDashboard';
import Tree from '../../components/Tree/Tree';
import TrainModel from '../../components/TrainModel/TrainModel';

const Home = () => {
    return (
        <div>
           <StudentDashboard />
           <Tree />
   
        </div>
    );
}

export default Home;
