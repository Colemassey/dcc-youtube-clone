import { Routes, Route } from 'react-router-dom';
import React, {useEffect, useState} from 'react';
import LoginForm from './Components/LoginForm/LoginForm';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavigationBar from './Components/NavigationBar/NavigationBar';
import jwt_decode from 'jwt-decode';

function App() {
  
  const [user, setUser] = useState(null)

  useEffect(() => {

    const jwt = localStorage.getItem('token');
    try {
      const decodedUser = jwt_decode(jwt);
      setUser(decodedUser);

    } catch { }
  }, [])


  return (
    <div>
      <NavigationBar user={user} />
      <div>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
