import React, { Profiler } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,Link
 
} from "react-router-dom";
import About from "../screens/about";
import Contact from "../screens/contact";
import SignUp from "../screens/home";
import Notfound from "../screens/notfond";
import Profile from "../screens/profile";
import Services from "../screens/services";

export default function AppRouter() {
  return (
        <Router>
            
        <Routes>
        <Route path="/" element={<SignUp/>}/>
        <Route path="profile/:id/services/about" element={<About />}/>
        <Route path="profile/:id/services" element={<Services />}/>
        <Route path="profile/:id/services/about/contact" element={<Contact />}/>
        <Route path="profile/:id" element={<Profile />}/>
        
        <Route path="*" element={<Notfound/>}/>

        </Routes>
      </Router>
  );
}