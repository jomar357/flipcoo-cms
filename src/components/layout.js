import React from 'react'
import { Link } from 'gatsby'
import base from './base.css'
import Container from './container'
import Navigation from './navigation'
import { Helmet } from "react-helmet"
import HeaderNav from "./HeaderNavigation"
import FooterNav from "./FooterNavigation"
import "./styles.css"
import "./layout.css"
import "./five-column-grid.css"


class Template extends React.Component {
  render() {
    const { location, children } = this.props
    let header

    let rootPath = `/`
    if (typeof __PREFIX_PATHS__ !== `undefined` && __PREFIX_PATHS__) {
      rootPath = __PATH_PREFIX__ + `/`
    }

    return (
      <Container>
        <Helmet>
          <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
          <link href="https://use.fontawesome.com/releases/v5.0.8/css/all.css" rel="stylesheet" />
        </Helmet>
        <HeaderNav />
        {children}
        <FooterNav />
      </Container>
    )
  }
}

export default Template
