import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Logo from "../images/flipcoo.png"
import SEO from "../components/seo"

const HeaderNav = () => (
  <nav className="navbar navbar-expand-lg navbar-dark bg-orange static-top">
    <div className="container">
      <div className="col-lg-2 col-sm-6">
        <a className="navbar-brand" href="/"><img src={Logo} alt="flipcoo logo"/></a>
      </div>
      <div className="main-nav">    
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <div className="col-lg-7">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Why Us
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Pricing</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hot Products</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Community</a>
              </li>
            </ul>
          </div>
          <div className="col-lg-5">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Sign In</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Get Started</a>
              </li>
            </ul>
          </div>
        </div>
      </div>  
    </div>
  </nav>
)

export default HeaderNav