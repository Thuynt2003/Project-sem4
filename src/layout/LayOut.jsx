import React from "react";
import Header from "./Header";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import '../style/mainStyle.css'
const LayOut = () => {
    return (
        // <div className="container">
        //     {/* <div className="nav-bar">
        //         <NavBar />
        //     </div> */}
        //     <Sidebar></Sidebar>
        //     <div className="header-content">
        //         <div className="header">
        //             <Header />
        //         </div>
        //         <div className="content">
        //             <Routes>
        //                 <Route path="/" element={<Home />} />
        //             </Routes>
        //         </div>
        //     </div>

        // </div>
        <Sidebar></Sidebar>
    )
}
export default LayOut;