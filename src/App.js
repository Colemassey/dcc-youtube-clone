import { Routes, Route, useNavigate } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import jwt_decode from 'jwt-decode';
import RegistrationForm from './Components/RegistrationForm/RegistrationForm';
import axios from 'axios';
import Dashboard from './Components/Dashboard/Dashboard';
// import HomePage from './Components/HomePage/HomePage';

function App() {
  
  const [user, setUser] = useState(null)
  let navigate = useNavigate();
  useEffect(() => {

    const jwt = localStorage.getItem('token');
    try {
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);

    } catch { }
  }, [])

  async function createUser(credentials){
    console.log(credentials)
    let response = await axios.post('http://127.0.0.1:8000/api/auth/register/', credentials);
    if(response.status === 201){
      navigate('/Dashboard')

     
    }
  }
  return (
    <div>
      <NavigationBar user={user} />
      <div>
        <Routes>
          <Route exact path='/*' element={<Dashboard/>} />
          <Route path='/register' element= {<RegistrationForm createUser={createUser} />} />
          <Route path='/login' element = {<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
