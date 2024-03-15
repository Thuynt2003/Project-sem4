import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import '../style/mainStyle.css';
import { PATH } from "../commons/Paths";
import Attendences from "../pages/Attendance/Attendence";

const LayOut = () => {
    return (
        <div className="container">
            <div className="nav-bar">
                <NavBar />
            </div>
            <div className="header-content">
                <div className="header">
                    <Header />
                </div>
                <div className="content">
                    <Routes>
                        <Route path={PATH.HOME} element={<Home />} />
                        <Route path={PATH.ATTENDENCE}element={<Attendences/>} />
                    </Routes>
                </div>

            </div>

        // </div>
        
    )
}
export default LayOut;