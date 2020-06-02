import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from "../components/ContactForm"
import ArticlePreview from '../components/article-preview'
import AmazonImg from "../images/logos/amazon.png"
import EbayImg from "../images/logos/ebay.png"
import ShopifyImg from "../images/logos/shopify.png"
import LazadaImg from "../images/logos/lazada.png"
import CoupangImg from "../images/logos/coupang.png"
import WoocommerceImg from "../images/logos/woocommerce.png"
import MagentoImg from "../images/logos/magento.png"
import WalmartImg from "../images/logos/walmart.png"
import BigcommerceImg from "../images/logos/bigcommerce.png"
import RakutenImg from "../images/logos/rakuten.png"
import MyerImg from "../images/logos/myer.png"
import EtsyImg from "../images/logos/etsy.png"
import AnatwineImg from "../images/logos/anatwine.png"
import TrademeImg from "../images/logos/trademe.png"
import IntegrationImg from "../images/integration/integration-img.png"

import ConnectYourStoreImg from "../images/integration/connect-your-store.png"
import ExpressShippingImg from "../images/integration/express-shipping.png"
import FulfillCustomersOrderImg from "../images/integration/fulfill-customers-orders.png"
import FullProductDataImg from "../images/integration/full-product-data-integration.png"
import OptimizedInventoryImg from "../images/integration/optimized-inventory.png"
import CustomerSatisfactionImg from "../images/integration/customer-satisfaction.png"



class IntegrationPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
		<Layout location={this.props.location}>
			<div style={{ background: '#fff' }}>
				<Helmet title="Integration With eCommerce Platforms | Flipcoo" />
				<div className="container-fluid" id="integration-hero-section">
					<div className="row">
					  	<div className="col-lg-12 text-center">
					    	<div className="hero-content"> 
					      		<h1>Integration With eCommerce Platforms</h1>
					      		<p className="lead">We take care of the backend operation so that you can focus on what you love: driving the growth and success of your dropshipping business</p>
					    	</div>
					    	<a target="_blank" href="https://app.flipcoo.com/register" className="btn btn-primary">Get Started For Free</a>
					  	</div>
					</div>
				</div>
				<div className="container text-center integration-section" id="integration-section-1">
					<div className="row">
					  <div className="col-lg-6 text-left">
					    <h2>We Make Dropshipping Easy</h2>
					    <p>Integrate your favourite online store selling platforms seamlessly.<br /> Easily manage your stock shipping and order data all in one system.</p>
					    <ul>
					    	<li>Automatically sync order from your store</li>
					    	<li>Manage multiple stores within one system</li>
					    	<li>Self-built tracking system</li>
					    	<li>Express shipping globally within 7 days</li>
					    </ul>
					  </div>
					  <div className="col-lg-6 text-center">
					    <img src={IntegrationImg} alt="integrate your favourite store" />
					  </div>
					</div>   
				</div>
				<div className="container text-center integration-section" id="integration-section-2">
					<div className="row">
					  	<div className="col-lg-12 text-left">
					    	<h2>Integrate With the Top eCommerce Platforms</h2>
					  	</div>
						<div className="platforms">
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-amazon">
	                    			<img className="" src={AmazonImg} alt="amazon logo" />
	                    		</div>		
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-ebay">
	                    			<img className="" src={EbayImg} alt="ebay logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-shopify">
	                    			<img className="" src={ShopifyImg} alt="shopify logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-lazada">
	                    			<img className="" src={LazadaImg} alt="lazada logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-coupang">
	                    			<img className="" src={CoupangImg} alt="coupang logo" />
	                    		</div>		
	                  		</div>
	                  		<div className="clear"></div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-woocommerce">
	                    			<img className="" src={WoocommerceImg} alt="woocommerce logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-magento">
	                    			<img className="" src={MagentoImg} alt="magento logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-walmart">
	                    			<img className="" src={WalmartImg} alt="walmart logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-bigcommerce">
	                    			<img className="" src={BigcommerceImg} alt="bigcommerce logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-rakuten">
	                    			<img className="" src={RakutenImg} alt="rakuten logo" />
	                    		</div>		
	                  		</div>
	                  		<div className="clear"></div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-myer">
	                    			<img className="" src={MyerImg} alt="myer logo" />
	                    		</div>
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-etsy">
	                    			<img className="" src={EtsyImg} alt="etsy logo" />
	                    		</div>	
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-anatwine">
	                    			<img className="" src={AnatwineImg} alt="anatwine logo" />
	                    		</div>
	                  		</div>
	                  		<div className="col-lg-5th-1 col-lg-4 col-md-6">
	                  			<div className="platform platform-trademe">
	                    			<img className="" src={TrademeImg} alt="trademe logo" />
	                    		</div>	
	                  		</div>
	                	</div>
					</div>    
				</div>
				<div className="container text-center integration-section" id="integration-section-3">
					<div className="row">
					  	<div className="col-lg-12 text-left">
					    	<h2>How Flipcoo Takes Dropshipping To A New Level</h2>
					  	</div>
					</div>  	
					<div className="row platforms">
						<div className="col-lg-4 col-md-6">
                  			<div className="platform">
                    			<img className="" src={ConnectYourStoreImg} alt="connect your store" />
                    			<p>Connect your store to our expanding catalog</p>
                    			<div className="platform-hover">
                    				Our team of expertise is ready to help you with sourcing. You can quickly find and 	add new products to your online store from our ever-growing catalog.
                    			</div>
                    		</div>		
                  		</div>
                  		<div className="col-lg-4 col-md-6">
                  			<div className="platform">
                    			<img className="" src={ExpressShippingImg} alt="express shipping" />
                    			<p>Express shipping within 7 days with full tracking</p>
                    			<div className="platform-hover">
                    				Our trustful shipping partner Shipcoo tracks your shipments from order to delivery. Your order could be delivered in 7 days with Express Shipping.
                    			</div>
                    		</div>		
                  		</div>
                  		<div className="col-lg-4 col-md-6">
                  			<div className="platform">
                    			<img className="" src={OptimizedInventoryImg} alt="optimized inventory" />
                    			<p>Optimized inventory sync</p>
                    			<div className="platform-hover">
                    				Our syncing process pull and push data as often as possible to help your online store to avoid stock-outs.
                    			</div>
                    		</div>		
                  		</div>
                  		<div className="col-lg-4 col-md-6">
                  			<div className="platform">
                    			<img className="" src={FullProductDataImg} alt="full product data integration" />
                    			<p>Full product data integration</p>
                    			<div className="platform-hover">
                    				Our system automatically upload products with multiple images, descriptions, parent/child variation attributes and more.
                    			</div>
                    		</div>		
                  		</div>
                  		<div className="col-lg-4 col-md-6">
                  			<div className="platform">
                    			<img className="" src={FulfillCustomersOrderImg} alt="fulfill customers orders" />
                    			<p>Fulfill customers orders effortlessly</p>
                    			<div className="platform-hover">
                    				Our auto-synced system allows you to fulfill orders in only a few clicks
                    			</div>
                    		</div>		
                  		</div>
                  		<div className="col-lg-4 col-md-6">
                  			<div className="platform">
                    			<img className="" src={CustomerSatisfactionImg} alt="customer satisfaction" />
                    			<p>Improve customer satisfaction</p>
                    			<div className="platform-hover">
                    				Our ordering and tracking syncs eliminate manual entry errors, which improve turn around time and customer satisfaction.
                    			</div>
                    		</div>		
                  		</div>
					</div>    
				</div>
			</div>
		</Layout>
    )
  }
}

export default IntegrationPage