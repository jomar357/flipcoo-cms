import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from "../components/ContactForm"
import ArticlePreview from '../components/article-preview'
import FaqAccordion from "../components/Accordions/faq"

class PricingPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title="Our Pricing Packages | Flipcoo" />
          <div className="container-fluid" id="pricing-hero-section">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="hero-content"> 
                  <h1>Our Pricing Packages</h1>
                  <p className="lead">We offer 3 different levels of pricing plans for any size business - find what fits best for your eCommerce business.</p>
                </div>
                <a target="_blank" href="https://app.flipcoo.com/register" className="btn btn-primary">Get Started For Free</a>
              </div>
            </div>
          </div>
          <div className="container text-center pricing-section" id="services-section">
            <div className="row" id="pricing-plans">
              <div className="col-lg-4">
                <div className="pricing">
                  <h3>Lite</h3>
                  <div className="price-desc">
                    <h4>Free</h4>
                    <p>All the dropshipping basics<br/> you need to get started.</p>
                    <ul>
                      <li>Unlimited monthly orders</li>
                      <li>Flipcoo Deals weekly emails</li>
                      <li>Automated product pricing</li>
                      <li>Inventory updates</li>
                      <li>Access to 50k+ products</li>
                    </ul>  
                  </div>
                </div>  
              </div>
              <div className="col-lg-4">
                <div className="pricing">
                  <h3>Professional</h3>
                  <div className="price-desc">
                    <h4>$59.99 <span>/month</span></h4>
                    <p>Features for taking your drop-shipping business to the next level.</p>
                    <ul>
                      <li>Real time orders tracking</li>
                      <li>Orders fulfillment monitoring</li>
                      <li>One premium data export</li>
                      <li>Access to all Flipcoo suppliers</li>
                      <li>Access to 60k+ products</li>
                    </ul>  
                  </div>
                </div>  
              </div>
              <div className="col-lg-4">
                <div className="pricing">
                  <h3>Enterprise</h3>
                  <div className="price-desc">
                    <h4>$129.99 <span>/month</span></h4>
                    <p>Professional functionality when it's time to scale your business.</p>
                    <ul>
                      <li>Multiple staff accounts</li>
                      <li>Place multiple orders with one click</li>
                      <li>Dedicated account manager</li>
                      <li>Merchandising services</li>
                      <li>API Integration</li>
                    </ul>  
                  </div>
                </div>  
              </div>
            </div>
          </div>
          <div className="container text-center pricing-section" id="pricing-section-1">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2>Frequently Asked Questions</h2>
                <FaqAccordion />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default PricingPage
