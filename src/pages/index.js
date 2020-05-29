import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../components/layout'
import ContactForm from "../components/ContactForm"
import ArticlePreview from '../components/article-preview'
import GetFlipcooImg from "../images/get-flipcoo.png"
import FindProductsImg from "../images/find-products.png"
import ListItemsImg from "../images/list-your-items.png"
import SellNowImg from "../images/sell-now.png"
import ReadyToShipImg from "../images/ready-to-ship.png"
import InfograpImg from "../images/infograp.png"
import BiggerProfitImg from "../images/bigger-profit.png"
import DividerPurplerImg from "../images/divider-purple.png"
import FastDispatchImg from "../images/fast-dispatch.png"
import CompatibilityImg from "../images/compatibility.png"
import IronHairStraightenerImg from "../images/iron-hair-straightener.png"
import ProfessionalYogaMatImg from "../images/professional-yoga-mat.png"
import OutdoorWaterBottleImg from "../images/outdoor-water-bottle.png"
import WirelessComputerMouseImg from "../images/wireless-computer-mouse.png"
import ShipcooImg from "../images/shipcoo-logo.png"

import CoupangImg from "../images/coupang.png"
import ShopifyImg from "../images/shopify.png"
import EbayImg from "../images/ebay.png"
import AmazonImg from "../images/amazon.png"
import LazadaImg from "../images/lazada.png"
import Loadable from "react-loadable"
const loader=()=>(<div>Loading...</div>)

const MyLoadableCarousel = Loadable({
  loader: () => import("../components/OwlCarousel"),
  loading: loader,
})

const MyLoadableCarouselMobile = Loadable({
  loader: () => import("../components/OwlCarousel/owl-slider-mobile"),
  loading: loader,
})

class RootIndex extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const siteDescription = get(this, 'props.data.site.siteMetadata.description')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')
    const [author] = get(this, 'props.data.allContentfulPerson.edges')

    return (
      <Layout location={this.props.location}>
        <div style={{ background: '#fff' }}>
          <Helmet title={siteTitle} />
          <div className="container-fluid" id="hero-section">
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="hero-content"> 
                  <h1>Flip and Earn!</h1>
                  <p className="lead">Curated products from trustworthy factories, crisp product images, detailed descriptions, hassle free streamlined order management and ontime shipping directly to your customer</p>
                </div>
                <a href="#" className="btn btn-primary">Get Started For Free</a>
              </div>
            </div>
          </div>
          <div className="container text-center" id="services-section">
            <div className="row">
              <div className="col-lg-12">
                <h2>How Does Flipcoo Work</h2>
                <p>We have hundreds of qualified products into our platform.</p>
                <p>You can sell products without the need of having to buy inventory upfront or pack and ship orders.</p>
              </div>
              <div className="col-lg-12">  
                <div className="flipcoo-work">
                  <div className="col-lg-5th-1 col-lg-4">
                    <img src={GetFlipcooImg} alt="get flipcoo" />
                    <h4>Get Flipcoo</h4>
                    <p>Sign up for a FREE <br />Flipcoo account</p>
                  </div>
                  <div className="col-lg-5th-1 col-lg-4">
                    <img src={FindProductsImg} alt="find products" />
                    <h4>Find Products</h4>
                    <p>Find awesome products to sell online</p>
                  </div>
                  <div className="col-lg-5th-1 col-lg-4">
                    <img src={ListItemsImg} alt="list your items" />
                    <h4>List Your Items</h4>
                    <p>List the products for your store or marketplace</p>
                  </div>
                  <div className="col-lg-5th-1 col-lg-4">
                    <img src={SellNowImg} alt="sell now" />
                    <h4>Sell Now</h4>
                    <p>Sell and get the products from Flipcoo</p>
                  </div>
                  <div className="col-lg-5th-1 col-lg-4">
                    <img src={ReadyToShipImg} alt="ready to ship" />
                    <h4>Ready to Ship</h4>
                    <p>Ship the product directly to your customers</p>
                  </div>
                  <div className="clear"></div>
                </div>
              </div>
            </div>
            <div className="row" id="one-stop-solution">
              <div className="col-lg-12">
                <h2>One Stop Solution for Ecommerce Retailers</h2>
              </div>
              <div className="col-lg-9 infograp">
                <img src={InfograpImg} alt="infograp" />
              </div>
              <div className="col-lg-3 features">
                <div className="feature-item"> 
                  <div className="col-lg-8">
                    <h3>Bigger Profit</h3>
                  </div>
                  <div className="col-lg-4">
                    <img src={BiggerProfitImg} alt="bigger profit" className="bigger-profit" />
                  </div>
                  <img src={DividerPurplerImg} alt="divider-purple" className="divider-purple" />
                </div>
                <div className="feature-item"> 
                  <div className="col-lg-8">
                    <h3 className="top-45">Fast Dispatch</h3>
                  </div>
                  <div className="col-lg-4">
                    <img src={FastDispatchImg} alt="fast dispatch" />
                  </div>
                  <img src={DividerPurplerImg} alt="divider-purple" className="divider-purple" />
                </div>
                <div className="feature-item"> 
                  <div className="col-lg-8">
                    <h3>Compatibility</h3>
                  </div>
                  <div className="col-lg-4">
                    <img src={CompatibilityImg} alt="compatibility" className="compatibility" />
                  </div>
                  <img src={DividerPurplerImg} alt="divider-purple" className="divider-purple" />
                </div>
                <a href="#" className="btn btn-light btn-secondary">See All Features</a>
              </div>
            </div>
            <div className="row" id="best-selling-row">
              <div className="col-lg-12">
                <h2>New and Best-Selling Products in the Flipcoo Platform</h2>
                <p>Flipcoo gives you access to hundreds of awesome products. Looking for one to sell in your store?</p>
              </div>
            </div>
            <div className="row" id="product-row">
              <div className="col-md-3">
                <div className="product">
                  <img src={IronHairStraightenerImg} alt="iron hair straightener" />
                  <p className="product-name">Iron Hair Straightener</p>
                  <p className="product-price">$39.99</p>
                  <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
                </div>  
              </div>
              <div className="col-md-3">
                <div className="product">
                  <img src={ProfessionalYogaMatImg} alt="professional yoga mat" />
                  <p className="product-name">Professional Yoga Mat</p>
                  <p className="product-price">$22.99</p>
                  <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product">
                  <img src={OutdoorWaterBottleImg} alt="outdoor water bottle" />
                  <p className="product-name">Outdoor Water Bottle</p>
                  <p className="product-price">$15.99</p>
                  <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
                </div>
              </div>
              <div className="col-md-3">
                <div className="product">
                  <img src={WirelessComputerMouseImg} alt="wireless computer mouse" />
                  <p className="product-name">Wireless Computer Mouse</p>
                  <p className="product-price">$25.99</p>
                  <a href="#" className="btn btn-light btn-secondary">Start Selling Now</a>
                </div>
              </div>  
            </div>
            <div className="row" id="logistic-partners">
              <div className="col-lg-12">
                <h2>Our Logistic Partner & Integrations</h2>
                <p><strong>We work hand in hand with <img src={ShipcooImg} alt="shipcoo logo" className="shipcoo-logo" /></strong></p>
                <p>You don't need to work with a system developer to connect your fulfillment operations to Flipcoo.</p>
                <p>With a real-time connection, Shipcoo provides complete automation of order fulfillment for direct dropship sales.</p>
                <p className="carousel-title"><strong>Flipcoo Integrates With the Top Ecommerce Platforms</strong></p>
              </div>
            </div>
            <div className="row align-items-center owl-slider">
              <div className="col-12 col-carousel">
                <MyLoadableCarousel />
              </div>
            </div>
            <div className="row align-items-center owl-slider-mobile">
              <div className="col-12 col-carousel">
                <MyLoadableCarouselMobile />
              </div>
            </div>
            <div className="row" id="pricing-title">
              <div className="col-lg-12">
                <h2>Pricing Plans</h2>
                <p>We offer different solutions for your business. Check out our pricing plans and find out what works best for you!</p>
              </div>  
            </div>
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
          <div className="container-fluid text-center " id="orange-section">
            <div className="row">
              <div className="col-lg-12">
                <h2>Create a Free Flipcoo Account Today!</h2>
                <p>Browse our hottest product feeds, integrations and automation tools.</p>
                <p>We've made it easier than ever to try our platform.</p>
                <a href="#" className="btn btn-primary">Get Started For Free</a>
              </div>  
            </div>
          </div>
        </div>
        <ContactForm />
      </Layout>
    )
  }
}

export default RootIndex

export const pageQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      edges {
        node {
          title
          slug
          publishDate(formatString: "MMMM Do, YYYY")
          tags
          heroImage {
            fluid(maxWidth: 350, maxHeight: 196, resizingBehavior: SCALE) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
          description {
            childMarkdownRemark {
              html
            }
          }
        }
      }
    }
    allContentfulPerson(
      filter: { contentful_id: { eq: "15jwOBqpxqSAOy2eOO4S0m" } }
    ) {
      edges {
        node {
          name
          shortBio {
            shortBio
          }
          title
          heroImage: image {
            fluid(
              maxWidth: 1180
              maxHeight: 480
              resizingBehavior: PAD
              background: "rgb:000000"
            ) {
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`
