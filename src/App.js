import { Routes, Route } from 'react-router-dom'
import {useEffect, useState} from 'react'

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
    <div className="App">
      <Nav/>
      <Routes>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
