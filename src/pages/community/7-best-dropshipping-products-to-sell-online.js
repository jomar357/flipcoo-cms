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



class CommunityPage extends React.Component {
  render() {
    const siteTitle = get(this, 'props.data.site.siteMetadata.title')

    return (
		<Layout location={this.props.location}>
			<div style={{ background: '#fff' }}>
				<Helmet title="Join the Flipcoo Community | Flipcoo" />
				<div className="container text-center community-section single-page" id="community-section-1">
					<div className="row">
					  	<div className="col-lg-12 text-left">
					    	<h2>Dropshipping Tips</h2>
					    	<a className="btn-primary btn-back" href="/community/">
					    		<i className="fa fa-caret-left"></i> Back
					    	</a>
					    </div>
					    <div className="col-lg-12 col-md-6 page-content">
					    	<div className="community-news-page text-left">
					    		<img src={DropshippingTipsImg} alt="tips for your product selection" />
					    		<h3>7 Best Dropshipping Products to Sell Online</h3>
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