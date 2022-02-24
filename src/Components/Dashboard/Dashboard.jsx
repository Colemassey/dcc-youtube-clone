import React, {useState} from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import HomePage from '../HomePage/HomePage';


const Dashboard = () => {
    const [user, setUser] = useState(undefined)
    return ( 
        <div>
            <Navigate to='/login' replace={true}></Navigate> :
            <Routes>
                <Route path='/' element={<HomePage />} />
            </Routes>
        </div>
     );
}
 
export default Dashboard;