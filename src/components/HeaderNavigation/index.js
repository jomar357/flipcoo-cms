import React, { useState } from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Logo from "../../images/flipcoo.png"


const HeaderNav = () => {
   const [ open, setOpen ] = useState(false)
  return (
  <nav className="navbar navbar-expand-lg navbar-dark bg-orange static-top">
    <div className="container">
      <div className="col-lg-2 col-sm-6">
        <a className="navbar-brand" href="/"><img src={Logo} alt="flipcoo logo"/></a>
      </div>    
      <button aria-expanded={open === true ? "true" : "false"} className={open === true ? "active navbar-toggler" : "navbar-toggler"} onClick={ () => setOpen(!open) } type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={open ? "show collapse navbar-collapse" : "collapse navbar-collapse"} id="navbarResponsive">
        <div className="col-lg-8">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/why-us/">Why Us
                <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/pricing/">Pricing</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/integration/">Integration</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/products/">Hot Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/community/">Community</a>
            </li>
          </ul>
        </div>
        <div className="col-lg-4">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://app.flipcoo.com/login">Sign In</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" target="_blank" href="https://app.flipcoo.com/register">Get Started</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
)
}

export default HeaderNav