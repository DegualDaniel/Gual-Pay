
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Head.css";
import Logo from "../../src/assets/Logo.svg";
import Menu from "../../src/assets/menuu.svg"; 
import { Link } from "react-router-dom";

const Head = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navigate = useNavigate();



    const handleMenuClick = (e) => {
        e.preventDefault();
        setMenuOpen((prev) => !prev);
    };

    return (
        <nav>
            <div className="logo">
                <img src={Logo} alt="" />
                <p> Gual </p>
            </div>

            <ul className={menuOpen ? "active" : ""}>
                <li><Link to="/login">Markets</Link></li>
                <li><Link to="/login">Tools</Link></li>
                <li><Link to="/login">Education</Link></li>
                <li><Link to="/login">About</Link></li>
            </ul>



            <div className="btn">
                <button onClick={() => navigate("/login")}>Login</button>
                <button onClick={() => navigate("/signup")}>Sign Up</button>

                {/* <Button btnName='Sign Up | Sign In' /> */}
            </div>
            <li className="menu">
                <a href="#" onClick={handleMenuClick}>
                    <img src={Menu} alt="Menu" />
                </a>
            </li>
        </nav>
    );
};

export default Head;




















