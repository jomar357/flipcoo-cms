import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import styles from '../article-preview.module.css'

export default ({ article }) => (
  <div className="col-lg-4 col-md-6" tag={article.tags}>
    <div className="community-news text-left">
      <Img alt="" fluid={article.heroImage.fluid} />
      <div className="community-news-content">
        <h3>
          {article.title}
        </h3>
        <div
          dangerouslySetInnerHTML={{
          __html: article.description.childMarkdownRemark.html,
          }}
        />
        <Link to={`/community/${article.slug}`} className="btn-primary btn-read-more">Read More <i className="fa fa-caret-right"></i></Link>
      </div>  
    </div>
  </div>  
)
