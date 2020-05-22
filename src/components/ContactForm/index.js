import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"

const ContactForm = () => (
  <div className="container" id="contact-form">
    <div className="row">
      <div className="col-lg-5">
        <h2>Contact Us</h2>
        <p>Want to know more about Flipcoo?</p>
        <p>Drop us a line and speak to our specialist.</p>
      </div>
      <div className="col-lg-7">
        <form>
          <div className="row">
            <div className="col-lg-12 input-container">
              <div className="contact-input-div">
                <input type="text" name="your-store" className="contact-input" placeholder="Your Store Name" />
              </div>  
            </div>  
            <div className="col-lg-6 input-container">
              <div className="contact-input-div">
                <input type="text" name="your-fname" className="contact-input" placeholder="First Name" />
              </div> 
            </div>
            <div className="col-lg-6 input-container">
              <div className="contact-input-div">
                <input type="text" name="your-lname" className="contact-input" placeholder="Last Name" />
              </div>  
            </div>
            <div className="col-lg-6 input-container">
              <div className="contact-input-div">
                <input type="tel" name="your-phone" className="contact-input" placeholder="Phone" />
              </div>
            </div>
            <div className="col-lg-6 input-container">
              <div className="contact-input-div">
                <input type="text" name="your-country" className="contact-input" placeholder="Country" />
              </div>
            </div>
            <div className="col-lg-12 input-container">
              <div className="contact-input-div">
                <input type="eamil" name="your-email" className="contact-input" placeholder="Email" />
              </div>  
            </div>
            <div className="col-lg-12 input-container">
              <div className="contact-input-div">
                <textarea rows="3" name="your-message" className="contact-input" placeholder="Message"></textarea>
              </div>  
            </div>
            <div className="col-lg-12 input-container">
                <input type="submit"  className="btn btn-submit" value="Contact Us" placeholder="Message" />
            </div>
          </div>
        </form>
      </div> 
    </div>  
  </div>
)

export default ContactForm