import React from 'react';
import { Routes, ROute, Navigate } from 'react-router-dom'

const Dashboard = () => {
    
    const [user, setUser] = useState(undefined)
    return (
        <div>
            {!user ?
                <Navigate to='/login' replace={true}></Navigate> :
                <Routes></Routes>
                
                
                
                
                
                }
        </div> 
         );
}
 
export default Dashboard;