import React from "react";
import './App.css';
import { BrowserRouter, Router, Routes, Route, Navigate } from "react-router-dom";
import routes from "./config/routes";
import ResponsiveAppBar from "./components/Nav/Nav";
import {ResponsiveBottomNavigation} from "./components/Footer/Footer";
import { Home } from "./pages/Home/Home";
import { Airports } from "./pages/Airports/Airports";
import { AirportDetails } from "./pages/AirportDetails/AirportDetails";
import { Flights } from "./pages/Flights/Flights";
import { FAQ } from "./pages/FAQ/FAQ";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <>
        <BrowserRouter>
          <ResponsiveAppBar />
          <ToastContainer position="top-center" autoClose="1500" style={{ width: "400px"}} />
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/Update/:id"} element={<Home />} />
            <Route path={"/Airports"} element={<Airports />} />
            <Route path={"/Details/:id"} element={<AirportDetails />} />
            <Route path={"/Flights"} element={<Flights />} />
            <Route path={"/FAQ"} element={<FAQ />} />
          </Routes>
          <ResponsiveBottomNavigation />
        </BrowserRouter>
    </>
  );
}

export default App;
