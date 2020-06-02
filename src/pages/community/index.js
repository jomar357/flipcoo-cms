import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import { Helmet } from 'react-helmet'
import Layout from '../../components/layout'
import ContactForm from "../../components/ContactForm"
import DropshippingTipsImg from "../../images/community/dropshipping-tips.png"
import WhatIsDropshippingImg from "../../images/community/what-is-dropshipping.png"
import ValueLogicsImg from "../../images/community/7-value-logics-for-dropshipping.png"
import FacebookBusinessGuideImg from "../../images/community/facebook-business-guide.png"
import HowToFindCustomerThroughIntagramImg from "../../images/community/how-to-find-customer-on-instagram.png"
import Make5000InDropshippingImg from "../../images/community/make-$5000-in-dropshipping.png"
import WhatIsCdnImg from "../../images/community/what-is-cdn.png"
import BarkBoxImg from "../../images/community/bark-box.png"
import FacebookWhiteImg from "../../images/logos/facebook-white.png"
import IgWhiteImg from "../../images/logos/ig-white.png"
import TwitterWhiteImg from "../../images/logos/twitter-white.png"
import LinkedinWhiteImg from "../../images/logos/linkedin-white.png"
import PinteresWhiteImg from "../../images/logos/pinterest-white.png"
import ArticlePreview from '../../components/CommunityPreview'

class CommunityPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')
    const posts = get(this, 'props.data.allContentfulBlogPost.edges')

    return (
		<Layout location={this.props.location}>
			<div style={{ background: '#fff' }}>
				<Helmet title="Join the Flipcoo Community | Flipcoo" />
				<div className="container-fluid" id="community-hero-section">
					<div className="row">
					  	<div className="col-lg-12 text-center">
					    	<div className="hero-content"> 
					      		<h1>Join the Flipcoo Community</h1>
					      		<p className="lead">For e-commerce news, dropshipping professionals,<br /> industry insights and best practices</p>
					    	</div>
					    	<a target="_blank" href="https://app.flipcoo.com/register" className="btn btn-primary">Get Started For Free</a>
					  	</div>
					</div>
				</div>
				<div className="container text-center community-section dropshipping-tips" id="community-section-1">
					<div className="row">
						<div className="col-lg-12 text-left">
					    	<h2>Dropshipping Tips</h2>
						</div>
						{posts.map(({ node }) => {
						return (
						    <ArticlePreview article={node} />
						)
						})}
		            </div>
				</div>
				<div className="container text-center community-section dropshipping-tips" id="community-section-2">
					<div className="row">
					  	<div className="col-lg-12 text-left">
					    	<h2>Business Guides</h2>
					    </div>
					    <div className="col-lg-4 col-md-6">
					    	<div className="community-news text-left">
					    		<img src={FacebookBusinessGuideImg} alt="how to create the perfect facebook businesss page" />
					    		<div className="community-news-content">
					    			<h3>How to Create the Perfect Facebook Businesss Page</h3>
					    			<p>The process of judging whether a product is suitable for dropshipping actually has no set methodology. You can accumulate experience and then form your own idea.</p>
					    			<a className="btn-primary btn-read-more" href="#">
					    				Read More <i className="fa fa-caret-right"></i>
					    			</a>
					    		</div>	
					    	</div>
					    </div>
					    <div className="col-lg-4 col-md-6">
					    	<div className="community-news text-left">
					    		<img src={HowToFindCustomerThroughIntagramImg} alt="how to find customer through instagram" />
					    		<div className="community-news-content">
					    			<h3>How to Find Customer Through Instagram</h3>
					    			<p>If you want to increase traffic to your online store, a wide range of send direct instagram message is a feasible method</p>
					    			<a className="btn-primary btn-read-more" href="#">
					    				Read More <i className="fa fa-caret-right"></i>
					    			</a>
					    		</div>	
					    	</div>
					    </div>
					    <div className="col-lg-4 col-md-6">
					    	<div className="community-news text-left">
					    		<img src={WhatIsCdnImg} alt="what is a cdn and why does your website need it?" />
					    		<div className="community-news-content">
					    			<h3>What is a CDN and Why Does Your Website Need it?</h3>
					    			<p>The speed of website opening is obviously important, and CDN is an effective and practical method to help you to speed up.</p>
					    			<a className="btn-primary btn-read-more" href="#">
					    				Read More <i className="fa fa-caret-right"></i>
					    			</a>
					    		</div>	
					    	</div>
					    </div>
					</div>   
				</div>
				<div className="container text-center community-section dropshipping-tips" id="community-section-3">
					<div className="row">
					  	<div className="col-lg-12 text-left">
					    	<h2>Success Stories</h2>
					    </div>
					    <div className="col-lg-4 col-md-6">
					    	<div className="community-news text-left">
					    		<img src={BarkBoxImg} alt="how can barkbox achieve annual revenue of more than $100 million" />
					    		<div className="community-news-content">
					    			<h3>How Can BarkBox Achieve Annual Revenue of More Than $100 million</h3>
					    			<p>Barkbox is a company that sells pet dog supplies. Users need to pay a certain amount of monthly subscription fee and BarkBox users can get a dog gift box worth $40 monthly.</p>
					    			<a className="btn-primary btn-read-more" href="#">
					    				Read More <i className="fa fa-caret-right"></i>
					    			</a>
					    		</div>	
					    	</div>
					    </div>
					    <div className="col-lg-4 col-md-6">
					    	<div className="community-news text-left">
					    		<img src={Make5000InDropshippingImg} alt="how can this guy make $5000 in a short time with dropshipping" />
					    		<div className="community-news-content">
					    			<h3>How can this guy make $5000 in a short time with dropshipping</h3>
					    			<p>If you want to increase traffic to your online store, a wide range of send direct instagram message is a feasible method</p>
					    			<a className="btn-primary btn-read-more" href="#">
					    				Read More <i className="fa fa-caret-right"></i>
					    			</a>
					    		</div>	
					    	</div>
					    </div>
					</div>   
				</div>
				<div className="container-fluid text-center community" id="orange-section">
	            	<div className="row">
	              		<div className="col-lg-12">
	                		<h2>Join the Flipcoo Community Today!</h2>
	                		<p>Take a look to our social media pages and get weekly insights into all things dropshipping</p>
	                		<div className="social-medias">
	                			<div className="col-lg-5th-1 col-lg-4">
	                				<a href="https://www.facebook.com/flipcoo2020" target="_blank">
	                					<img src={FacebookWhiteImg} alt="media logo white" />
	                				</a>
	                			</div>
	                			<div className="col-lg-5th-1 col-lg-4">
	                				<a href="https://twitter.com/Flipcoo2020" target="_blank">
	                					<img src={TwitterWhiteImg} alt="media logo white" />
	                				</a>
	                			</div>
	                			<div className="col-lg-5th-1 col-lg-4">
	                				<a href="https://hk.linkedin.com/company/flipcoo?trk=public_profile_experience-item_result-card_subtitle-click" target="_blank">
	                					<img src={LinkedinWhiteImg} alt="media logo white" />
	                				</a>
	                			</div>
	                			<div className="col-lg-5th-1 col-lg-4">
	                				<a href="https://www.instagram.com/flipcoo/" target="_blank">
	                					<img src={IgWhiteImg} alt="media logo white" />
	                				</a>
	                			</div>
	                			<div className="col-lg-5th-1 col-lg-4">
	                				<a href="https://www.pinterest.com/flipcoo/" target="_blank">
	                					<img src={PinteresWhiteImg} alt="media logo white" />
	                				</a>
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

export default CommunityPage

export const CommunityQuery = graphql`
  query CommunityIndexQuery {
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
            fluid(maxWidth: 350, maxHeight: 156, resizingBehavior: SCALE) {
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
  }
`
