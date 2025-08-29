


import React from 'react'
import scan from '../assets/scan.png'
import logo from '../assets/Logo.svg'
import './Footer.css'




const Footer = () => {
  return (
    <div>
            {/* <!-- FOOTER --> */}
    <footer>
      {/* <!-- LOGO --> */}
      <div class="logo ft-logo">
        {/* <img src="img/Logo.svg" alt="" /> */}
        <img src={logo} alt="" />
        <h1>Gual</h1>
      </div>

      <div class="ft-sec1">
        <div class="ft-cont1">
            <img src={scan} alt="" />
          {/* <img src="img/scan.png" alt="" /> */}
        </div>
        {/* <!--  --> */}
        <div class="ft-cont1-1">
        <div class="ft-cont2">
          <ul>
          <h3>About</h3>
            <li>Our company</li>
            <li>Careers</li>
            <li>Press kits</li>
          </ul>
        </div>

        <div class="ft-cont2">
          
          <ul>
            <h3>Legal</h3>
            <li>Terms of use</li>
            <li>Privacy policy</li>
            <li>About us</li>
          </ul>
        </div>
        <div class="ft-cont2 ft-cont2-1">
          <ul>
          <h3>Support</h3>
            <li>Contact us</li>
            <li>FAQ</li>  
          </ul>
        </div>
        </div>
      </div>
      {/* <!-- COPYRIGHT --> */}
      <div class="ft-sec2">
        {/* <!-- <div class="ft-sec2-1"> --> */}
          <h3>English(United Kingdom)</h3>
          <p> &#169; Gual Corp, LLC</p>
        {/* <!-- </div> --> */}
      </div>
    </footer>
    </div>
  )
}

export default Footer