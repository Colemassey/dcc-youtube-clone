import { Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'
import LoginForm from './Components/LoginForm/LoginForm'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  
  // const [user, setUser] = useState(null)

  // useEffect(() => {

  //   const jwt = localStorage.getItem('token');
  //   try {
  //     const decodedUser = jwt_decode(jwt);
  //     setUser(decodedUser);

  //   } catch { }
  // }, [])


  return (
    <div className="App">
      {/* <Nav/> */}
      <Routes>
        <Route path="/" element={<LoginForm />} />
      </Routes>
    </div>
  );
}

export default App;
