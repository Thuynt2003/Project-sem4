import React from "react";
import { PiStudent } from "react-icons/pi";
const NavBar = () => {
    return (
        <div className="nav-bar-item">
            <div className="logo">
                <PiStudent />
                <p className="name-business">
                    Hoc Sinh
                </p>
            </div>
        </div>
    )
}
export default NavBar;