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
        <a href="/integration/">Integration</a>
        <a href="/products/">Hot Products</a>
        <a href="/community/">Community</a>
        <a href="#">Contact Us</a>
        <div className="row" id="social-icons-row">   
          <div className="copyright col-lg-5">
            <span>2020 Copyright Flipcoo. All Rights Reserved.</span>
          </div> 
          <div className="social-icons col-lg-7">
            <a href="https://www.facebook.com/flipcoo2020" target="_blank" className="fab fa-facebook"></a>
            <a href="https://twitter.com/Flipcoo2020" target="_blank" className="fab fa-twitter"></a>
             <a href="https://hk.linkedin.com/company/flipcoo?trk=public_profile_experience-item_result-card_subtitle-click" target="_blank" className="fab fa-linkedin"></a>
            <a href="https://www.instagram.com/flipcoo/" target="_blank" className="fab fa-instagram"></a>
            <a href="https://www.pinterest.com/flipcoo/" target="_blank" className="fab fa-pinterest"></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
)

export default FooterNav