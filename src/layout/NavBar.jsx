import React from "react";
import { Button } from "react-bootstrap";
import { PiStudent } from "react-icons/pi";
const NavBar = () => {
    return (
        <div className="nav-bar-item">
            <div className="logo">
                <PiStudent />
                <p className="business">
                    Hoc Sinh
                </p>
                <Button variant="primary" size="lg" active>
                    Primary button
                </Button>
            </div>
        </div>
    )
}
export default NavBar;