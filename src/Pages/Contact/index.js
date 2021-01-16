import React from 'react'
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'
import brand1 from '../../Assets/brand1.png'
import brand2 from '../../Assets/brand2.png'
import brand3 from '../../Assets/brand3.png'
import brand4 from '../../Assets/brand4.png'
import brand5 from '../../Assets/brand5.png'

const Contact = () => {
    return (
        <div>
            <Header color="black" />
             {/* Inne Page Banner Area Start Here  */}
        <section className="inner-page-banner bg-common inner-page-top-margin overlay-dark-40" data-bg-image="img/figure/inner-page-banner1.jpg">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="breadcrumbs-area">
                            <h1>Contact With Us</h1>
                            <ul>
                                <li>
                                    <a href="/landing">Home</a>
                                </li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
         {/* Inne Page Banner Area End Here  */}
          {/* Contact Page Area Start Here  */}
        <section className="contact-page-wrap bg--accent">
            <div className="single-item">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact-box">
                                <h2 className="item-heading">Get In Touch</h2>
                                <p>Have any question/suggestion? Message Us.</p>
                                <form className="contact-form-box" id="contact-form">
                                    <div className="row">
                                        <div className="col-12 form-group">
                                            <input type="text" placeholder="Your Name *" className="form-control" name="name"
                                                data-error="Name field is required" required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-12 form-group">
                                            <input type="email" placeholder="Your E-mail *" className="form-control" name="email"
                                                data-error="E-mail field is required" required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-12 form-group">
                                            <input type="text" placeholder="Subject *" className="form-control" name="subject"
                                                data-error="Subject field is required" required />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-12 form-group">
                                            <textarea placeholder="Message*" className="textarea form-control" name="message"
                                                id="form-message" rows="7" cols="20" data-error="Message field is required"
                                                required></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                        <div className="col-12 form-group mb-0 mt-3">
                                            <button type="submit" className="item-btn">Submit Message</button>
                                        </div>
                                    </div>
                                    <div className="form-response"></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="single-item">
                <div class="google-map-wrap-layout2">
                <iframe src="https://www.google.com/maps/d/u/0/embed?mid=17GaDPP4tF3pJIK-mtA4cFCyYNMCxxtuE" width="640" height="480" title="map"></iframe>               
                </div>
            </div>
        </section>
         {/* Contact Page Area End Here  */}
          {/* Brand Area Start Here  */}
        <section class="brand-wrap-layout1 bg--light padding-top-9p6 padding-bottom-7">
            <div class="container">
                <div class="rc-carousel" data-loop="true" data-items="6" data-margin="30" data-autoplay="true"
                    data-autoplay-timeout="5000" data-smart-speed="2000" data-dots="false" data-nav="false"
                    data-nav-speed="false" data-r-x-small="2" data-r-x-small-nav="false" data-r-x-small-dots="false"
                    data-r-x-medium="3" data-r-x-medium-nav="false" data-r-x-medium-dots="false" data-r-small="4"
                    data-r-small-nav="false" data-r-small-dots="false" data-r-medium="5" data-r-medium-nav="false"
                    data-r-medium-dots="false" data-r-large="6" data-r-large-nav="false" data-r-large-dots="false"
                    data-r-extra-large="6" data-r-extra-large-nav="false" data-r-extra-large-dots="false">
                    <div class="brand-box-layout1">
                        <img src={brand2} alt="Brand" class="img-fluid" />
                    </div>
                    <div class="brand-box-layout1">
                        <img src={brand1} alt="Brand" class="img-fluid" />
                    </div>
                    <div class="brand-box-layout1">
                        <img src={brand5} alt="Brand" class="img-fluid" />
                    </div>
                    <div class="brand-box-layout1">
                        <img src={brand3} alt="Brand" class="img-fluid" />
                    </div>
                    <div class="brand-box-layout1">
                        <img src={brand4} alt="Brand" class="img-fluid" />
                    </div>
                    <div class="brand-box-layout1">
                        <img src={brand5} alt="Brand" class="img-fluid" />
                    </div>
                </div>
            </div>
        </section>
         {/* Brand Area End Here  */}
         <Footer />
        </div>
        
    )
}

export default Contact
