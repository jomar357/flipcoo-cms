import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from "../components/ContactForm"
import ArticlePreview from '../components/article-preview'
import FindProductsImg from "../images/why-us/find-products.png"
import FullProductDataImg from "../images/why-us/full-product-data.png"
import InventoryManagementSystemImg from "../images/why-us/inventory-management-system.png"
import AdvancedSearchImg from "../images/why-us/advanced-search-and-filter-capability.png"
import DataExportsImg from "../images/why-us/data-exports.png"
import ProActiveInventoryAlertsImg from "../images/why-us/proactive-inventory-alerts.png"
import TrustfulLogisticImg from "../images/why-us/trustful-logistic-partner.png"


class WhyUsPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title="Why Us" />
          <div className="container-fluid" id="why-us-hero-section">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="hero-content"> 
                  <h1>Why Flipcoo</h1>
                  <p className="lead">Starting Your Online Business Has Never Been so Simplified</p>
                </div>
                <a href="#" className="btn btn-primary">Get Started For Free</a>
              </div>
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-1">
            <div className="row">
              <div className="col-lg-6 text-left">
                <h2>Find Products to Sell Online</h2>
                <p>When you join Flipcoo, you get immediate access to products from hundreds of suppliers. Discover curated products that you can sell on your store. Choose from niches such as electronics, home decor, sports, beauty and many more.</p>
              </div>
              <div className="col-lg-6">
                <img src={FindProductsImg} alt="find products to sell online" className="" />
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-2">    
            <div className="row">
              <div className="col-lg-6">
                <img src={FullProductDataImg} alt="full product data" className="" />
              </div>
              <div className="col-lg-6 text-right">
                <h2>Full Product Data</h2>
                <p>Flipcoo helps you prepare basic yet detailed digital product data such as delicate pictures, keyword ready product titles and ecommerce ready descriptions, all you need is just select the product that you are familiar with and list it on your store.</p>
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-3">
            <div className="row">
              <div className="col-lg-6 text-left">
                <h2>Inventory Management System</h2>
                <p>Our inventory management system helps you organize lists of products for bulk export to your store or preferred marketplace. Inventory lists allow you yo organize products your way. Create lists by selling channel, niche, pricepoint, product count or any way that fits your needs.</p>
              </div>
              <div className="col-lg-6">
                <img src={InventoryManagementSystemImg} alt="inventory management system" className="" />
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-4">    
            <div className="row">
              <div className="col-lg-6">
                <img src={AdvancedSearchImg} alt="advanced search and filter capability" className="" />
              </div>
              <div className="col-lg-6 text-right">
                <h2>Advanced Search and Filter Capability</h2>
                <p>Flipcoo helps you categorize your products in our catalog. We've upgraded our search technology and made it easy to layer on relevant filters like price, free or fixed shipping, quantity available and several others.</p>
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-5">
            <div className="row">
              <div className="col-lg-6 text-left">
                <h2>Data Exports</h2>
                <p>Export your inventory feed from Flipcoo in the specific format of the ecommerce platform of your choice to avoid spending hours of hassle with spreedsheets. Available formats include Shopify, BigCommerce, Amazon, Ebay and more!</p>
              </div>
              <div className="col-lg-6">
                <img src={DataExportsImg} alt="data exports" className="" />
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-6">    
            <div className="row">
              <div className="col-lg-6">
                <img src={ProActiveInventoryAlertsImg} alt="proactive inventory alerts" className="" />
              </div>
              <div className="col-lg-6 text-right">
                <h2>Proactive Inventory Alerts</h2>
                <p>Flipcoo's custom alerts for low inventory reduces your risk of refunding orders for out-of-stock items. When inventory for one of theses products hits the threshold you specify, we'll let you know.</p>
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-7">    
            <div className="row">
              <div className="col-lg-6">
              </div>
              <div className="col-lg-6 text-right">
                <h2>Automate your Dropshipping</h2>
                <p>Flipcoo allows you to add products to your store directly from our integrated eCommerce platforms with only a couple clicks. The extension also automates fulfillment so you can focus on making more sales.</p>
              </div> 
            </div>
          </div>
          <div className="container-fluid text-center why-us-services" id="why-us-section-8">
            <div className="row">
              <div className="col-lg-6 text-left">
                <h2>Trustful Logistic Partner</h2>
                <p>Flipcoo, an affiliated company of Shipcoo. Flipcoo and Shipcoo are connected. Drop Ship purchases completed through the Flipcoo marketplace automates into your Shipcoo account. The arrangement creates and integrated sales channel for product distribution, which promises increased order visibility and efficient automated delivery.</p>
              </div>
              <div className="col-lg-6">
                <img src={TrustfulLogisticImg} alt="trustful logistic partner" className="" />
              </div> 
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default WhyUsPage
