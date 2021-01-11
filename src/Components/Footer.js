import React from 'react'

const Footer = () => {
    return (
        <footer>
            <section className="footer-top-wrap">
                <div className="container">
                    <div className="row">
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-logo">
                                    <a href="index.html"><img src="/assets/img/footer-logo.png" className="img-fluid" alt="footer-logo" /></a>
                                </div>
                                <div className="footer-about">
                                    <p>Use the Upwork platform chat ande your desktop metro.</p>
                                </div>
                                <div className="footer-contact-info">
                                    <ul>
                                        <li><i className="fas fa-map-marker-alt"></i>34 Street kancas City United States
                                            area.</li>
                                        <li><i className="fas fa-phone"></i>+123 6669 000</li>
                                        <li><i className="far fa-envelope"></i>info@listygo.com</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-header">
                                    <h3>Top Highlights</h3>
                                </div>
                                <div className="widget_nav_menu">
                                    <ul>
                                        <li><a href="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Hotel</a></li>
                                        <li><a href="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Restaurant</a></li>
                                        <li><a href="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Appartment</a></li>
                                        <li><a href="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">SPA &amp; Beauty</a></li>
                                        <li><a href="https://www.radiustheme.com/demo/html/listygo/listygo/single-departments.html">Atuomation</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-header">
                                    <h3>Support</h3>
                                </div>
                                <div className="widget_nav_menu">
                                    <ul>
                                        <li><a href="about-us.html">Live Chat</a></li>
                                        <li><a href="about-us.html">FAQ</a></li>
                                        <li><a href="faq.html">Stay safe</a></li>
                                        <li><a href="https://www.radiustheme.com/demo/html/listygo/listygo/appointment.html">Contact us</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="single-item col-lg-3 col-md-6 col-12">
                            <div className="footer-box">
                                <div className="footer-header">
                                    <h3>Follow Us On</h3>
                                </div>
                                <div className="footer-social">
                                    <ul>
                                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
                                        <li><a href="#"><i className="fab fa-pinterest-p"></i></a></li>
                                        <li><a href="#"><i className="fab fa-skype"></i></a></li>
                                    </ul>
                                </div>
                                <ul className="folow-us">
                                    <li>
                                        <a href="#">
                                            <img src="/assets/img/figure/follow1.jpg" alt="follow" />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="/assets/img/figure/follow2.jpg" alt="follow" />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="footer-bottom-wrap">
                <div className="container">
                    <div className="copyright">2018 Copyright © listygo.com</div>
                </div>
            </section>
        </footer>
    )
}
export default Footer
