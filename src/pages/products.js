import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from "../components/ContactForm"
import ArticlePreview from '../components/article-preview'
import IronHairStraightenerImg from "../images/iron-hair-straightener.png"
import ProfessionalYogaMatImg from "../images/professional-yoga-mat.png"
import OutdoorWaterBottleImg from "../images/outdoor-water-bottle.png"
import WirelessComputerMouseImg from "../images/wireless-computer-mouse.png"

import PetSuppliesImg from "../images/products/dropship-pet-supplies.jpg"
import ElectronicsImg from "../images/products/dropship-electronics-and-computer.jpg"
import HomeDecorImg from "../images/products/dropship-home-decor.jpg"
import LuggageBagsImg from "../images/products/dropship-luggage-and-bags.jpg"
import MensApparelImg from "../images/products/dropship-mens-apparel-and-accessories.jpg"
import SportsImg from "../images/products/dropship-sports-and-outdoors.jpg"
import ToysKidsImg from "../images/products/dropship-toys-kids-and-babies.jpg"
import WomensApparelImg from "../images/products/dropship-womens-apparel-and-accessories.jpg"
import CoupangWhiteImg from "../images/coupang-white.png"
import EbayWhiteImg from "../images/ebay-white.png"
import LazadaWhiteImg from "../images/lazada-white.png"
import WoocommerceWhiteImg from "../images/woocommerce-white.png"
import MagentoWhiteImg from "../images/magento-white.png"


import Loadable from "react-loadable"
const loader=()=>(<div>Loading...</div>)

const MyProductsCarousel = Loadable({
  loader: () => import("../components/OwlCarousel/product-slider"),
  loading: loader,
})

const MyProductsCarouselMobile = Loadable({
  loader: () => import("../components/OwlCarousel/product-slider-mobile"),
  loading: loader,
})

class ProductsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
		<Layout location={this.props.location}>
			<div style={{ background: '#fff' }}>
				<Helmet title="Hot Products | Flipcoo" />
					<div className="container-fluid" id="products-hero-section">
					<div className="row">
					  <div className="col-lg-12 text-center">
					    <div className="hero-content"> 
					      <h1>Flipcoo's Hottest Products</h1>
					      <p className="lead">Checkout some popular picks below <br /> Sign up for a free Flipcoo account to see all our dropship products</p>
					    </div>
					    <a href="#" className="btn btn-primary">Get Started For Free</a>
					  </div>
					</div>
				</div>
				<div className="container text-center products-section" id="products-section-1">
					<div className="row">
					  <div className="col-lg-12 text-center">
					    <h2>New and Best Selling Products in Flipcoo Platform</h2>
					    <p>Flipcoo gives you access to hundreds of awesome products. Looking for one to sell in your store?</p>
					  </div>
					</div>
					<div className="row align-items-center owl-slider">
					  <div className="col-12 col-carousel">
					    <MyProductsCarousel />
					  </div>
					</div>
					<div className="row align-items-center owl-slider-mobile">
		            	<div className="col-12 col-carousel">
		                	<MyProductsCarouselMobile />
		              	</div>
            		</div>    
				</div>
				<div className="container text-center products-section" id="products-section-2">
					<div className="row">
					  <div className="col-lg-12 text-center">
					    <h2>Trending Dropshipping Categories</h2>
					    <p>We have over 20+ dropship categories to help you cover any niche of your choice.<br /> Signup for a free account to see all our products and categories.</p>
					  </div>
					</div>
					<div className="row" id="product-row">
						<div className="col-md-3">
							<div className="product">
							  	<img src={PetSuppliesImg} alt="pet supplies" />
							    <p className="product-name one-line">Dropship Pet Supplies</p>
							    <div className="trending-container">
							      <i className="fa fa-chevron-up"></i>
							      <i className="fa fa-chevron-down"></i>
							      <div className="trending-hide">
							        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							      </div>
							    </div>  
							</div>  
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={ToysKidsImg} alt="toys kids and babies" />
							    <p className="product-name one-line">Dropship Toys, Kids & Babies</p>
							    <div className="trending-container">
							      <i className="fa fa-chevron-up"></i>
							      <i className="fa fa-chevron-down"></i>
							      <div className="trending-hide">
							        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							      </div>
							    </div>  
							</div>
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={SportsImg} alt="sports and outdoor" />
							    <p className="product-name one-line">Dropship Sports & Outdoor</p>
							    <div className="trending-container">
							      <i className="fa fa-chevron-up"></i>
							      <i className="fa fa-chevron-down"></i>
							      <div className="trending-hide">
							        <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							      </div>
							    </div>    
							</div>
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={HomeDecorImg} alt="home decor" />
							  	<p className="product-name one-line">Dropship Home Decor</p>
							  	<div className="trending-container">
							    <i className="fa fa-chevron-up"></i>
							    <i className="fa fa-chevron-down"></i>
							    <div className="trending-hide">
							      <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							    </div>  
							  </div>  
							</div>
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={ElectronicsImg} alt="electronics and computers" />
							  	<p className="product-name one-line">Dropship Electornics & Computer</p>
							  	<div className="trending-container">
							    <i className="fa fa-chevron-up"></i>
							    <i className="fa fa-chevron-down"></i>
							    <div className="trending-hide">
							      <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							    </div>  
							  </div>  
							</div>
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={LuggageBagsImg} alt="luggage and bags" />
							  	<p className="product-name one-line">Dropship Luggage & Bags</p>
							  	<div className="trending-container">
							    <i className="fa fa-chevron-up"></i>
							    <i className="fa fa-chevron-down"></i>
							    <div className="trending-hide">
							     	<a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							    </div>  
							  </div>  
							</div>
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={MensApparelImg} alt="mens apparel and accessories" />
							  	<p className="product-name">Dropship Men's Apparel & Accessories</p>
							  	<div className="trending-container">
							    <i className="fa fa-chevron-up"></i>
							    <i className="fa fa-chevron-down"></i>
							    <div className="trending-hide">
							      <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							    </div>  
							  </div>  
							</div>
						</div>
						<div className="col-md-3">
							<div className="product">
							  	<img src={WomensApparelImg} alt="womens apparel and accessories" />
							  	<p className="product-name">Dropship Women's Apparel & Accessories</p>
							  	<div className="trending-container">
							    <i className="fa fa-chevron-up"></i>
							    <i className="fa fa-chevron-down"></i>
							    <div className="trending-hide">
							      <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
							    </div>  
							  </div>  
							</div>
						</div>  
					</div>  
			  	</div>
			  	<div className="container-fluid text-center " id="purple-section">
		            <div className="row">
		              	<div className="col-lg-12">
		                	<h2>Integrate with your online store and multiple sales channels</h2>
		                	<div className="col-lg-12">  
			                	<div className="sales-channel">
			                  		<div className="col-lg-5th-1 col-lg-4">
			                    		<img className="lazada" src={LazadaWhiteImg} alt="get flipcoo" />
			                  		</div>
			                  		<div className="col-lg-5th-1 col-lg-4">
			                    		<img className="magento" src={MagentoWhiteImg} alt="find products" />
			                  		</div>
			                  		<div className="col-lg-5th-1 col-lg-4">
			                    		<img className="ebay" src={EbayWhiteImg} alt="list your items" />
			                  		</div>
			                  		<div className="col-lg-5th-1 col-lg-4">
			                    		<img className="woocommerce" src={WoocommerceWhiteImg} alt="sell now" />
			                  		</div>
			                  		<div className="col-lg-5th-1 col-lg-4">
			                    		<img className="coupang" src={CoupangWhiteImg} alt="ready to ship" />	
			                  		</div>
			                  		<div className="clear"></div>
			                	</div>
			            	</div>
		                	<p>Browse our hottest product feeds, integrations and automation tools.</p>
		                	<p>We've made it easier than ever to try our platform.</p>
		                	<a href="#" className="btn btn-primary">Get Started For Free</a>
		              	</div>  
		            </div>
          		</div>
			</div>
		</Layout>
    )
  }
}

export default ProductsPage