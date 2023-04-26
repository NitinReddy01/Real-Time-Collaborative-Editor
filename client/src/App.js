import './App.css'
import Lobby from './Components/lobby/Lobby';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Room from './Components/room/Room';
import { useState } from 'react';

function App() {
  const [name,setName] = useState(null);
  const [flag,setFlag] = useState(false);
  let changeName = (uname)=>{
    setName(uname);
  }
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Lobby setname={changeName} flag={flag} />} />
          <Route path='/:roomId' element={<Room name={name} setflag={setFlag}/>} />
        </Routes>
      </Router>
  );
}

export default App;
