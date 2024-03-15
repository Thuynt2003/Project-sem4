import React from "react";
import { PiStudent } from "react-icons/pi";
const NavBar = () => {
    return (
        <div className="nav-bar-item">
            <div className="logo">
                <PiStudent />
                <p className="business">
                    Hoc Sinh
                </p>
            </div>
        </div>
    )
}
export default NavBar;