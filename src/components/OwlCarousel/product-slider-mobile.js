import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import IronHairStraightenerImg from "../../images/iron-hair-straightener.png"
import ProfessionalYogaMatImg from "../../images/professional-yoga-mat.png"
import OutdoorWaterBottleImg from "../../images/outdoor-water-bottle.png"
import WirelessComputerMouseImg from "../../images/wireless-computer-mouse.png"
 
// ....
// className "owl-theme" is optional

const ProductSliderMobile = () => {
  return (
    <OwlCarousel className="owl-theme" id="product-row" loop margin={10} dots={false} navSpeed={1000} autoplay={true} items={1} nav navText={'',''} >
      <div className="product">
        <img src={IronHairStraightenerImg} alt="iron hair straightener" />
        <p className="product-name">Iron Hair Straightener</p>
        <p className="product-price">$39.99</p>
        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
      </div>  
      <div className="product">
        <img src={ProfessionalYogaMatImg} alt="professional yoga mat" />
        <p className="product-name">Professional Yoga Mat</p>
        <p className="product-price">$22.99</p>
        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
      </div>          
      <div className="product">
        <img src={OutdoorWaterBottleImg} alt="outdoor water bottle" />
        <p className="product-name">Outdoor Water Bottle</p>
        <p className="product-price">$15.99</p>
        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
      </div>
      <div className="product"> 
        <img src={WirelessComputerMouseImg} alt="wireless computer mouse" />
        <p className="product-name">Wireless Computer Mouse</p>
        <p className="product-price">$25.99</p>
        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
      </div>
    </OwlCarousel>
  )
}

export default ProductSliderMobile