import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute";
function App() {

  const[isLoggedIn, setIsLoggedIn]=useState(false);
  return (
    <div className="w-screen h-screen bg-richblack-900 flex flex-col">
      <NavBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>


      <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/logIn" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/logOut" element={<Login setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/signUp" element={<SignUp setIsLoggedIn={setIsLoggedIn}/>}/>
        <Route path="/dashboard" element={
          <PrivateRoute isLoggedIn={isLoggedIn}>
            <Dashboard/>
          </PrivateRoute>
        }/>

      </Routes>
    </div>
  );
}

export default App;
