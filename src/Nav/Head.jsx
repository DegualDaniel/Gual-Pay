
import React, { useState } from "react";
import "./Head.css";
import Logo from "../../src/assets/Logo.svg";
import Menu from "../../src/assets/menuu.svg"; 
// import { Link } from "react-router-dom";

const Head = () => {
    const [menuOpen, setMenuOpen] = useState(false);

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
                {/* <li><Link to="">Markets</Link></li>
                <li><Link to="">Tools</Link></li>
                <li><Link to="">Education</Link></li>
                <li><Link to="">About</Link></li> */}


                <li><a href="">Markets</a></li>
                <li><a href="">Tools</a></li>
                <li><a href="">Education</a></li>
                <li><a href="">About</a></li>
 
            </ul>
            <div className="btn">
                <button >Login</button>
                <button>Sign Up</button>

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




















