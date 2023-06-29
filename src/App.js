import { BrowserRouter as Router, Routes, Route, Outlet } from "react-router-dom";
import React from "react";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import AddBirthday from "./components/AddBirthday";
import DisplayBirthday from "./components/DisplayBirthday";
import Login from "./components/Login";
import Contact from "./components/Contact";
import Signup from "./components/signup";


const Withoutnav = () => {
  return (
  <Outlet />
  )
};

const Withnav = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<Withoutnav />}>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Route>
        <Route element={<Withnav />}>
          <Route path="/" element={<Home />} />
          <Route path="/add-birthday" element={<AddBirthday />} />
          <Route path="/All-birthday" element={<DisplayBirthday />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
