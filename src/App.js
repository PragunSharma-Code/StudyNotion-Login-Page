import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";

function App() {

  const [isLoggedIn, setLoggedIn] = useState(false);


  function setIsLoggedIn(response) {
    setLoggedIn(response);
  }


  return (
    <div className="w-screen h-screen bg-richblack-900  flex flex-col overflow-x-auto">
      <Navbar loggedInfo={isLoggedIn} setLoggedIn={setLoggedIn} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/dashboard' element={
          <PrivateRoute  loggedIn={isLoggedIn}>
            <Dashboard />
          </PrivateRoute>
        } />
      </Routes>
    </div>
  )
}

export default App;
