import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import CoupangImg from "../../images/coupang.png"
import ShopifyImg from "../../images/shopify.png"
import EbayImg from "../../images/ebay.png"
import AmazonImg from "../../images/amazon.png"
import LazadaImg from "../../images/lazada.png"
 
// ....
// className "owl-theme" is optional



const IconSlider = () => {
  return (
    <OwlCarousel className="owl-theme" loop margin={10} dots={false} navSpeed={1000} autoplay={true} items={5} nav navText={'',''} >
        <div>
          <img src={CoupangImg} alt="coupang logo" />
        </div>
        <div>
            <img src={ShopifyImg} alt="shopify logo" />
        </div>
        <div>
          <img src={EbayImg} alt="ebay logo" />
        </div>
        <div>
          <img src={AmazonImg} alt="amazon logo" />
        </div>
        <div>
          <img src={LazadaImg} alt="lazada logo" />
        </div>
    </OwlCarousel>
    )
}

export default IconSlider