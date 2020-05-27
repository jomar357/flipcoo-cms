import React from "react"
import { Link } from "gatsby"
import FooterLogo from "../../images/flipcoo.png"

const FooterNav = () => (
  <footer className="container">
    <div className="row">
      <div className="col-lg-3">
        <a href="/">
          <img src={FooterLogo} alt="flipcoo logo" />
        </a>  
        <a href="#">Terms & Conditions</a>
        <a href="#">Privacy & Policy</a>
      </div>
      <div className="col-lg-9">
        <a href="/why-us/">Why Us</a>
        <a href="/pricing/">Pricing</a>
        <a href="#">Hot Products</a>
        <a href="#">Community</a>
        <a href="#">Contact Us</a>
        <div className="row" id="social-icons-row">   
          <div className="copyright col-lg-5">
            <span>2020 Copyright Flipcoo. All Rights Reserved.</span>
          </div> 
          <div className="social-icons col-lg-7">
            <a href="#" className="fab fa-facebook"></a>
            <a href="#" className="fab fa-twitter"></a>
            <a href="#" className="fab fa-google"></a>
            <a href="#" className="fab fa-linkedin"></a>
            <a href="#" className="fab fa-youtube"></a>
            <a href="#" className="fab fa-instagram"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterNav